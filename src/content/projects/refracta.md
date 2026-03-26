---
title: "REFRACTA"
img: "refracta/intro.png"
order: 1

sections:
  - title: "Refracta"
    text: |
      Este proyecto web está desarrollado con Astro y preparado para ejecutarse en un entorno Docker, lo que permite un despliegue sencillo y consistente tanto en desarrollo como en producción.
      Su arquitectura está pensada para ofrecer una web corporativa moderna, rápida y escalable, combinando contenido estático con funcionalidades dinámicas.

      El proyecto integra un sistema completo de frontend y backend basado en Node.js, permitiendo gestionar formularios, enviar correos y adaptar el contenido según el idioma del usuario.
      Además, utiliza variables de entorno para configurar servicios externos como el envío de emails o cookies analíticas.


  - title: "Cambio de idiomas con i18n"
    img: "refracta/cambio-idioma.png"
    text: |
      El proyecto incorpora un sistema de internacionalización (i18n) que permite mostrar la web en varios idiomas, como español, inglés y chino.
      Este sistema se basa en archivos JSON que contienen las traducciones, organizadas por secciones como navegación, formularios y contenido general.

      El idioma se detecta a partir de la ruta de la URL, permitiendo cargar automáticamente los textos correspondientes en cada página.
      Además, incluye un selector de idioma que facilita al usuario cambiar entre versiones de forma rápida y accesible.

      Esta funcionalidad mejora la experiencia de usuario y permite adaptar la web a un público internacional, manteniendo una estructura limpia y fácilmente ampliable.

  - title: "Envío de correos"
    img: "refracta/formulario-correo.png"
    text: |
      El sistema incluye un formulario avanzado que permite a los usuarios enviar su currículum directamente desde la web.
      Esta funcionalidad está implementada mediante Astro Actions en el servidor y utiliza Nodemailer para gestionar el envío de correos electrónicos a través de SMTP.

      El formulario valida los datos introducidos, controla el tamaño del archivo adjunto y restringe los formatos permitidos para garantizar la seguridad.
      Una vez validado, el archivo se procesa y se envía como adjunto al correo configurado en las variables de entorno.

      Para el envío de emails se utiliza SendGrid, además, el sistema está preparado para funcionar detrás de un reverse proxy como Nginx, asegurando que las cabeceras necesarias estén correctamente configuradas y evitando errores en las solicitudes.

link: "https://refracta.net/"

---