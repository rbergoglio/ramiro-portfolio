# Ramiro Bergoglio – Portfolio Website

This is my personal portfolio website built with **Next.js**, deployed on **Vercel**, and styled with **Tailwind CSS** and **shadcn/ui**.  
The site showcases my work as a **Fullstack Developer** and includes pages for my projects, blog, and a contact form.

---

## Tech Stack

- **[Next.js 16](https://nextjs.org/)** – React framework with App Router  
- **TypeScript** – type safety  
- **[Tailwind CSS](https://tailwindcss.com/)** – utility-first CSS  
- **[shadcn/ui](https://ui.shadcn.com/)** – accessible component library  
- **Lucide Icons** – modern SVG icon set  
- **Resend** – transactional email service (for the contact form)  
- **Vercel** – hosting & deployment  
- **Cloudflare Domains** – custom domain + DNS  

---

## Getting Started

### 1. Install dependencies

I'm using Node v22.14.0.

```bash
npm install
npm run dev
```

### 2. Run dev server

Visit http://localhost:3000.

### 3. Type-check & Lint

```bash
npm run typecheck   # Run TypeScript checks
npm run lint        # Run ESLint
```

### 4. Build & Preview Production

```bash
npm run build
npm run start
```

## Contact Form

The contact form uses Resend to deliver messages.

1. Create a domain and verify it with Resend
2. Add your Resend API key in Vercel Environment Variables:

```ini
RESEND_API_KEY=your_api_key_here
CONCTACT_FROM = email@ramidomain.com
CONTACT_TO = mypersonalemail@domain.com
```
3. The backend route is defined at app/api/contact/route.ts.

## Deployment

This project is deployed on Vercel.
Steps:

1. Push to GitHub
2. Connect repo to Vercel
3. Add custom domain (via Cloudflare)
4. Set environment variables in the Vercel dashboard

## Domain

I bought a domain from cloudfare and configured the DNS records to point to the Vercel suggested config.

## Blog con MDX

### Stack
- **MDX**: Permite escribir Markdown con componentes React embebidos
- **gray-matter**: Lee y parsea el frontmatter (metadata entre `---`) de archivos MDX
- **next-mdx-remote**: Renderiza el contenido MDX como componentes React

### Cómo funciona
1. Los posts se guardan en `/content/posts/` como archivos `.mdx`
2. Cada post tiene metadata (frontmatter) al inicio:
```mdx
   ---
   title: "Mi Post"
   date: "2025-12-29"
   tags: ["react"]
   ---
```
3. `/lib/posts.ts` usa `gray-matter` para leer archivos y extraer metadata
4. `/app/blog/[slug]/page.tsx` usa `next-mdx-remote` para renderizar el contenido
5. Un solo template dinámico maneja todos los posts automáticamente

### Ventaja
Escribir posts = crear archivos `.mdx` simples. No código, solo contenido.

### Agregar un Nuevo Post

1. Crear archivo en `/content/posts/mi-nuevo-post.mdx`
2. Agregar frontmatter:
```mdx
   ---
   title: "Título del Post"
   description: "Descripción corta"
   date: "2024-12-29"
   tags: ["tag1", "tag2"]
   img: "/images/mi-post.jpg"
   ---
```
3. Escribir contenido en Markdown
4. Opcional: usar componentes React con `<MiComponente />`

El post aparecerá automáticamente en `/blog` sin tocar código.

## TODO

1. SEO
