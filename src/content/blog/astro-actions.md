---
title: "Seguridad y Validación en Astro: reCAPTCHA y TypeScript Actions"
img: "astro-actions.png"
date: 2026-03-22
description: "Cómo implementar formularios seguros en Astro utilizando Actions, validación robusta de datos y Google reCAPTCHA v2."
tags: ["Astro", "TypeScript", "React", "Security", "Backend"]


sections:
  - title: "Validación de datos en el servidor con Actions"
    text: |
      Para este proyecto, utilicé 'astro:actions' para gestionar el envío de formularios. La ventaja principal es que podemos centralizar la lógica en el servidor, validando que todos los campos requeridos (nombre, email, asunto y mensaje) existan antes de procesar nada.
      
      Además, implementé una validación estricta para archivos adjuntos, limitando el tamaño de las imágenes a 512 KB y verificando el tipo MIME para evitar archivos maliciosos.

  - title: "Integración de Google reCAPTCHA v2"
    text: |
      La seguridad contra bots es vital. He creado un componente de React que carga dinámicamente el script de Google de forma asíncrona para no afectar el rendimiento inicial (Lighthouse score).
      
      El componente renderiza el widget de reCAPTCHA y, una vez verificado, despacha un evento personalizado ('recaptcha:verified') que comunica el token al resto de la aplicación y habilita el botón de envío.

  - title: "Lógica del lado del cliente: El botón inteligente"
    text: |
      Para mejorar la UX, desarrollé un componente 'SubmitButton' que permanece deshabilitado hasta que el usuario supera el reto de reCAPTCHA. 
      
      Utiliza hooks de React para escuchar el estado de validación global. Una vez que el usuario hace clic, el botón cambia su estado a 'Enviando...', evitando así múltiples peticiones accidentales (double-tap) mientras se procesa el correo.

  - title: "Verificación del lado del servidor (Double-Check)"
    text: |
      No basta con validar en el cliente. En el Action de Astro, recibo el token ('g-recaptcha-response') y realizo una petición POST a la API de Google ('siteverify') usando mi clave secreta guardada en variables de entorno.
      
      Si Google devuelve 'success: false', lanzamos un 'ActionError' de tipo 'BAD_REQUEST', asegurando que ningún mensaje sea enviado sin haber pasado el filtro humano.

  - title: "Conclusión y Aprendizaje"
    text: |
      Combinar la potencia de las Actions de Astro con la seguridad de reCAPTCHA y la tipado estricto de TypeScript me ha permitido crear un sistema de contacto profesional, seguro y resiliente.
      
      La clave de este desarrollo fue entender que la validación debe ocurrir en ambas capas: en el cliente para una buena UX y en el servidor para una seguridad real.
---