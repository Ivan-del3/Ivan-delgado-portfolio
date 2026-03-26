---
title: "PROYECTO DE MÚSICA"
img: "proyecto-musica/intro.png"
order: 2

sections:
  - title: "Proyecto reproductor de música"
    text: |
      Este proyecto consiste en un reproductor de música completo desarrollado con tecnologías web básicas como HTML, CSS, JavaScript y PHP, utilizando SQLite como base de datos ligera.
      Su objetivo es ofrecer una solución sencilla pero funcional para reproducir canciones y gestionar contenido multimedia sin depender de sistemas externos.

      El sistema está dividido en dos partes principales: un front-end accesible para los usuarios donde pueden escuchar música, y un panel de administración que permite gestionar las canciones.
      Toda la información se almacena de forma local, incluyendo las portadas y los archivos de audio, lo que hace que el proyecto sea fácil de instalar y mantener.

      Además, incorpora un endpoint en PHP que devuelve los datos en formato JSON, permitiendo conectar el front-end con la base de datos de manera dinámica.

  - title: "Reproductor"
    img: "proyecto-musica/reproductor.png"
    text: |
      El reproductor permite a los usuarios visualizar y reproducir canciones de forma interactiva.
      Cada canción se muestra con su portada y, al seleccionarla, se abre un modal con información detallada y controles de reproducción.

      Incluye funcionalidades como reproducir, pausar, avanzar entre canciones y una barra de progreso que muestra el tiempo actual y la duración total del audio.
      La navegación entre canciones se realiza mediante botones de siguiente y anterior, mejorando la experiencia del usuario.

      Todo el contenido se carga dinámicamente desde el endpoint en formato JSON, lo que permite mantener el reproductor actualizado automáticamente.

  - title: "Panel de control"
    img: "proyecto-musica/panel-control.png"
    text: |
      El panel de control está diseñado para administrar las canciones de forma sencilla e intuitiva.
      Desde aquí se pueden visualizar todas las piezas almacenadas en la base de datos, incluyendo su portada, archivo de audio y título.

      Permite realizar operaciones CRUD completas: crear nuevas canciones, editar las existentes y eliminar aquellas que ya no sean necesarias.
      Al eliminar una canción, también se eliminan automáticamente sus archivos asociados del sistema.

      Esta parte del proyecto está desarrollada en PHP y se conecta directamente con la base de datos SQLite, garantizando una gestión eficiente de la información.

  - title: "Modal para crear o editar canciones"
    img: "proyecto-musica/crear-editar.png"
    text: |
      El sistema incluye un modal interactivo que facilita la creación y edición de canciones sin necesidad de cambiar de página.
      A través de este formulario, el administrador puede subir una nueva portada, un archivo de audio y asignar un título a la canción.

      En modo edición, el formulario permite actualizar cualquiera de los campos, reemplazando los archivos anteriores si es necesario.
      El sistema también se encarga de limpiar los nombres de los archivos y almacenarlos correctamente en las carpetas correspondientes.

      Esta funcionalidad mejora la usabilidad del panel, haciendo que la gestión del contenido sea más rápida, cómoda y eficiente.

repository: "https://github.com/Ivan-del3/proyecto-musica"

---