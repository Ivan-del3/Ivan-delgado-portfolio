# Proyecto Astro – Casa de Oración

Este proyecto está desarrollado con **Astro**, utilizando **islas React** para funcionalidades específicas como **Google reCAPTCHA v2** y el control del envío del formulario.  


El proyecto está preparado para ejecutarse en entorno **Docker** y pensado para ser fácil de desplegar tanto en desarrollo como en producción.

---

## 🚀 Puesta en marcha del proyecto

## 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

## 2. Instalar npm y node

Desde la web oficial de Node.js https://nodejs.org/ descarga el instalador de Node.js (npm ya viene incluido).

A continuación comprobar la instalción con:

```bash
node -v
npm -v
```

## 3. (Recomendado) Extensión de Astro para Visual Studio Code

Si usas Visual Studio Code, instala la extensión oficial.

Esta extensión proporciona:

- Autocompletado

- Sintaxis correcta

- Mejor experiencia con archivos .astro

## 4. Configurar variables de entorno

En la raíz del proyecto, crea el archivo .env

Estas variables son necesarias para que funcione correctamente y estos son los valores que se ha utilizado en desarrollo.


###  Consideraciones de producción y reverse proxy

####  Envío de correos: SendGrid vs Gmail

En desarrollo se ha utilizado **SendGrid** en su plan gratuito:

- Permite enviar hasta 100 correos diarios.
- Es estable, fácil de configurar y funciona dentro de contenedores Docker.

> Por qué no se puede usar Gmail desde Docker:
> - Gmail bloquea accesos SMTP desde IPs que considera no confiables (como contenedores).
> - Requiere configuraciones adicionales de seguridad (OAuth o “less secure apps”).
> - Puede rechazar automáticamente los envíos, lo que hace poco fiable su uso en desarrollo o producción con Docker.

##### Producción

En producción hay varias opciones:

1. **Seguir usando SendGrid:**  
   - Ampliar el plan en función del volumen de correos diario estimado.
2. **Cambiar a otro servidor de correo:**  
   - Modificar las variables de entorno (`EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASS`)  
   - Ajustar pequeños detalles en `src/actions/index.ts` para adaptarse al nuevo servidor SMTP

>  Para evitar que los correos lleguen a spam:
> - Configurar registros **SPF**, **DKIM** y **DMARC** en el dominio de producción.
> - Estos registros indican a los servidores de correo que los mensajes enviados son legítimos y autorizados.

---

#### reCAPTCHA v2

- En desarrollo se ha utilizado la **versión gratuita de reCAPTCHA v2** con dominio `localhost`.
- Protege el formulario frente a envíos automáticos y bots.

##### Producción

- Será necesario generar **una nueva `PUBLIC_RECAPTCHA_SITE_KEY`** y **`RECAPTCHA_SECRET`** asociadas al dominio real del sitio web.
- Estas claves deben reemplazar las de desarrollo en el archivo `.env`.

---

#### Reverse proxy y cabeceras necesarias (Nginx)

Cuando ejecutas tu proyecto Astro con Docker, y lo expones directamente al navegador, las solicitudes llegan directamente al contenedor, sin intermediarios.

>  En este caso:
> - Recibe la IP real del cliente.
> - Las cabeceras HTTP estándar (Host, X-Forwarded-Proto) son correctas por defecto.
> - Las solicitudes POST, incluidos los formularios de Astro Actions, funcionan sin problema

Pero si usas un reverse proxy como Nginx delante del contenedor:

>  En este caso:
> - Todas las solicitudes pasan primero por Nginx y luego se reenvían al contenedor.
> - Por defecto, Nginx reescribe algunas cabeceras y no pasa información esencial como:
>   - Host → el backend no sabe a qué dominio se envió la petición.
>   - X-Forwarded-Proto → el backend no sabe si la conexión original era HTTP o HTTPS.
>   - X-Real-IP → el backend no recibe la IP real del cliente.
> - Además, los WebSockets y POST grandes pueden bloquearse si Nginx no está configurado correctamente.

Si estas cabeceras no se configuran, Astro Actions puede rechazar las solicitudes por motivos de seguridad (403), y los correos no se envían, aunque el contenedor de Node.js funcione perfectamente.



