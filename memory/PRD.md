# PRD — Harshit Goel Portfolio

## Original Problem Statement
Build a personal portfolio website from Harshit Goel's resume, showcasing his projects (5 Power BI .pbix dashboards, 3 ML notebooks), with a working "Contact Me" form that sends enquiries to his email, and a resume download button. Modern ("today's standards") design. User also asked how to publish (answer: one-click Deploy in Emergent).

## Architecture
- Frontend: React 19 + Tailwind + shadcn/ui + framer-motion + @phosphor-icons/react + react-fast-marquee. Single-page portfolio at `/`.
- Backend: FastAPI (`/api` prefix). `POST /api/contact` stores enquiry in MongoDB and emails the owner via Emergent managed Resend proxy (`EMERGENT_EMAIL_KEY`, fixed recipient `OWNER_EMAIL`, server-side HTML template, guardrail gate `_assert_safe_email`).
- DB: MongoDB (`contact_inquiries` collection).
- Assets: resume PDF + 8 project files hosted in `/app/frontend/public/assets/`.

## Design
Dark obsidian (#09090B) + volt cyan (#06b6d4), Outfit/Inter/JetBrains Mono type, canvas particle network hero, grid-border sections, bento skills grid, marquee skill ticker, motion reveals. Guidelines: /app/design_guidelines.json.

## User Personas
- Recruiters/hiring managers viewing projects & downloading resume
- Collaborators sending enquiries via the contact form

## Implemented (15 Aug 2026)
- Hero (animated role rotation, stats, social links), About, Skills bento + marquee, Projects grid (8 projects with .pbix/.ipynb downloads), Education timeline, Certifications (3 research papers highlighted), Contact form → email + DB, Footer
- Resume download button in navbar + hero
- Contact email verified delivered (email_sent: true)

## Implemented (16 Aug 2026)
- Research section ("04 — Research") with 2 published papers: AI in Healthcare (IJPREMS, Apr 2025, DOI 10.58257/IJPREMS39995) and Hybrid ML Macroeconomic Forecasting (IJPREMS, Nov 2025, DOI 10.58257/IJPREMS44624). Read-online + PDF download + DOI links. PDFs hosted at /assets/papers/. Nav + section numbering updated.

## Backlog
- P1: Power BI publish-to-web live embeds (requires Harshit's embed links)
- P1: Custom domain + Deploy
- P2: Blog/articles section, project detail pages, Google Analytics
- P2: Research papers section with actual paper links (ask user)

## Credentials
No auth in app. Test data: none required. Owner email configured: harshitgoel931147@gmail.com (env).
