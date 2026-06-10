# RepurposePro Frontend

RepurposePro is a creator workspace for turning long-form videos into summaries and short reels. This repository currently contains the Phase 1 frontend foundation only.

## Phase 1 Tech Stack

- Next.js
- TypeScript
- App Router
- ESLint
- Geist through `next/font/google`

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
