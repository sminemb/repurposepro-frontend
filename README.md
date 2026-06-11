# RepurposePro Frontend

RepurposePro is a creator workspace for turning long-form videos into summaries and short reels. This repository currently contains the Phase 6 TanStack Query provider foundation.

## Current Tech Stack

- Next.js (App Router)
- TypeScript
- ESLint
- Google Fonts through `next/font/google`
- Tailwind CSS 4
- shadcn/ui
- next-themes
- TanStack Query
- Vitest

Phase 2 added dark-first semantic design tokens and the essential `Button`, `Card`, `Input`, `Label`, and `Badge` UI components.

Phase 3 adds `next-themes` with dark mode as the default and supports light, dark, and system theme modes.

Phase 4 adds the responsive app shell, sidebar and header, and placeholder pages for the creator workspace routes.

Phase 5 adds the central typed API client, shared response contracts, and normalized error handling. Requests include credentials for future Better Auth cookie sessions. Feature-specific API modules are added in later phases.

Phase 6 adds the shared TanStack Query client and wires `QueryClientProvider` through the app providers. Feature-specific queries will be added in later phases, with processing job polling planned for Frontend Phase 15.

## Environment

The frontend communicates only with the Express API Gateway. Add this required variable to the local environment:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

See `.env.example` for the required value.

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
npm run test
```
