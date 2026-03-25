---
title: "Cómo desplegué un proyecto Astro con Docker, Nginx y envío de correos"
img: "astro-docker.png"
date: 2026-03-20
description: "Experiencia real desplegando una app con Astro, Docker y SMTP. Problemas, soluciones y aprendizajes."
tags: ["Astro", "Docker", "Nginx", "Node.js", "DevOps"]
repository: "https://github.com/Ivan-del3/casa-oracion"
link: "https://tu-web.com"

sections:
  - title: "Introducción y Stack tecnológico"
    text: |
      En este proyecto desarrollé una aplicación con Astro preparada para ejecutarse en Docker, con envío de correos mediante SMTP y pensada para producción real. Más allá del desarrollo, el mayor reto fue el despliegue y la configuración del entorno.
      
      El stack tecnológico utilizado incluye: Astro (SSG + islas), Node.js, Docker, Nginx (reverse proxy), Nodemailer y SendGrid.

  - title: "Problema 1: Envío de correos en Docker"
    text: |
      Inicialmente intenté usar Gmail como servidor SMTP, pero fallaba constantemente. Gmail bloquea IPs de contenedores, requiere configuraciones extra como OAuth y resulta poco fiable en producción.
      
      La solución definitiva fue implementar SendGrid. Su configuración es mucho más sencilla, funciona perfectamente dentro de contenedores Docker y su plan gratuito es más que suficiente para la fase de desarrollo.

  - title: "Problema 2: Reverse Proxy (Nginx)"
    text: |
      Cuando añadí Nginx delante del contenedor, los formularios dejaron de funcionar. Las peticiones POST devolvían un error 403 y los correos no se enviaban.
      
      Investigando, descubrí que la causa era que Nginx no estaba pasando las cabeceras originales al contenedor de Node. Faltaban cabeceras vitales como 'Host', 'X-Forwarded-Proto' y 'X-Real-IP', necesarias para que el backend supiera de dónde venía la petición.

  - title: "Solución y Despliegue"
    text: |
      La solución pasó por configurar Nginx para que reenviara estas cabeceras usando 'proxy_set_header' y permitiera el 'Upgrade' para conexiones persistentes. Esto permitió que Astro Actions procesara correctamente las peticiones.
      
      Una vez configurado, el despliegue se resume en ejecutar: 'docker compose up -d --build'. Además, para asegurar que los correos no lleguen a la carpeta de Spam en producción, es obligatorio configurar los registros DNS: SPF, DKIM y DMARC.

  - title: "Lecciones aprendidas y Conclusión"
    text: |
      Este proyecto me ayudó a entender mejor cómo funciona un entorno real de producción. Aprendí que el problema rara vez es el código en sí, sino la infraestructura; Docker simplifica el entorno pero añade capas de complejidad a la red, y un Nginx mal configurado puede inutilizar la aplicación.
      
      Pasé de centrarme únicamente en el código a tener en cuenta la infraestructura, la seguridad y la configuración de red.
---