---
title: "TradeBall"
img: "tradeball/intro.png"
order: 1

sections:
  - title: "TradeBall — Marketplace"
    text: |
      TradeBall es un marketplace centrado en la compraventa de artículos de Pokémon: cartas, figuras, videojuegos, peluches, ropa y otros coleccionables.
      Los usuarios pueden publicar sus artículos, explorar el catálogo, guardar favoritos, chatear con vendedores y gestionar compras mediante un sistema de escrow con wallet integrado.

      El frontend está construido con React 19 + Vite y Tailwind CSS, y el backend con Laravel 11 + Sanctum para autenticación por token.
      El chat en tiempo real funciona sobre Laravel Reverb (WebSockets). En producción, toda la aplicación se despliega en un Ubuntu Server con Docker Compose:
      un contenedor para la base de datos MySQL, otro para la API Laravel, otro de Nginx como servidor web de la API, otro para Reverb, el frontend servido por Nginx, y un Nginx Proxy Manager que gestiona el enrutamiento y los certificados SSL.

  - title: "Filtros y búsqueda"
    img: "tradeball/filtros.png"
    text: |
      La página principal muestra el catálogo completo con opciones de filtrado por categoría, rango de precio y estado del artículo.
      La barra de búsqueda filtra en tiempo real por nombre de producto, permitiendo encontrar artículos de forma rápida sin recargar la página.
      Los filtros se combinan entre sí para acotar los resultados según las necesidades del usuario.

  - title: "Detalle de producto"
    img: "tradeball/product-detail.png"
    text: |
      Al acceder a un producto se muestra su galería de imágenes, descripción, precio, estado y datos del vendedor.
      Desde esta misma vista el usuario puede iniciar el proceso de compra, guardar el artículo en favoritos para consultarlo más tarde, o abrir un chat directo con el vendedor para resolver dudas antes de comprar.

  - title: "Vender un producto"
    text: |
      Cualquier usuario registrado puede poner artículos de colección a la venta desde su perfil.
      El formulario permite subir varias imágenes, añadir título, descripción, precio y categoría (cartas, figuras, videojuegos, etc.).
      El artículo queda visible en el catálogo en cuanto se publica y el vendedor puede editarlo o retirarlo en cualquier momento.

  - title: "Perfil de usuario"
    img: "tradeball/profile.png"
    text: |
      Cada usuario dispone de una página de perfil donde puede actualizar su nombre y foto de perfil subiendo una imagen directamente desde el dispositivo.
      También tiene acceso a su historial de compras y ventas, sus productos publicados y su saldo en la wallet.

  - title: "Chat en tiempo real"
    img: "tradeball/chat.png"
    text: |
      Cuando un comprador contacta con un vendedor o gestiona un pedido activo, dispone de un chat en tiempo real integrado en su perfil.
      Los mensajes se sincronizan al instante mediante WebSockets a través de Laravel Reverb, sin necesidad de recargar la página.
      El canal es privado y solo accesible para el comprador y el vendedor implicados en el pedido.

  - title: "Compra y venta"
    text: |
      Al iniciar una compra, el producto pasa a estado reservado y el sistema comprueba que el comprador tiene saldo suficiente en su wallet.
      El vendedor recibe la solicitud y puede aceptarla o rechazarla. Si la acepta, el pedido queda confirmado y el dinero permanece retenido en escrow hasta que el comprador confirme la recepción del artículo.
      Si el vendedor rechaza la solicitud, el artículo vuelve a estar disponible de inmediato.

  - title: "Confirmación y escrow"
    img: "tradeball/confirmar-rechazar.png"
    text: |
      Una vez que el comprador confirma la recepción del artículo, los fondos retenidos en escrow se transfieren al vendedor y el producto pasa a estado vendido.
      Este sistema garantiza la seguridad de ambas partes: el comprador no pierde su dinero si no recibe el artículo, y el vendedor tiene la certeza de que el pago está reservado antes de enviar.

  - title: "Próximas ampliaciones"
    text: |
      Se está trabajando en un sistema de notificaciones que avise a los usuarios de cambios en sus pedidos, mensajes nuevos y actualizaciones de sus productos favoritos.
      También está previsto añadir reseñas entre usuarios: al completar una transacción, comprador y vendedor podrán valorarse mutuamente, generando un historial de reputación visible en los perfiles.

repository: "https://github.com/Ivan-del3/TradeBall"

---
