# Project Name

RepurposePro

## Project Description

RepurposePro is an AI-powered video repurposing platform that transforms long-form videos into:

- A 7–10 minute short-form summary video
- Multiple vertical highlight reels optimized for TikTok, Instagram Reels, and YouTube Shorts

The frontend is a creator workspace for:

- Signing up and logging in
- Managing projects
- Uploading long-form videos
- Starting video processing jobs
- Tracking processing progress
- Viewing generated summary videos and reels
- Viewing notifications
- Managing basic settings

The frontend must be built phase by phase.

Do not build multiple phases at once.

Do not jump ahead to later phases unless explicitly requested.

## Product Name Rule

The product name is:

```txt
RepurposePro
```

Do not rename it.

Do not use placeholder names like:

```txt
VideoAI
ClipAI
Reelify
CreatorAI
AI Video Platform
```

Use `RepurposePro` everywhere.

## Relationship to DESIGN.md

This file controls how the frontend should be built.

Use `AGENTS.md` for:

- Architecture rules
- Phase-by-phase build order
- Security rules
- API integration rules
- Authentication rules
- Folder structure
- Coding rules
- Anti-slop rules
- Command expectations

Use `DESIGN.md` for:

- Visual design direction
- Theme and color guidance
- Typography
- Layout style
- Component appearance
- Spacing, radius, borders, and shadows
- Page-level UX patterns
- Empty, loading, and error-state presentation

Do not duplicate detailed visual design rules in this file.

When implementing UI, read both files:

```txt
AGENTS.md → tells you what to build and what not to build.
DESIGN.md → tells you how it should look and feel.
```

If the two files conflict, follow this priority:

```txt
Security and phase scope in AGENTS.md take priority.
Visual and UX styling in DESIGN.md take priority.
```

## Main Frontend Goal

The frontend should help creators complete this workflow:

```txt
Sign up / Login
→ Dashboard
→ Create project
→ Upload long-form video
→ Start processing
→ Track processing job
→ View generated summary and reels
→ View notifications
→ Manage settings
```

Every UI element should support that workflow.

Do not add unrelated UI.

Do not add fake product areas just to make the app look bigger.

## Backend Relationship

The frontend must call only the Express API Gateway.

Allowed:

```txt
Frontend → Express API Gateway
```

Disallowed:

```txt
Frontend → FastAPI AI Service
Frontend → Neon Database
Frontend → S3/R2 storage directly without signed URLs
Frontend → internal worker services
```

The Express API Gateway runs locally at:

```txt
http://localhost:5000
```

The FastAPI AI Service may run locally at:

```txt
http://localhost:8000
```

The frontend must never call:

```txt
http://localhost:8000
```

The frontend API base URL must come from:

```txt
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Do not hard-code backend URLs inside components.

## Environment Variables

Frontend `.env.example` should include:

```txt
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Only expose browser-safe values with the `NEXT_PUBLIC_` prefix.

Never put secrets in frontend environment variables.

Do not expose:

```txt
DATABASE_URL
DIRECT_URL
BETTER_AUTH_SECRET
ARCJET_KEY
AI service secrets
Storage secret keys
Stripe secret keys
Email provider keys
API tokens
Private webhook secrets
```

If a value is sensitive, it belongs in the backend only.

Do not create or commit real `.env` files.

## Recommended Frontend Stack

Use:

- Next.js
- TypeScript
- App Router
- Tailwind CSS
- shadcn/ui
- Lucide React
- TanStack Query
- React Hook Form
- Zod
- next-themes
- Better Auth client
- Central API client using native fetch or Axios
- Google Fonts through `next/font/google`

Do not use Refine Core for the main creator frontend.

Refine may be considered later only for admin tooling if explicitly requested.

## Font Rules

Use Google Fonts through Next.js font optimization.

Preferred font:

```txt
Geist
```

Acceptable fallback:

```txt
Inter
```

Do not add external font link tags.

Do not use multiple competing font families.

Do not use decorative fonts.

## General Coding Rules

