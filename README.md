# FitPath

Structured fitness training paths from yoga to marathons. A Next.js app with dark editorial design, real-time filtering, and progress tracking with celebration animations.

Live: https://fitpath-dev.vercel.app

---

## Tech stack

- **Next.js** — App Router, server components, static generation
- **React 19 + TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — page transitions and component animations
- **lucide-react** — icons
- **localStorage** — progress and auth persistence (no backend)

---

## How to run

```bash
git clone https://github.com/DanySued/roadmap.git
cd roadmap
npm install
npm run dev
```

Open http://localhost:3000.

---

## Features

- **24+ Training Paths** — Strength, running, yoga, cycling, CrossFit, pilates, nutrition, rehab, swimming, boxing, martial arts, PT certification
- **Progressive Task Lists** — Beginner-to-advanced stages per path with completion tracking and confetti animations
- **Real-Time Search** — ⌘K to filter paths by name, category, or level
- **Progress Persistence** — Completion state saved in localStorage per path
- **Video Library** — Curated workout videos organized by category and level
- **Written Guides** — Long-form training guides for each discipline
- **Auth Flow** — localStorage-backed login/signup with dashboard (demo — no real data stored or transmitted)
- **Dark/Light Mode** — Theme toggle in the nav
- **Responsive** — Mobile-first layout, all breakpoints

---

## Project structure

```
src/
├── app/                     # App Router pages
│   ├── page.tsx             # Homepage
│   ├── paths/               # Path browser + individual path views
│   ├── guides/              # Written guides
│   ├── videos/              # Video library
│   ├── login/ signup/       # Auth (demo)
│   └── dashboard/           # User dashboard (demo)
├── components/
│   ├── sections/            # Nav, Footer, Hero, FAQ, and homepage sections
│   └── fitpath/             # PathCard, TaskList, PathGrid, RoadmapView
└── lib/
    ├── data/                # paths.ts, path-details.ts, guides.ts
    ├── motion.ts            # Framer Motion variants and hooks
    └── auth-context.tsx     # Auth state (localStorage-backed)
```

---

## Deployment

Auto-deploys to Vercel on push to any branch. Project: `fitpath-dev`.

---

## Made by

Dany Sue — built with [Claude Code](https://claude.ai/code).

---

## License

MIT