Ejemplo de configuración:

```nginx
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}

server {
    listen 80;  
    server_name example.com;

    location / {
        proxy_pass http://astro:3000;
        proxy_http_version 1.1;

        # Cabeceras necesarias para Astro Actions
        proxy_set_header Host $http_host;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Real-IP $remote_addr;

        # WebSockets
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;

        # Evita caching y problemas de POST
        proxy_cache_bypass $http_upgrade;

        # Permite enviar formularios grandes
        client_max_body_size 10M;
    }
}
```

## 5. Despliegue

Desde la raíz del proyecto, ejecuta:

```bash
docker compose up -d --build
```

Abrir el proyecto en el navegador: http://localhost:8080/


## Stack tecnológico del proyecto

### Frontend (cliente / interfaz de usuario)
Tecnologías utilizadas para mostrar y manejar la interfaz:

- **Astro**: framework principal, permite generar sitios estáticos y usar islas interactivas.
- **React (islas)**: usado dentro de Astro para funcionalidades dinámicas, como los slides, Google reCAPTCHA y el botón de envío.
- **Tailwind CSS**: framework de CSS para diseño rápido, responsivo y consistente.

### Backend (servidor / lógica de negocio)
Tecnologías que procesan datos, envían correos y gestionan formularios:

- **Node.js**: entorno de ejecución del backend.
- **Nodemailer**: librería para enviar correos electrónicos vía SMTP.
- **Astro Actions**: mecanismo de Astro para manejar formularios y acciones en el servidor.

### Servicios externos 
Herramientas de terceros integradas en el proyecto:

- **Google reCAPTCHA v2**: protege los formularios de envíos automáticos y bots.
- **SendGrid**: proveedor de correo electrónico para enviar los mensajes del formulario de manera segura.

### Herramientas de desarrollo y despliegue
- **Docker**: contenedorización de la aplicación para desarrollo y despliegue reproducible.
- **npm**: gestor de paquetes para instalar dependencias del proyecto.




## 🚀 Estructura del proyecto


```text
/
└── casa-oracion-master/
    ├── .gitignore
    ├── .vscode/
    │   ├── extensions.json
    │   └── launch.json
    ├── README.md
    ├── astro.config.mjs
    ├── docker-compose.yml
    ├── dockerfile
    ├── nginx/
    │   └── default.conf
    ├── package.json
    ├── package-lock.json
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── public/
    │   ├── cuarta-triada.png
    │   ├── decima-triada.png
    │   ├── doceava-triada.png
    │   ├── favicon.svg
    |   ├── novena-triada.png
    │   ├── octava-triada.png
    │   ├── onceava-triada.png
    │   ├── paypal1-1.jpg
    │   ├── paypal2.jpg
    │   ├── primera-triada.png
    │   ├── quinta-triada.png
    │   ├── segunda-triada.png
    │   ├── septima-triada.png
    │   ├── sexta-triada.png
    │   ├── tercera-triada.png
    │   ├── virgen-azul.png
    │   └── virgen-celestial-.jpg
    └── src/
        ├── actions/
        │   └── index.ts
        ├── assets/
        │   ├── astro.svg
        │   └── backgorund.svg
        ├── components/
        │   ├── Recaptcha.jsx
        │   └── SubmmitButton.jsx
        ├── content/
        │   ├── config.ts
        │   └── rituales/
        │       |── cuarta-triada.md
        │       |── decima-triada.md
        │       |── doceava-triada.md
        │       |── novena-triada.md
        │       |── octava-triada.md
        │       |── onceava-triada.md
        │       |── primera-triada.md
        │       |── quinta-triada.md
        │       |── segunda-triada.md
        │       |── septima-triada.md
        │       |── sexta-triada.md
        │       └── tercera-triada.md
        ├── layouts/
        │   └── Layout.astro
        ├── pages/
        │   ├── index.astro
        │   ├── contacto.astro
        │   ├── donativos.astro
        │   └── ritual/
        │       └── [id].astro
        ├── styles/
        │   └── global.css
        └── utils/
            └── recaptchaLoader.js

```
