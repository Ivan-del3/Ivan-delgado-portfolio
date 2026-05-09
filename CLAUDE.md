# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start local dev server
npm run build    # Production build
npm run preview  # Preview production build locally
```

## Architecture

**Astro 5** portfolio site with **React islands** for selective hydration. The site runs in server mode (Node.js adapter) to support Astro Actions for form handling.

### Content Management

Blog posts and projects are Markdown files in `src/content/`. Schemas are defined with Zod in `src/content/config.ts`. Routes are statically generated at build time via `getStaticPaths()`:

- `src/content/blog/*.md` → `/post/[id]`
- `src/content/projects/*.md` → `/project/[id]`

Each Markdown file uses YAML frontmatter for metadata (title, description, date, images) and the body for rich content sections.

### React Islands

Only interactive components use React with `client:only="react"`:
- `Recaptcha.jsx` — loads reCAPTCHA and exposes the token
- `SubmmitButton.jsx` — disabled until reCAPTCHA token is available
- `DropdownMenu.jsx` — mobile hamburger nav
- `PdfButton.jsx` — client-side CV export via html2pdf.js

Everything else is static Astro `.astro` components.

### Contact Form (Astro Actions)

`src/actions/index.ts` handles the contact form server-side:
1. Validates reCAPTCHA token against Google's API
2. Validates input with Zod schema (supports image attachment up to 512 KB)
3. Sends email via Nodemailer through SendGrid SMTP

### Environment Variables

Required in `.env`:
```
EMAIL_HOST
EMAIL_PORT
EMAIL_USER
EMAIL_PASS
EMAIL_FROM
EMAIL_DESTINATARIO
PUBLIC_RECAPTCHA_SITE_KEY   # exposed to client (PUBLIC_ prefix)
RECAPTCHA_SECRET
```

### Key Config Files

- `astro.config.mjs` — server output mode, Node adapter, React integration, Tailwind Vite plugin
- `tailwind.config.js` — content globs for `.astro`, `.jsx`, `.tsx`, `.md`
- `src/styles/global.css` — global Tailwind layers and custom CSS
