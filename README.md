# 🌐 Hem Joshi — Developer & AI Portfolio

A modern, high-performance light-themed personal portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed specifically to showcase full-stack engineering, business applications, and AI automation to prospective freelance clients, startups, manufacturers, and wholesalers.

---

## ⚡ Quick Start

### 1. Prerequisites
- **Node.js**: `v18.17.0` or higher (tested with Node `v20.18.0`)
- **Package Manager**: `npm` (or `pnpm` / `bun`)

### 2. Installation
Open your terminal in the `portfolio` directory:
```bash
cd /Users/hemjoshi/portfolio
npm install
```

### 3. Local Development
Start the local Next.js development server on port **3001** (configured specifically to prevent port collisions with the Nexus ERP frontend on 3000 and FastAPI backend on 8000):
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3001
```

### 4. Production Build & Test
To compile an optimized production build and test it locally:
```bash
npm run build
npm run start
```

---

## 🛠 Project Architecture

```
portfolio/
├── README.md                      # Comprehensive project documentation
├── package.json                   # Dependencies and scripts (dev port: 3001)
├── tsconfig.json                  # TypeScript compiler settings & alias mappings
├── tailwind.config.ts             # Dark-themed charcoal & electric-blue palette
├── postcss.config.js              # Tailwind PostCSS processing
├── next.config.mjs                # Next.js runtime configuration
├── .env.example                   # Environment variable template
├── public/
└── src/
    ├── app/
    │   ├── api/contact/route.ts   # Secure contact form API route with email integration & mailto fallback
    │   ├── globals.css            # Base Tailwind styles & reduced-motion accessibility
    │   ├── icon.svg               # SVG monogram favicon
    │   ├── layout.tsx             # Root layout with SEO metadata & JSON-LD schema
    │   ├── page.tsx               # Main single-page portfolio layout
    │   ├── robots.ts              # Search engine robots indexing directives
    │   └── sitemap.ts             # Dynamic XML sitemap generator
    ├── components/
    │   ├── Navbar.tsx             # Sticky responsive navigation with mobile drawer
    │   ├── Hero.tsx               # Value proposition, capability tags, & tech strip
    │   ├── Projects.tsx           # Featured project showcase with verified links
    │   ├── NexusErpMockup.tsx     # Original CSS/SVG ERP dashboard preview & NL2SQL tab
    │   ├── AiAssistantMockup.tsx  # Original CSS/SVG RAG document assistant & citation preview
    │   ├── Services.tsx           # 3 client-focused service offerings with smart form routing
    │   ├── Process.tsx            # 5-step engineering delivery roadmap (horizontal & vertical)
    │   ├── Skills.tsx             # Categorized capability cards without arbitrary meters
    │   ├── About.tsx              # Professional background & engineering values
    │   ├── Contact.tsx            # Accessible client inquiry form with instant validation
    │   └── Footer.tsx             # Social links, sitemap anchors, & copyright
    ├── config/
    │   └── site.ts                # Centralized content, copy, and URL configuration
    └── lib/
        └── utils.ts               # Class name merging utility (clsx + tailwind-merge)
```

---

## 📧 Contact Form Configuration & Environment Variables

The portfolio includes an honest, transparent contact system in `src/app/api/contact/route.ts`:

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Configure the variables:
   - `RESEND_API_KEY`: *(Optional)* Your API key from [Resend](https://resend.com).
   - `CONTACT_RECIPIENT_EMAIL`: The recipient inbox (defaults to `hemjoshiwork@gmail.com`).
   - `NEXT_PUBLIC_SITE_URL`: Production canonical domain (e.g., `https://hemjoshi.vercel.app`).

### Transparent Fallback Behavior:
- **If `RESEND_API_KEY` is provided**: Inquiries are delivered directly to your inbox via Resend.
- **If `RESEND_API_KEY` is omitted**: The form does **not** falsely claim the email was sent. Instead, it provides an honest notification and generates a **1-click pre-filled mailto button** containing all entered project specifications, sending directly to `hemjoshiwork@gmail.com`.

---

## 🔗 Repository and Live Demo Verification Guide

All external links are managed centrally in [`src/config/site.ts`](src/config/site.ts):

| Project / Item | Status | Configured URL | Action Required |
| :--- | :--- | :--- | :--- |
| **Nexus ERP Repository** | **Verified** | `https://github.com/hemjoshiwork/nexus-erp` | Already verified and linked. |
| **Nexus ERP Live Demo** | Not Public | `null` | Keep `null` or add hosted instance URL in `siteConfig.projects[0].demoUrl` when deployed. |
| **AI Document Assistant Repo**| Private/Internal | `null` | Update `siteConfig.projects[1].githubUrl` when made public on GitHub. |
| **AI Document Assistant Demo**| Prototype | `null` | Interactive visual mockup is active; update `demoUrl` when hosted. |
| **LinkedIn Profile** | **Verified** | `https://www.linkedin.com/in/hem-joshi-85a380398/` | Verified. |
| **GitHub Profile** | **Verified** | `https://github.com/hemjoshiwork` | Verified. |

---

## 🚀 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push the `portfolio` folder to a new GitHub repository (e.g. `github.com/hemjoshiwork/portfolio`).
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Set the build preset to **Next.js**.
5. Add any environment variables (`RESEND_API_KEY`, `CONTACT_RECIPIENT_EMAIL`, `NEXT_PUBLIC_SITE_URL`).
6. Click **Deploy**.

### Deploying to Render
1. Create a new **Web Service** on Render connected to your repository.
2. Build Command: `npm install && npm run build`
3. Start Command: `npm run start`
4. Environment: `Node 20+`

---

## 🛡 Isolation from Nexus ERP
This portfolio is completely standalone:
- **Zero changes** to Nexus ERP's backend, frontend, database, `.env`, or `start_dev.sh`.
- Runs on port **3001** to prevent conflicts with the ERP's default port 3000.
- All dependencies are isolated in `portfolio/package.json`.

