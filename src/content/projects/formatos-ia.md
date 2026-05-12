---
title: "FORMATOS IA"
img: "formatos-ia/formatos-ia.png"
order: 5

sections:
  - title: "Formatos de texto con un modelo de IA en local"
    text: |
      Formatos es una herramienta web que toma cualquier texto y lo reescribe en el estilo seleccionado usando un modelo de lenguaje que corre en local con Ollama.
      No depende de ninguna API externa: el backend es un único archivo PHP que se comunica con Ollama mediante cURL y devuelve la respuesta directamente al frontend.

      Los cuatro modos disponibles son Profesional, Resumen, Informal y LinkedIn, cada uno con un prompt distinto que adapta el tono y la estructura del texto de salida.

  - title: "Formato correo profesional"
    img: "formatos-ia/formatos-ia-correo.png"
    text: |
      El modo Profesional reescribe el texto como un correo formal, con saludo, cuerpo estructurado y cierre.
      El resultado aparece en streaming en el panel de la derecha mientras el modelo lo genera, sin necesidad de esperar a que termine.

  - title: "Formato LinkedIn"
    img: "formatos-ia/formatos-ia-linkedin.png"
    text: |
      El modo LinkedIn transforma el texto en un post optimizado para la red, con gancho inicial, desarrollo y llamada a la acción.
      El mismo sistema de prompt intercambiable permite añadir nuevos formatos simplemente definiendo un nuevo modo en el frontend y su instrucción correspondiente en el backend.

  - title: "Arquitectura"
    text: |
      El frontend es HTML y CSS estático con un script en JavaScript que envía el texto y el modo seleccionado al backend vía fetch.
      El backend es un archivo PHP que construye el prompt según el modo, llama a la API de Ollama con cURL y devuelve la respuesta al cliente.
      El modelo usado es llama3.2, corriendo completamente en local a través de Ollama.

repository: "https://github.com/Ivan-del3/proyecto-formatos"

---
