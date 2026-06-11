# RepurposePro Frontend

RepurposePro is a creator workspace for turning long-form videos into summaries and short reels. This repository currently contains the Phase 3 frontend theme-system foundation.

## Current Tech Stack

- Next.js (App Router)
- TypeScript
- ESLint
- Google Fonts through `next/font/google`
- Tailwind CSS 4
- shadcn/ui
- next-themes

Phase 2 added dark-first semantic design tokens and the essential `Button`, `Card`, `Input`, `Label`, and `Badge` UI components.

Phase 3 adds `next-themes` with dark mode as the default and supports light, dark, and system theme modes.

## Environment

The frontend will communicate only with the Express API Gateway. Add this variable to the local environment when backend integration begins:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

See `.env.example` for the required value. Backend integration starts in a later phase.

## Setup

```bash
npm install
npm run dev
```

Open the frontend at [http://localhost:3000](http://localhost:3000).

The local Express API Gateway is expected at [http://localhost:5000](http://localhost:5000). The frontend must not call the internal FastAPI AI service directly.

## Checks

```bash
npm run build
npm run lint
```