- Use TypeScript.
- Use the App Router.
- Use `src/` directory.
- Use import alias `@/*`.
- Prefer Server Components by default.
- Use Client Components only when needed.
- Keep components small and focused.
- Avoid unnecessary abstractions.
- Avoid duplicate components.
- Do not disable TypeScript errors to pass builds.
- Do not disable ESLint rules without a clear reason.
- Do not add unrelated dependencies.
- Do not add unused files.
- Do not add placeholder business logic.
- Do not add fake data unless a phase explicitly says mock data is allowed.

## App Router Rules

Use the Next.js App Router.

Prefer route groups:

```txt
(auth)
(dashboard)
```

Use Server Components by default.

Use Client Components only when needed for:

```txt
interactivity
theme switching
forms
session hooks
TanStack Query hooks
browser APIs
file uploads
```

Mark client components with:

```tsx
"use client";
```

Do not make every component a client component by default.

## TypeScript Rules

Use TypeScript everywhere.

Avoid `any`.

Use `unknown` when needed and narrow safely.

Keep feature-specific types close to their feature.

Use shared types only when reused across features.

Do not invent frontend-only fields that are not returned by the backend.

## Frontend Security Rules

The RepurposePro frontend must be secure by default.

The frontend should never be treated as the source of truth for security.

The backend must enforce:

- Authentication
- Authorization
- Project ownership
- Upload validation
- Processing limits
- Rate limits
- Payment limits later
- Admin permissions later

Frontend checks are for user experience only.

Do not rely on frontend-only checks to protect data.

## Frontend Security Boundary

The frontend may call only the Express API Gateway.

Allowed:

```txt
Frontend → Express API Gateway
```

Disallowed:

```txt
Frontend → FastAPI AI Service
Frontend → Neon Database
Frontend → S3/R2 storage directly without signed URLs
Frontend → internal worker services
```

The frontend must never call any FastAPI AI Service URL directly.

The frontend API base URL must come from:

