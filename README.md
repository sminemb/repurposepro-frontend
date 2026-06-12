# RepurposePro Frontend

RepurposePro is a creator workspace for turning long-form videos into summaries and short reels. This repository currently contains the Phase 10 authenticated dashboard overview.

## Current Tech Stack

- Next.js (App Router)
- TypeScript
- ESLint
- Google Fonts through `next/font/google`
- Tailwind CSS 4
- shadcn/ui
- next-themes
- TanStack Query
- Better Auth
- React Hook Form
- Zod
- Vitest

Phase 2 added dark-first semantic design tokens and the essential `Button`, `Card`, `Input`, `Label`, and `Badge` UI components.

Phase 3 adds `next-themes`. The app follows the user's system theme automatically, and no manual theme toggle is shown.

Phase 4 adds the responsive app shell, sidebar and header, and placeholder pages for the creator workspace routes.

Phase 5 adds the central typed API client, shared response contracts, and normalized error handling. Requests include credentials for future Better Auth cookie sessions. Feature-specific API modules are added in later phases.

Phase 6 adds the shared TanStack Query client and wires `QueryClientProvider` through the app providers. Feature-specific queries will be added in later phases, with processing job polling planned for Frontend Phase 15.

Phase 7 added the Better Auth React client, session hook, and sign-in, sign-up, and sign-out helpers. Better Auth requests go through the Express API Gateway.

Phase 8 adds focused login and sign-up pages using React Hook Form, Zod validation, and the Better Auth client. Successful sign-in and session-creating sign-up redirect to the dashboard; sign-up falls back to the login page if no session is created. Email validation codes are not part of MVP signup unless explicitly added later.

Phase 9 protects dashboard routes with the Better Auth client session. Unauthenticated users are redirected to login with safe internal destination handling, authenticated users see minimal account information, and the header includes logout UI. Backend authentication and authorization remain the security boundary for real data.

Phase 10 adds the authenticated dashboard overview with workflow guidance, quick links to existing workspace sections, and an honest ready state. Project data fetching starts in Frontend Phase 11; no fake metrics, charts, or dashboard data are shown.

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
