---
title: "CASA ORACIÓN"
img: "casa-oracion/intro.png"
order: 4

sections:
  - title: "Casa de oración"
    text: |
      Este proyecto está desarrollado con Astro y combina generación de contenido estático con funcionalidades dinámicas mediante el uso de islas React.
      Está preparado para ejecutarse en un entorno Docker, lo que permite un despliegue sencillo, consistente y replicable tanto en desarrollo como en producción.

      La aplicación está diseñada como una web estructurada por contenidos espirituales (triadas), organizados de forma clara y accesible.
      Además, integra funcionalidades avanzadas como formularios protegidos, renderizado dinámico de contenido y gestión eficiente de rutas.

      El uso de Astro permite optimizar el rendimiento, cargando únicamente el JavaScript necesario en cada parte de la aplicación, lo que mejora la velocidad y la experiencia del usuario.

  - title: "Generación de rutas dinámicas basándome en archivos markdown"
    img: "casa-oracion/triadas.png"
    text: |
      Se utiliza el sistema de colecciones de Astro para gestionar contenido mediante archivos Markdown.
      Cada triada se define como un archivo independiente que contiene su información estructurada, incluyendo título, imágenes y secciones.

      A partir de estos archivos, se generan automáticamente rutas dinámicas utilizando el slug de cada documento.
      Esto permite crear páginas individuales para cada triada sin necesidad de definirlas manualmente.

      Además, el contenido se renderiza dinámicamente en el frontend, mostrando tarjetas en la página principal y páginas detalladas para cada elemento.
      Este enfoque facilita la escalabilidad del proyecto, ya que añadir nuevo contenido solo requiere crear un nuevo archivo Markdown.

  - title: "Envío de correos con google recatcha"
    img: "casa-oracion/form-correo-captcha.png"
    text: |
      El proyecto incluye un formulario de contacto que permite enviar mensajes de forma segura utilizando Astro Actions y Nodemailer.
      Para evitar envíos automáticos o maliciosos, se ha integrado Google reCAPTCHA v2 mediante una isla React.

      El componente de reCAPTCHA se encarga de validar al usuario antes de permitir cualquier interacción con el formulario.
      Hasta que la verificación no se completa correctamente, el botón de envío permanece desactivado.

      Esta integración mejora significativamente la seguridad del sistema, evitando spam y garantizando que solo usuarios reales puedan enviar solicitudes.

  - title: "Validar token para poder enviar el correo"
    img: "casa-oracion/captcha-verified.png"
    text: |
      Además de la validación en el frontend, el sistema implementa una verificación adicional en el backend para garantizar la seguridad.
      Incluso si un usuario intenta manipular el botón de envío desde el inspector del navegador, el formulario no se procesará correctamente.

      El token generado por reCAPTCHA se envía al servidor y se valida dentro de las Astro Actions, donde también se comprueban todos los datos del formulario.
      Si el token no es válido o falta información, la solicitud es rechazada automáticamente.

      Este doble sistema de validación (frontend y backend) asegura que el envío de correos sea completamente seguro, robusto y resistente a manipulaciones.

repository: "https://github.com/Ivan-del3/casa-oracion"

---