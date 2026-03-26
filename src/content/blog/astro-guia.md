---
title: "Guía completa de Astro para principiantes"
img: "guia-astro.png"
date: 2026-03-18
description: "Astro es un framework moderno para crear sitios web rápidos, optimizados y fáciles de mantener. Aprende qué es, cómo funciona y cómo empezar paso a paso."
tags: ["Astro", "Frontend", "JavaScript", "Guía"]
repository: "https://github.com/tu-usuario/guia-astro"
link: "https://tu-web.com/blog/guia-astro"

sections:
  - title: "Introducción y ¿Qué es Astro?"
    text: |
      Astro es un framework moderno para crear sitios web rápidos, optimizados y fáciles de mantener. Si vienes de HTML, CSS o JavaScript (o incluso de React, Vue, etc.), Astro te ofrece una forma muy eficiente de construir páginas sin cargar JavaScript innecesario.
      
      Es un framework para crear sitios web centrados en el contenido, como: Blogs, Landing pages, Documentación, Webs corporativas y E-commerce ligeros. Su filosofía principal es: "Menos JavaScript en el navegador = webs más rápidas". A diferencia de frameworks tradicionales (React, Vue), Astro renderiza HTML en el servidor o en build y solo envía JavaScript si es necesario.

  - title: "¿Por qué Astro es tan rápido?"
    text: |
      Astro es rápido por varias razones clave:
      
      1. Cero JavaScript por defecto: No envía JS al navegador si no lo necesitas. El HTML se genera estáticamente.
      2. Arquitectura de islas (Islands Architecture): Solo ciertas partes de la página tienen interactividad, el resto es HTML estático. Ejemplo: un Navbar interactivo usa JS, mientras el texto del blog es solo HTML. 
      3. Generación estática: Astro genera páginas HTML en build. No hay cálculos en tiempo real y todo se sirve ya listo.

  - title: "¿Qué son las islas en Astro?"
    img: "guia-astro.png"
    text: |
      Las islas son componentes interactivos dentro de una página estática. Ejemplo: Un botón con React, un carrusel o un buscador. Solo esas partes cargan JavaScript.
      
      Se definen mediante directivas como: '< MyReactComponent client:load />'.

      Tipos de carga:

      - client:load → carga al iniciar.
      - client:idle → cuando el navegador está libre.
      - client:visible → cuando aparece en pantalla.
      Esto es clave para el rendimiento.

  - title: "Integración con React, Vue, Svelte..."
    text: |
      Astro permite usar múltiples frameworks dentro del mismo proyecto. Puedes usar React, Vue, Svelte o Solid.
      
      Ejemplo con React: primero npx astro add react. Luego, en tu código:

      ---
      import Counter from '../components/Counter.jsx';
      ---

      '< Counter client:load />'
      
      Astro no reemplaza estos frameworks, los usa de forma optimizada.

  - title: "Estructura de un proyecto y archivos .astro"
    text: |
      Un proyecto típico se estructura con carpetas como public/, src/ (components, layouts, pages, styles), astro.config.mjs y package.json.
      
      Los archivos .astro son especiales y tienen 3 partes:
      
      1. Frontmatter (JavaScript entre vallas ---).
      2. HTML (Template).
      3. Style (CSS).
      
      El frontmatter se usa para importar componentes, definir variables, hacer fetch de datos y lógica del servidor. Es como el "cerebro" del componente.

  - title: "Layouts (plantillas) y Sistema de rutas"
    text: |
      Los layouts sirven para reutilizar estructuras. Usan la etiqueta '< slot />' que es donde se inserta el contenido de cada página.
      
      En cuanto al sistema de rutas, todo en src/pages/ se convierte en rutas automáticamente:
      
      - src/pages/index.astro → /
      - src/pages/blog.astro → /blog
      - src/pages/post/1.astro → /post/1
      Es muy simple y sin configuración extra.

  - title: "¿Qué necesitas para empezar?"
    text: |
      Requisitos: Node.js instalado y NPM o PNPM.

      Para crear el proyecto: 'npm create astro@latest'. Te preguntará por la plantilla, TypeScript y la instalación de dependencias. Para ejecutarlo, usa 'npm run dev'.
      
      Astro es perfecto para blogs, landing pages, webs rápidas SEO-friendly y documentación. No es ideal para apps muy dinámicas tipo dashboard complejo o apps tipo SPA intensiva.

  - title: "Conclusión: Ventajas y Desventajas"
    text: |
      Ventajas principales: Ultra rápido, usa múltiples frameworks, menos JavaScript, fácil de aprender y excelente para SEO. 
      Desventajas: No es el mejor para apps muy interactivas, ecosistema más pequeño que React y algunas cosas requieren aprender su forma de trabajar.
      
      En conclusión, Astro es uno de los frameworks más modernos y eficientes hoy en día. Si quieres webs rápidas, buen SEO y menos complejidad, Astro es una excelente elección.
---