# Ramiro Bergoglio – Portfolio Website

This is my personal portfolio website built with **Next.js**, deployed on **Vercel**, and styled with **Tailwind CSS** and **shadcn/ui**.  
The site showcases my work as a **Fullstack Developer** and includes pages for my projects, blog, and a contact form.

---

## Tech Stack

- **[Next.js 14](https://nextjs.org/)** – React framework with App Router  
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