```txt
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Do not hard-code backend URLs inside components.

## Authentication Security Rules

Use Better Auth client integration.

Do not build custom JWT authentication.

Do not store auth tokens in:

```txt
localStorage
sessionStorage
cookies created manually by frontend code
IndexedDB
```

Use Better Auth’s cookie/session flow.

Rules:

- Do not manually attach fake user IDs to requests.
- Do not trust user role values from local state.
- Do not trust client-side route protection alone.
- Do not expose session internals in the UI.
- Do not log session objects in production.
- Do not display sensitive auth errors directly if they expose internals.
- Do not add email verification, magic links, social login, passkeys, or organizations unless the phase explicitly asks for them.

The frontend may use session state to improve UX, but backend authorization must still protect all data.

Email validation codes are not required for MVP signup unless explicitly added later.

## Protected Route Rules

Dashboard pages should eventually require an authenticated session.

Protected areas include:

```txt
/dashboard
/projects
/upload
/results
/notifications
/settings
/admin
```

Route protection belongs in the assigned frontend phase.

Until that phase, do not fake authentication.

When route protection is added:

- Redirect unauthenticated users to login.
- Preserve intended destination only if safe.
- Do not expose private project data before session loading finishes.
- Show a safe loading state while checking session.
- Never assume a user is authenticated from local state alone.

## API Client Security Rules

Use the central API client in:

```txt
src/lib/api.ts
```

Do not write random `fetch()` calls inside pages or components unless there is a clear reason.

The API client must:

- Use `NEXT_PUBLIC_API_URL`.
- Include `credentials: "include"` for Better Auth cookie sessions.
- Handle JSON safely.
- Handle empty responses safely.
- Preserve `FormData` bodies for uploads.
- Avoid logging sensitive response data.
- Normalize errors before they reach UI components.
- Never expose raw stack traces to users.

Do not hard-code full backend URLs like:

```txt
http://localhost:5000/api/projects
```

Use endpoint paths instead:

```txt
/api/projects
```

## Data Access Rules

The frontend must only request data the current user is allowed to see.

Normal users should only see their own:

```txt
Projects
Uploads
Processing jobs
Generated videos
Notifications
Settings
```

Do not create UI that implies users can access other users’ projects unless an explicit admin phase adds that behavior.

Do not add admin UI early.

Do not add hidden admin links or fake admin screens.

## Input Validation Rules

Use client-side validation for user experience.

Use Zod and React Hook Form when their assigned phase begins.

Frontend validation should cover:

```txt
Required fields
String lengths
Supported video file types
Maximum upload size display
Enum values
Basic form shape
```

Backend validation is still required.

Do not assume frontend validation makes the request safe.

Do not pass unsanitized form data into UI, URLs, or file paths.

## XSS and Unsafe HTML Rules

Treat all user-generated and AI-generated content as untrusted.

This includes:

```txt
Project titles
Project descriptions
Uploaded filenames
Transcript text
Caption text
Generated titles
Generated summaries
Notification messages
LLM-generated text later
```

Do not use:

```tsx
dangerouslySetInnerHTML;
```

unless explicitly required and sanitized with an approved sanitizer.

Do not render transcript or caption text as raw HTML.

Render user-generated text as plain text.

Escape or sanitize content before display.

## File Upload UI Security Rules

The frontend upload UI must match backend restrictions.

Allowed video extensions:

```txt
.mp4
.mov
.mkv
.webm
```

Allowed MIME types:

```txt
video/mp4
video/quicktime
video/x-matroska
video/webm
```

Upload field name must be:

```txt
video
```

Frontend upload rules:

- Show allowed file types.
- Show max upload size.
- Reject unsupported files for user experience.
- Do not trust the original filename.
- Do not generate storage paths on the frontend.
- Do not send client-chosen storage paths to the backend.
- Do not upload directly to storage unless the backend provides a signed URL later.

Backend must still validate every upload.

## Video and Media Display Rules

Only display video URLs returned by the Express API Gateway.

Do not allow arbitrary user-entered video URLs to be embedded directly.

Do not render arbitrary iframes.

Do not autoplay generated videos with sound.

Do not expose internal filesystem paths.

If using object URLs for local previews:

- Revoke object URLs when no longer needed.
- Do not treat local preview as uploaded state.
- Do not store object URLs in persistent state.

## Processing Progress Rules

Processing progress must come from backend job state.

Use backend job polling later:

```txt
GET /api/jobs/:id
GET /api/projects/:id/jobs
```

Do not fake processing progress once real job integration begins.

Do not store processing progress only in frontend state.

Refresh recovery should work by refetching backend job status.

This feature is called:

```txt
Persistent processing job state with polling-based progress recovery
```

## TanStack Query Rules

Use TanStack Query for server state.

Do not put sensitive data into query keys.

Avoid query keys like:

```txt
["user", fullSessionObject]
["auth", token]
```

Use safe identifiers only:

```txt
["projects"]
["project", projectId]
["job", jobId]
["notifications"]
```

Do not persist the TanStack Query cache to localStorage unless explicitly requested and reviewed for sensitive data.

Do not cache sensitive data longer than necessary.

## Error Display Rules

Show safe, useful error messages.

Do not display:

```txt
Raw stack traces
Raw Prisma errors
Raw database errors
Raw backend logs
Full internal response bodies
Secrets
Tokens
Cookies
```

Good error messages:

```txt
Upload failed. Please try again.
Your session expired. Please sign in again.
This project could not be found.
You do not have access to this project.
Processing failed. Please try again later.
```

Do not leak whether another user’s private project exists.

## Logging Rules

Do not leave noisy logs in production code.

Do not log:

```txt
Session objects
Cookies
Tokens
Auth headers
API responses containing private data
Uploaded file contents
Full FormData payloads
Private user data
```

Temporary debugging logs must be removed before completing a phase.

## Dependency Security Rules

Keep dependencies minimal.

Do not add packages unless required by the current phase.

Do not add:

```txt
analytics packages
payment packages
auth plugins
upload libraries
chart libraries
state management libraries
AI SDKs
LLM SDKs
```

unless the current phase explicitly requires them.

Do not disable TypeScript or ESLint to make builds pass.

Do not use abandoned or unnecessary packages when built-in browser or Next.js features are enough.

## Browser Storage Rules

Avoid storing sensitive data in browser storage.

Do not store:

```txt
Auth tokens
Session IDs
User secrets
Backend secrets
Private API keys
Raw transcripts if not needed
Generated private video URLs if not needed
```

Theme preference may be stored by `next-themes`.

Non-sensitive UI preferences are acceptable.

## Admin UI Security Rules

Do not add admin UI until the assigned admin phase.

When admin UI is added later:

- Hide admin navigation from non-admin users.
- Still rely on backend authorization.
- Do not expose admin-only API calls to normal UI flows.
- Do not show fake admin stats.
- Do not create fake admin users.
- Do not allow role changes from the frontend unless backend explicitly supports it.

## Payment UI Security Rules

Do not add payment integration until the assigned payment phase.

When payments are added later:

- Use Stripe or another approved provider.
- Keep secret keys in the backend only.
- Frontend may only use publishable keys if required.
- Webhooks must be handled by the backend.
- Subscription status must come from the backend.
- Do not trust frontend-selected plan values without backend validation.

## Anti-AI-Slop Frontend Rules

Do not add UI that pretends functionality exists before it is real.

Do not add:

```txt
Fake protected routes
Fake user sessions
Fake admin controls
Fake billing status
Fake processing progress
Fake upload success
Fake generated video records
Fake notification counts
Fake analytics
Fake metrics
Fake charts
Fake testimonials
Fake security badges
Fake compliance claims
```

Placeholder UI is allowed only when clearly labeled as future functionality and does not pretend to be live data.

## Expected Backend API Routes

The frontend should eventually integrate with these Express API Gateway routes.

Auth is handled by Better Auth under:

```txt
/api/auth/*
```

Custom API routes:

```txt
GET    /api/health
GET    /api/me

POST   /api/projects
GET    /api/projects
GET    /api/projects/:id
PATCH  /api/projects/:id
DELETE /api/projects/:id

POST   /api/projects/:id/upload
POST   /api/projects/:id/process

GET    /api/jobs/:id
GET    /api/projects/:id/jobs
POST   /api/jobs/:id/cancel

GET    /api/projects/:id/generated-videos
GET    /api/generated-videos/:id

GET    /api/notifications
GET    /api/notifications/unread-count
PATCH  /api/notifications/:id/read
PATCH  /api/notifications/read-all
```

Do not invent frontend integration for backend features that do not exist yet.

## API Response Shape

Custom backend API routes should generally return:

Success:

```json
{
  "success": true,
  "message": "Request completed successfully",
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "Error message",
  "errors": []
}
```

Better Auth routes may use Better Auth’s own response format.

The frontend API client should normalize errors before they reach UI components.

## Backend Status Values

Project status values:

```txt
draft
uploaded
queued
processing
completed
failed
```

Processing job status values:

```txt
queued
processing
completed
failed
cancelled
```

Generated video status values:

```txt
pending
rendering
ready
failed
```

Generated video types:

```txt
summary
reel
```

Notification types:

```txt
video_uploaded
processing_started
processing_completed
processing_failed
generated_video_ready
```

User roles:

```txt
admin
creator
editor
```

Do not invent new frontend status strings unless the backend schema is intentionally updated.

## Recommended Frontend Folder Structure

Use this structure:

```txt
repurposepro-frontend/
├── AGENTS.md
├── DESIGN.md
├── README.md
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── .env.example
├── public/
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   ├── providers.tsx
    │   ├── (auth)/
    │   │   ├── login/
    │   │   └── signup/
    │   ├── (dashboard)/
    │   │   ├── layout.tsx
    │   │   ├── dashboard/
    │   │   ├── projects/
    │   │   ├── upload/
    │   │   ├── results/
    │   │   ├── notifications/
    │   │   └── settings/
    │   └── admin/
    ├── components/
    │   ├── ui/
    │   ├── layout/
    │   ├── common/
    │   ├── providers/
    │   └── feedback/
    ├── features/
    │   ├── auth/
    │   ├── projects/
    │   ├── uploads/
    │   ├── jobs/
    │   ├── generated-videos/
    │   ├── notifications/
    │   ├── settings/
    │   └── admin/
    ├── hooks/
    ├── lib/
    │   ├── api.ts
    │   ├── auth-client.ts
    │   ├── constants.ts
    │   ├── query-client.ts
    │   └── utils.ts
    ├── schemas/
    ├── types/
    └── styles/
```

Do not create all folders immediately unless the current phase needs them.

## State Management Rules

Use:

- React local state for local UI state
- TanStack Query for server state
- Better Auth client for auth/session state
- next-themes for theme state

Do not add Redux, Zustand, Jotai, or other state libraries unless explicitly requested.

## Forms Rules

Use React Hook Form and Zod when forms are added.

Validate:

- login input
- signup input
- project create/update input
- upload form metadata if needed
- settings forms

Do not build custom form state management unless the form is trivial.

Do not trust frontend validation as security.

## Upload Rules

Upload flow must use the backend upload endpoint:

```txt
POST /api/projects/:id/upload
```

Upload field name must be:

```txt
video
```

Allowed input video formats:

```txt
.mp4
.mov
.mkv
.webm
```

Show allowed formats to the user.

Show max size to the user.

Backend still enforces real validation.

## Processing Job UI Rules

Processing state must come from backend job records.

Use:

```txt
GET /api/jobs/:id
GET /api/projects/:id/jobs
```

The frontend should support refresh recovery.

If the user refreshes during processing, the frontend should refetch job status from the backend and show the current progress.

Do not fake progress after backend integration begins.

TanStack Query polling should be used later for job status UI.

## Generated Video UI Rules

Generated video UI should show:

- One summary video
- Multiple reel videos
- Type label
- Duration
- Aspect ratio
- Status
- Preview/download actions when available

Do not invent generated videos.

Only display generated videos returned by the backend.

## Notifications UI Rules

Notifications should come from backend records.

Use:

```txt
GET /api/notifications
GET /api/notifications/unread-count
PATCH /api/notifications/:id/read
PATCH /api/notifications/read-all
```

Do not fake unread counts after notification integration begins.

Do not show notification metadata directly if it contains internal IDs unless useful for debugging in development.

## Settings UI Rules

Settings should start simple.

Allowed early settings:

- Theme preference
- Basic account display
- Future placeholder for profile settings

Do not add billing settings until payment phase.

Do not add security settings unless backend supports them.

Do not add team settings until team/org support exists.

## Admin UI Rules

Do not add admin UI until explicitly requested.

Admin UI should come after core creator workflow works.

Do not add:

```txt
User management
Role management
System metrics
Job debugging dashboard
Template management
Billing admin
```

unless the assigned phase asks for it.

## Payment Rules

Do not add payment integration yet.

Payments make sense later, after the core workflow works:

```txt
Sign up
→ Create project
→ Upload video
→ Start processing
→ View generated outputs
→ Download/export outputs
```

When payments are added later, prefer Stripe.

Backend owns:

- subscription status
- Stripe customer ID
- webhook handling
- usage limits
- plan limits

Frontend displays:

- current plan
- usage
- upgrade action
- billing portal link

Do not add payment packages before the payment phase.

## Accessibility Rules

Build accessible UI.

Use:

- semantic HTML
- labels for inputs
- keyboard-accessible controls
- visible focus states
- appropriate ARIA only when needed
- sufficient contrast
- descriptive button text
- meaningful page headings

Do not remove focus outlines unless replacing them with clear custom focus styles.

For detailed visual accessibility guidance, use `DESIGN.md`.

## Responsive Rules

Desktop should feel polished first.

Mobile should remain usable.

Do not overbuild complex mobile navigation early.

Responsive polish has its own later phase.

Avoid layouts that break completely on smaller screens.

For detailed responsive design guidance, use `DESIGN.md`.

## Loading, Empty, and Error State Rules

Use clear loading, empty, and error states.

Do not show fake data while loading.

Do not expose backend internals in errors.

Do not use generic placeholder copy.

For visual and UX patterns for these states, use `DESIGN.md`.

## Frontend Build Order

Build the frontend in this order:

1. Next.js foundation
2. Tailwind CSS and shadcn/ui foundation
3. Theme system with dark mode default
4. Base layout, sidebar, and header
5. API client setup
6. TanStack Query provider
7. Better Auth client integration
8. Login and sign-up pages
9. Protected dashboard route layout
10. Dashboard overview page
11. Projects list page
12. Create project flow
13. Project detail page
14. Upload video flow
15. Processing job status UI
16. Generated video results UI
17. Notifications dropdown/page
18. Settings page
19. Responsive polish
20. Accessibility and error-state polish
21. Admin UI later
22. Payment UI later

## Current Phase Guidance

When working on a phase, build only that phase.

Do not jump ahead.

### Phase 1 — Next.js Foundation

For Phase 1:

- Create the clean Next.js project.
- Use TypeScript.
- Use App Router.
- Use `src/` directory.
- Use import alias `@/*`.
- Add `.env.example`.
- Add basic root page.
- Add basic metadata.
- Add Google Font through `next/font/google`.
- Do not add Tailwind customization unless generated automatically.
- Do not add shadcn/ui yet.
- Do not add dashboard.
- Do not add auth.
- Do not add API calls.

### Phase 2 — Tailwind CSS and shadcn/ui Foundation

For Phase 2:

- Add Tailwind CSS.
- Add shadcn/ui setup.
- Add `cn` utility.
- Add base CSS variables.
- Add initial UI components:
  - button
  - card
  - input
  - label
  - badge

- Keep dark-first styling according to `DESIGN.md`.
- Do not add dashboard.
- Do not add auth.
- Do not add API calls.
- Do not add TanStack Query.

### Phase 3 — Theme System

For Phase 3:

- Add `next-themes`.
- Add ThemeProvider.
- Set dark mode as default.
- Support light/dark/system.
- Add simple theme toggle.
- Do not add dashboard logic.
- Do not add auth.
- Do not add API calls.

### Phase 4 — Base Layout, Sidebar, and Header

For Phase 4:

- Add dashboard route group.
- Add app shell.
- Add sidebar.
- Add header.
- Add placeholder dashboard pages.
- Add theme toggle to header.
- Do not add auth protection yet.
- Do not add backend calls.
- Do not add real data.

### Phase 5 — API Client Setup

For Phase 5:

- Add central API client.
- Add shared API response types.
- Use `NEXT_PUBLIC_API_URL`.
- Include `credentials: "include"`.
- Normalize errors.
- Support JSON and FormData.
- Do not call backend from UI yet.
- Do not add feature API modules yet.

### Phase 6 — TanStack Query Provider

For Phase 6:

- Add TanStack Query.
- Add QueryClient setup.
- Add QueryClientProvider.
- Add safe defaults.
- Do not add real queries yet.
- Do not add job polling yet.

### Phase 7 — Better Auth Client Integration

For Phase 7:

- Add Better Auth client dependency.
- Add central auth client.
- Export `useSession`, `signIn`, `signUp`, and `signOut` helpers if appropriate.
- Do not create login/signup pages yet.
- Do not protect routes yet.
- Do not store auth tokens in localStorage or sessionStorage.

### Phase 8 — Login and Sign-Up Pages

For Phase 8:

- Add login page.
- Add sign-up page.
- Use Better Auth client.
- Use React Hook Form and Zod if needed.
- Show safe error messages.
- Do not require email validation codes unless explicitly added.
- Do not add protected dashboard yet.

### Phase 9 — Protected Dashboard Route Layout

For Phase 9:

- Protect dashboard route group.
- Redirect unauthenticated users to login.
- Show safe loading state while session is loading.
- Do not expose dashboard data before session is confirmed.
- Add logout UI if appropriate.
- Do not add project CRUD yet.

### Phase 10 — Dashboard Overview Page

For Phase 10:

- Build real dashboard overview structure.
- Use backend data only when available.
- Do not fake metrics.
- Do not fake charts.
- Do not fake analytics.
- Keep dashboard creator-focused.

### Phase 11 — Projects List Page

For Phase 11:

- Add project fetching.
- Display authenticated user’s projects.
- Use TanStack Query.
- Use central API client.
- Add loading, empty, and error states.
- Do not show other users’ projects.

### Phase 12 — Create Project Flow

For Phase 12:

- Add create project UI.
- Use React Hook Form and Zod.
- Call `POST /api/projects`.
- Redirect or update list after success.
- Do not add upload yet unless assigned.

### Phase 13 — Project Detail Page

For Phase 13:

- Add project detail route.
- Fetch single project.
- Show project status.
- Show project metadata.
- Enforce safe loading/error states.
- Do not fake generated videos.

### Phase 14 — Upload Video Flow

For Phase 14:

- Add video upload UI.
- Use upload field name `video`.
- Validate file type client-side for UX.
- Show max upload size.
- Upload through Express API Gateway.
- Do not call FastAPI.
- Do not generate storage paths on frontend.

### Phase 15 — Processing Job Status UI

For Phase 15:

- Add start processing action.
- Add job status display.
- Add progress percentage.
- Add current step display.
- Use backend job polling.
- Support refresh recovery by refetching backend job state.
- Do not fake progress after integration.

### Phase 16 — Generated Video Results UI

For Phase 16:

- Fetch generated videos.
- Show summary video and reels.
- Show status, type, duration, and aspect ratio.
- Add preview/download UI only when supported by backend.
- Do not invent generated videos.

### Phase 17 — Notifications Dropdown/Page

For Phase 17:

- Fetch notifications.
- Fetch unread count.
- Mark notification as read.
- Mark all as read.
- Do not fake unread counts.
- Keep notification messages safe.

### Phase 18 — Settings Page

For Phase 18:

- Add basic settings page.
- Include theme/account preferences.
- Do not add billing unless payment phase exists.
- Do not add team/org settings unless backend supports them.

### Phase 19 — Responsive Polish

For Phase 19:

- Improve mobile layouts.
- Improve sidebar/header responsiveness.
- Improve dashboard page responsiveness.
- Do not change core behavior unnecessarily.

### Phase 20 — Accessibility and Error-State Polish

For Phase 20:

- Improve keyboard navigation.
- Improve focus states.
- Improve form accessibility.
- Improve loading/empty/error states.
- Verify safe error messages.
- Verify no private data leaks in UI.

### Phase 21 — Admin UI Later

For Phase 21:

- Add admin UI only if explicitly requested.
- Backend must support admin routes first.
- Do not fake admin data.

### Phase 22 — Payment UI Later

For Phase 22:

- Add payment UI only after core workflow works.
- Backend must own payment security and webhooks.
- Do not add Stripe secret keys to frontend.

## Testing Rules

Add tests where practical.

Recommended areas:

- API client error handling
- form validation
- protected route behavior
- upload validation
- job polling behavior
- notification actions
- reusable components

Do not spend excessive time setting up test infrastructure unless requested.

## Documentation Rules

Update README when adding:

- new environment variables
- new dependencies
- new setup commands
- new major features
- changed development workflow

Keep documentation concise and accurate.

## Command Expectations

After making frontend changes, run:

```bash
npm run build
```

If lint exists, run:

```bash
npm run lint
```

If tests exist, run:

```bash
npm run test
```

Fix errors caused by the current phase.

Do not ignore TypeScript, build, or lint failures.

## Frontend Secure Development Checklist

Before completing any frontend phase, verify:

```txt
No secrets are exposed in frontend code.
No FastAPI URL is used in the frontend.
No auth tokens are stored in localStorage or sessionStorage.
API calls use the central API client.
API calls include credentials when needed.
User-generated text is rendered safely.
No dangerouslySetInnerHTML is used without sanitization.
No fake private data is displayed.
No fake security/billing/admin behavior is added.
Errors shown to users are safe.
Console logs do not expose private data.
Build passes.
Lint passes if configured.
The product name remains RepurposePro.
```

## Frontend Anti-Slop Checklist

Before completing any frontend phase, verify:

```txt
No fake metrics were added.
No fake charts were added.
No fake analytics were added.
No fake testimonials were added.
No fake generated videos were added.
No fake notifications were added.
No fake protected routes were added.
No fake billing state was added.
No fake admin data was added.
No unnecessary dependencies were added.
No unused components were added.
No unrelated pages were added.
No random dashboard widgets were added.
No AI slop copy was added.
```

## Do Not Do Unless Asked

Do not:

- Build multiple phases at once
- Add fake metrics or fake analytics
- Add fake processing progress after backend integration
- Add fake generated videos
- Add fake notification counts
- Add fake billing status
- Add fake admin controls
- Add dashboard charts before real analytics exist
- Add payment integration before the payment phase
- Add admin UI before the admin phase
- Add social publishing before backend supports it
- Add AI SDKs or LLM SDKs to the frontend
- Call FastAPI directly from the frontend
- Expose secrets in frontend environment variables
- Store auth tokens in localStorage or sessionStorage
- Use custom JWT auth instead of Better Auth
- Use `dangerouslySetInnerHTML` without sanitization
- Disable TypeScript or ESLint to pass builds
- Add unnecessary dependencies
- Change the product name from RepurposePro
