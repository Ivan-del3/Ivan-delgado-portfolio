---
title: "DIAGRAMA DE GANTT"
img: "diagrama-gantt/intro.png"
order: 3

sections:
  - title: "Diagrama de gantt usando un archivo html"
    text: |
      Este proyecto consiste en un diagrama de Gantt simple, ligero y completamente editable desde el navegador, desarrollado únicamente con HTML, CSS y JavaScript puro. Está diseñado como una herramienta mínima para planificar tareas en el tiempo sin necesidad de instalar programas ni utilizar dependencias externas.

      El funcionamiento es muy accesible: basta con abrir el archivo index.html en cualquier navegador moderno para empezar a trabajar. No requiere servidor ni configuración adicional, lo que lo convierte en una solución práctica y portable.

      Además, el propio sistema permite descargar el documento completo en un único archivo HTML que incluye todo el código necesario (estructura, estilos y lógica), facilitando su almacenamiento o compartición.

  - title: "Funciones del diagrama"
    img: "diagrama-gantt/funcionalidad.png"
    text: |
      El diagrama permite gestionar tareas y bloques de tiempo de forma interactiva mediante diferentes funcionalidades:

      - Crear tareas, que se representan como filas dentro del diagrama.
      - Eliminar tareas activas seleccionadas previamente.
      - Añadir bloques de tiempo, representados como columnas.
      - Eliminar columnas activas.
      - Activar filas o columnas con un solo clic para trabajar sobre ellas.
      - Marcar o desmarcar bloques de tiempo dentro del diagrama haciendo clic en las celdas.

      Cada celda representa la relación entre una tarea y un periodo de tiempo. Al hacer clic sobre ella, se puede activar o desactivar su uso, lo que permite construir visualmente la planificación.

      El sistema también incluye interacción directa:

      - Al hacer clic en el nombre de una tarea, se activa su fila.
      - Al hacer clic en el encabezado de una columna (por ejemplo, “Semana 3”), se activa esa columna.
      - Las acciones de eliminación afectan únicamente al elemento activo, evitando errores.

repository: "https://github.com/Ivan-del3/diagrama-gantt"
link: "https://ivan-del3.github.io/diagrama-gantt/"

---