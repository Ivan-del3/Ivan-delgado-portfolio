---
title: "Formulario con reCAPTCHA"
img: "recaptcha/intro.png"
order: 8

sections:
  - title: "Formulario de contacto — reCAPTCHA v2 + Nodemailer"
    text: |
      Demostración del flujo completo de un formulario de contacto seguro: verificación humana con Google reCAPTCHA v2, validación en servidor y envío de correo con adjunto opcional.

      Construido con Astro 5 SSR (Node.js standalone adapter). Los componentes interactivos —widget de reCAPTCHA y botón de envío— son React islands con `client:only="react"`. El servidor expone un Astro Action (`enviarCorreo`) que valida el token con `siteverify` de Google y, si tiene éxito, envía el correo via Nodemailer + SendGrid SMTP. El estilo usa Tailwind CSS v4 con utilidades nombradas en `global.css`.

  - title: "Componente Recaptcha.jsx"
    text: |
      Se monta como island de React dentro del formulario. Al arrancar llama a `recaptchaLoader.js`, que inyecta el script de Google con `render=explicit` y cachea la promesa en `window._grecaptchaPromise` para evitar cargas duplicadas.

      Cuando el usuario marca el checkbox, Google ejecuta el callback con un token temporal: el componente lo escribe en el `input hidden`, activa `window.__recaptchaVerified` y emite `recaptcha:verified` en `window`, desacoplando la comunicación con el botón de envío.

  - title: "Botón deshabilitado — antes de verificar"
    img: "recaptcha/button-disabled.png"
    text: |
      `SubmitButton.jsx` arranca con `enabled = false`. Comprueba `window.__recaptchaVerified` al montar (para cubrir re-renders tras View Transitions) y escucha el evento `recaptcha:verified`. Hasta que no se complete el reCAPTCHA el botón permanece en gris con `cursor-not-allowed` y `disabled`.

  - title: "Botón habilitado y envío de correo"
    img: "recaptcha/button.png"
    text: |
      Al recibir `recaptcha:verified` el botón cambia a ámbar y se activa. Al hacer submit muestra "Enviando…" y se bloquea para evitar duplicados.

      El `POST multipart/form-data` llega al Astro Action, que llama a `siteverify` con `RECAPTCHA_SECRET` y, si responde `success: true`, envía el correo con Nodemailer (adjunto incluido si se aportó, máx. 512 KB). El resultado se renderiza en la siguiente carga vía `Astro.getActionResult()`.

  - title: "Flujo de verificación"
    text: |
      **01 — Cliente:** `recaptchaLoader.js` inyecta el script con `render=explicit` y devuelve una promesa cacheada con `grecaptcha`.

      **02 — Usuario:** Al marcar el checkbox se genera el token, se guarda en el `input hidden` y se emite `recaptcha:verified`.

      **03 — Servidor:** El Astro Action envía el token a `siteverify` con `RECAPTCHA_SECRET`. Si responde `success: true` continúa; si no, devuelve error.

      **04 — Envío:** Nodemailer con SMTP de SendGrid construye y envía el correo con los campos del formulario y el adjunto opcional.

repository: "https://github.com/Ivan-del3/contacto-recaptcha"

---
