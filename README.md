# Basic_UI_Project_Structure_React

A reusable React boilerplate for static business websites (agency, portfolio, restaurant, gym, real estate, etc). No backend, no database, no auth, no CMS — just a fast, accessible, themeable UI framework you clone per client.

## Stack

React 19 · Vite · React Router DOM · Framer Motion · React Icons · Swiper · CSS Modules

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run lint     # oxlint
```

## Customizing for a new project

Most client rebrands only touch these:

- **Colors, fonts, spacing, radius, shadows** — `src/styles/variables.css` (one file, cascades everywhere)
- **Site content** — `src/data/*.js` (services, portfolio, team, testimonials, pricing, FAQ, company info, nav links)
- **Logo / images / icons / fonts** — `src/assets/`
- **Page composition** — `src/pages/*.jsx` (add, remove, or reorder `src/sections/*` components)

You should rarely need to touch `src/components/` (Button, Card, Modal, Input, etc.) — those are the reusable primitives everything else is built from.

## Structure

```
src/
├── assets/       fonts, icons, images, svg, videos
├── components/   reusable UI primitives (Button, Card, Modal, Input, Loader, ...)
├── sections/     page sections (Navbar, Hero, Services, Pricing, Footer, ...)
├── pages/        route-level pages composed from sections
├── layouts/      MainLayout, BlankLayout, PageLayout
├── routes/       router config (lazy-loaded, code-split per page)
├── data/         editable site content
├── hooks/        shared hooks
├── utils/        motion variants, breakpoints, misc helpers
└── styles/       design tokens, typography, animations, responsive rules
```
