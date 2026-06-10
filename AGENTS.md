# Project Name

RepurposePro Frontend

## Project Description

RepurposePro is an AI-powered video repurposing platform that helps creators transform long-form videos into:

- A 7–10 minute summary video
- Multiple vertical highlight reels for TikTok, Instagram Reels, and YouTube Shorts

The frontend is the user-facing creator workspace for:

- Signing up and logging in
- Managing projects
- Uploading long-form videos
- Starting video processing
- Tracking processing jobs
- Previewing generated outputs
- Downloading generated videos
- Viewing notifications
- Managing account and theme settings

The frontend should be built phase by phase.

Do not build the whole frontend at once.

Do not jump ahead to later phases unless explicitly requested.

## Backend API Relationship

The frontend should communicate only with the Express.js API Gateway.

Default local backend URL:

```txt
http://localhost:5000
```

Use this environment variable:

```txt
NEXT_PUBLIC_API_URL=http://localhost:5000
```

The frontend must never directly call the FastAPI AI Service.

Do not call:

```txt
http://localhost:8000
```

The FastAPI AI Service is internal backend infrastructure.

The expected backend stack is:

```txt
Express.js API Gateway
Better Auth
Prisma
Neon Serverless Postgres
Arcjet
FastAPI AI Service behind Express
```

## Main User Workflow

The final frontend should support this workflow:

```txt
Sign up / Login
→ Dashboard
→ Create project
→ Upload long-form video
→ Start processing
→ Track processing job status
→ View generated summary and reels
→ Preview outputs
→ Download outputs
→ View notifications
→ Manage settings
```

Build this workflow gradually.

Do not implement all of it in Phase 1.

## Recommended Frontend Stack

Use:

```txt
Next.js
TypeScript
App Router
Tailwind CSS
shadcn/ui
Lucide React
TanStack Query
React Hook Form
Zod
next-themes
Better Auth client
Axios or native fetch
Google Fonts through next/font/google
```

Do not use Refine Core for the main creator-facing frontend.

Refine may be considered later only for an admin dashboard if explicitly requested.

## Design Direction

RepurposePro should feel like a premium AI video workspace for creators.

The product should feel like:

```txt
Linear-level interface clarity
+ CapCut-style creator utility
+ modern AI workflow polish
```

The UI should feel:

- Clean
- Fast
- Focused
- Creator-friendly
- Video-first
- Professional
- Dark-first
- Useful, not decorative

Avoid making the app look like a generic AI SaaS template.

## Anti-AI-Slop Rules

Do not generate:

```txt
Fake metrics
Fake testimonials
Fake charts
Random decorative gradients
Overused sparkle icons
Generic SaaS cards
Unrelated dashboard widgets
Placeholder lorem ipsum
Inconsistent spacing
Inconsistent border radius
Inconsistent button styles
Overly dramatic marketing copy
```

Every visible UI element must support the user workflow.

Before adding a component, ask:

```txt
Does this help the user upload, process, preview, manage, or download videos?
```

If not, do not add it.

## Visual Style Rules

Use a dark-first design system.

Default theme:

```txt
dark
```

Support light and system themes later, but optimize the MVP for dark mode first.

Use:

```txt
Dark background
Subtle borders
Soft cards
Clear hierarchy
Minimal gradients
Controlled accent color
High-quality spacing
Video previews as the visual focus
```

Avoid:

```txt
Glowing blobs everywhere
Random gradients
Floating glass panels without purpose
Excessive shadows
AI sparkle icons everywhere
Oversized emoji
Generic neon effects
Meaningless animations
```

## Theme Rules

Use CSS variables for theme tokens.

Support:

```txt
Dark
Light
System
```

Use `next-themes` when the theme phase begins.

Do not hard-code colors throughout components.

Use semantic tokens:

```txt
background
foreground
card
card-foreground
primary
primary-foreground
muted
muted-foreground
border
destructive
success
warning
```

If success/warning tokens do not exist, add them carefully and consistently.

## Color Rules

Use a small, controlled color palette.

Recommended direction:

```txt
Background: near-black / dark navy
Surface: dark gray
Surface elevated: slightly lighter dark gray
Border: subtle gray border
Primary accent: violet or cyan
Success: green
Warning: amber
Error: red
Text primary: near-white
Text secondary: soft gray
Text muted: gray
```

Use one primary accent color consistently.

Good accent usage:

```txt
Primary button
Active sidebar item
Progress indicator
Selected tab
Upload focus state
```

Bad accent usage:

```txt
Every card has a different gradient
Every section glows
Every icon has a random color
Buttons use inconsistent colors
```

## Google Fonts

Use Google Fonts through Next.js font optimization.

Preferred font:

```txt
Geist
```

Acceptable alternatives:

```txt
Inter
Manrope
DM Sans
```

Recommended default:

```txt
Geist Sans for the main UI
```

If using Next.js App Router, import fonts from:

```txt
next/font/google
```

Do not load Google Fonts with external `<link>` tags unless there is a strong reason.

Do not use decorative or overly stylized fonts.

Typography should feel:

- Clean
- Modern
- Professional
- Readable
- Product-focused

Recommended font usage:

```txt
Headings: Geist Sans, medium or semibold
Body text: Geist Sans, regular
Muted text: Geist Sans, regular
Buttons: Geist Sans, medium
```

Avoid:

```txt
Too many font families
Decorative display fonts
Overly playful fonts
Random font changes between pages
```

Use one primary font family consistently across the application.

## Typography Rules

Use Google Fonts through `next/font/google`.

Preferred:

- Geist

Acceptable alternatives:

- Inter
- Manrope
- DM Sans

Every page should have:

```txt
Clear title
Short description
Primary action
Relevant content
```

Avoid:

```txt
Too many font sizes
Too many font weights
All-caps everywhere
Decorative fonts
Marketing-style giant headings inside dashboard pages
```

## Layout Rules

Use a real product layout.

Final dashboard layout should include:

```txt
Sidebar navigation
Top bar/header
Main content area
Optional right-side details panel later
```

Avoid:

```txt
Unaligned cards
Random margins
Floating sections without structure
Huge empty hero sections inside the app
Overly centered dashboard content
```

## Component Rules

Use shadcn/ui-style components consistently.

Preferred components:

```txt
Button
Card
Dialog
Dropdown
Tabs
Table
Badge
Input
Textarea
Select
Progress
Toast
Tooltip
Skeleton
Avatar
Sheet
Command menu
```

Do not invent a new card, button, badge, or input style on every screen.

Do not create unnecessary components before they are needed.

## Button Rules

Use clear button hierarchy.

Button types:

```txt
Primary: main action
Secondary: supporting action
Ghost: low-emphasis action
Destructive: dangerous action
```

Examples:

```txt
Upload Video = Primary
View Details = Secondary
Cancel = Ghost
Delete Project = Destructive
```

Avoid multiple primary buttons in the same section unless there is a strong reason.

## Card Rules

Cards should be functional, not decorative.

Every card must have a purpose:

```txt
Project card
Generated video card
Upload card
Processing status card
Stats card
Notification card
Settings card
```

Each card should have:

```txt
Clear title
Useful status or metadata
One clear action
Consistent padding
Subtle border
```

Do not create cards just to fill space.

## Frontend Folder Structure

Use this structure:

```txt
repurposepro-frontend/
├── AGENTS.md
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
    │   ├── auth.ts
    │   ├── query-client.ts
    │   ├── utils.ts
    │   └── constants.ts
    ├── schemas/
    ├── types/
    └── styles/
```

Create folders only when needed for the current phase.

Do not fill folders with placeholder files just to match the structure.

## API Rules

All backend calls should use the central API client or feature-specific API modules.

Expected Express API Gateway routes include:

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

Better Auth owns auth routes under:

```txt
/api/auth/*
```

Do not manually invent frontend calls to custom auth routes unless the backend actually exposes them.

## API Client Rules

The API client should:

- Use `NEXT_PUBLIC_API_URL`
- Include credentials for cookie-based auth
- Normalize errors
- Return typed responses where practical
- Avoid repeating fetch logic inside components
- Avoid hard-coded endpoint URLs scattered across pages

Expected behavior for cookie/session auth:

```txt
credentials: "include"
```

## Authentication Rules

Use Better Auth client integration.

Auth requirements:

```txt
Login
Sign up
Logout
Current user/session
Protected dashboard routes
Redirect unauthenticated users to login
Redirect authenticated users away from login/signup when appropriate
```

Do not build custom JWT authentication.

Do not store passwords, session tokens, or cookies in localStorage.

Do not expose session secrets.

## Data Fetching Rules

Use TanStack Query for server state.

Use local React state for UI-only state.

Avoid unnecessary global state.

Recommended query domains:

```txt
auth
projects
uploads
jobs
generatedVideos
notifications
user
```

Use stable query keys.

Invalidate or refetch related queries after mutations.

Examples:

```txt
After creating a project → invalidate projects query
After uploading video → invalidate project detail query
After starting processing → invalidate jobs and project detail queries
After marking notification as read → invalidate notifications and unread count
```

## Forms Rules

Use:

```txt
React Hook Form
Zod validation
Inline field errors
Disabled submit while loading
Clear success/error toast
```

Project creation should stay simple:

```txt
Project title
Description optional
Create button
```

Do not create huge forms when a short form is enough.

## Upload Rules

Upload must feel reliable.

Required behavior:

```txt
Drag-and-drop support
Manual file picker support
File type validation
File size validation
Upload progress if practical
Clear success state
Clear failure state
Start processing action after upload
```

Allowed formats:

```txt
.mp4
.mov
.mkv
.webm
```

Maximum file size for MVP:

```txt
2048 MB
```

Upload field name must be:

```txt
video
```

The frontend upload request must match:

```txt
POST /api/projects/:id/upload
```

Use `FormData`.

Do not rename the upload field.

## Project Rules

Projects should support:

```txt
List projects
Create project
View project detail
Edit project metadata if implemented
Delete project if implemented
Upload video to project
Start processing
View jobs
View generated videos
```

Project statuses:

```txt
draft
uploaded
queued
processing
completed
failed
```

Use clear status badges.

Do not use color alone to communicate status.

## Processing Job Rules

Processing status UI should show:

```txt
Current step
Progress bar
Job status badge
Started time
Completed time if available
Clear error message if failed
```

Processing job statuses:

```txt
queued
processing
completed
failed
cancelled
```

Do not show fake overly precise progress unless the backend provides it.

Good:

```txt
Processing · 65%
Generating reels
```

Bad:

```txt
AI is thinking magically...
Enhancing creativity by 94.82%
```

## Generated Video Rules

Generated videos should be the visual focus.

Each generated output should show:

```txt
Video preview or thumbnail area
Type badge: Summary or Reel
Title
Duration
Aspect ratio
Status
Download button
Preview button
```

Generated video types:

```txt
summary
reel
```

Generated video statuses:

```txt
pending
rendering
ready
failed
```

For reels, display them in a grid.

For the summary video, give it more space than reels.

Do not hide creator-facing outputs in a plain table unless it is an admin page.

## Notification Rules

Notifications should use backend notification routes.

Expected routes:

```txt
GET   /api/notifications
GET   /api/notifications/unread-count
PATCH /api/notifications/:id/read
PATCH /api/notifications/read-all
```

Notification types:

```txt
video_uploaded
processing_started
processing_completed
processing_failed
generated_video_ready
```

For MVP, use REST polling or refetching.

Do not add WebSockets or Server-Sent Events unless explicitly requested.

Notification messages should be direct:

```txt
Your video was uploaded successfully.
Your summary and reels are ready.
Processing failed. Please try again.
```

Avoid annoying notifications for every minor event.

## Admin UI Rules

Admin UI comes later.

Do not build admin UI before the creator workflow works.

If admin pages are added later, they should require:

```txt
Authenticated session
role === "admin"
```

Admin pages may use tables and dense layouts.

Creator-facing pages should prefer cards and visual previews.

## Loading State Rules

Use skeletons and progress indicators.

Do not leave blank pages while loading.

Use:

```txt
Skeleton cards
Loading spinner only for small actions
Progress bars for uploads and processing
Disabled buttons during submission
```

Avoid full-page spinners unless absolutely necessary.

## Empty State Rules

Every major page needs a good empty state.

Empty states should include:

```txt
Simple icon or illustration
Clear title
Short explanation
Primary action
```

Example:

```txt
No projects yet

Upload your first long-form video to generate a summary and reels.

Button: Create Project
```

Avoid generic empty text like:

```txt
No data found.
Nothing here.
```

## Error State Rules

Errors should be human-readable and actionable.

Good:

```txt
Upload failed because the file type is not supported. Please upload an MP4, MOV, MKV, or WEBM file.
```

Bad:

```txt
Error: 400
Something went wrong
```

Each error should tell the user:

```txt
What happened
Why it might have happened
What to do next
```

## Accessibility Rules

Follow basic accessibility rules.

Required:

```txt
Keyboard-accessible buttons
Visible focus states
Readable contrast
Labels for inputs
Alt text for meaningful images
ARIA only when needed
No color-only status indicators
```

Status badges should use both color and text.

Example:

```txt
Green badge with text: Completed
Red badge with text: Failed
```

## Responsive Rules

The app must work on:

```txt
Desktop
Laptop
Tablet
Mobile
```

Desktop-first is acceptable, but mobile should not be broken.

Responsive behavior:

```txt
Sidebar collapses on smaller screens
Cards stack on mobile
Tables become scrollable
Video grids reduce columns
Upload area remains usable
```

## Animation Rules

Use motion sparingly.

Good animations:

```txt
Button hover
Dropdown open
Dialog transition
Upload progress
Toast entrance
Card hover lift
```

Avoid:

```txt
Constant moving backgrounds
Random floating objects
Excessive page transitions
Bouncy animations everywhere
```

Animations should make the product feel smoother, not childish.

## Icon Rules

Use Lucide React icons.

Use icons to support meaning, not decorate every line.

Good icon usage:

```txt
Upload
Video
Scissors
Bell
Settings
User
Check
Alert
Download
Play
```

Avoid:

```txt
Sparkles everywhere
Random magic wand icons on every AI feature
Multiple icon styles
Emoji used as primary UI icons
```

## Copywriting Rules

Use clear, direct product copy.

Tone:

```txt
Helpful
Confident
Simple
Creator-focused
Professional
```

Good copy:

```txt
Upload a long-form video and RepurposePro will generate a summary and short reels.
```

Bad copy:

```txt
Experience the future of next-generation AI-powered viral content magic.
```

Avoid buzzwords unless they explain real functionality.

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

Do not jump ahead.

If asked for Phase 1, build only Phase 1.

If asked for Phase 2, build only Phase 2.

## Current Phase Guidance

### Frontend Phase 1 — Next.js Foundation

For Phase 1:

- Create the base Next.js app.
- Use TypeScript.
- Use App Router.
- Use `src/` directory.
- Add basic project scripts.
- Add `.env.example`.
- Add basic README setup instructions.
- Create a minimal root page.
- Do not add Tailwind custom design yet beyond default setup if already installed.
- Do not add shadcn/ui yet unless the initialization requires it.
- Do not add layout/sidebar/header yet.
- Do not add API client yet.
- Do not add TanStack Query yet.
- Do not add Better Auth yet.
- Do not add dashboard pages yet.

### Frontend Phase 2 — Tailwind CSS and shadcn/ui Foundation

For Phase 2:

- Configure Tailwind CSS.
- Initialize shadcn/ui.
- Add base global CSS variables.
- Add `cn` utility.
- Add only essential UI components:
  - Button
  - Card
  - Input
  - Label
  - Badge

- Keep styling dark-first.
- Do not build the dashboard layout yet.
- Do not add auth yet.
- Do not add API calls yet.

### Frontend Phase 3 — Theme System

For Phase 3:

- Add `next-themes`.
- Create `ThemeProvider`.
- Add dark mode as default.
- Add light/dark/system support.
- Add a simple theme toggle component.
- Ensure global styles work in dark and light mode.
- Do not add dashboard layout yet.
- Do not add auth yet.
- Do not add API calls yet.

### Frontend Phase 4 — Base Layout, Sidebar, and Header

For Phase 4:

- Create app shell layout.
- Create sidebar.
- Create header.
- Add dashboard route group.
- Add placeholder dashboard pages.
- Add navigation items:
  - Dashboard
  - Projects
  - Upload
  - Results
  - Notifications
  - Settings

- Use Lucide icons.
- Keep pages as placeholders only.
- Do not add auth protection yet.
- Do not add API calls yet.

### Frontend Phase 5 — API Client Setup

For Phase 5:

- Add central API client.
- Use `NEXT_PUBLIC_API_URL`.
- Include credentials for cookie-based auth.
- Normalize API errors.
- Add shared API response types.
- Add constants.
- Do not call backend from UI pages yet except possibly health check if requested.
- Do not add TanStack Query yet unless requested.

### Frontend Phase 6 — TanStack Query Provider

For Phase 6:

- Add TanStack Query.
- Create query client.
- Add provider to app.
- Add query key constants.
- Do not implement feature data fetching yet.
- Do not add auth yet.

### Frontend Phase 7 — Better Auth Client Integration

For Phase 7:

- Add Better Auth client setup.
- Add session/current-user support.
- Add auth utility hooks if needed.
- Do not build full login/signup UI yet unless required by integration.
- Do not build protected routes yet.
- Do not store tokens in localStorage.

### Frontend Phase 8 — Login and Sign-up Pages

For Phase 8:

- Build login page.
- Build sign-up page.
- Use Better Auth client.
- Use React Hook Form and Zod.
- Show validation errors.
- Show loading and error states.
- Redirect authenticated users appropriately.
- Do not build dashboard data features yet.

### Frontend Phase 9 — Protected Dashboard Route Layout

For Phase 9:

- Protect dashboard routes.
- Redirect unauthenticated users to login.
- Show loading state while checking session.
- Add logout action.
- Show user info in header if available.
- Do not add project API features yet.

### Frontend Phase 10 — Dashboard Overview Page

For Phase 10:

- Build dashboard overview page.
- Use real backend data only if relevant endpoints exist.
- Prefer empty states over fake data.
- Show:
  - recent projects placeholder or real projects
  - processing jobs placeholder or real jobs
  - generated videos ready placeholder or real data
  - upload CTA

- Do not add fake metrics.

### Frontend Phase 11 — Projects List Page

For Phase 11:

- Add projects API module.
- Fetch projects from backend.
- Show project cards or clean list.
- Add loading state.
- Add empty state.
- Add error state.
- Add filters/search only if practical.
- Do not add create project flow unless requested in this phase.

### Frontend Phase 12 — Create Project Flow

For Phase 12:

- Add create project form.
- Use React Hook Form and Zod.
- Call `POST /api/projects`.
- Invalidate projects query after success.
- Redirect to project detail or projects list after success.
- Keep form simple:
  - title
  - description optional

### Frontend Phase 13 — Project Detail Page

For Phase 13:

- Add project detail route.
- Fetch project by ID.
- Show project metadata.
- Show status badge.
- Show upload status.
- Show processing jobs section placeholder or real list if already available.
- Show generated videos section placeholder or real list if already available.
- Do not implement upload logic yet unless requested.

### Frontend Phase 14 — Upload Video Flow

For Phase 14:

- Add upload UI for a project.
- Use drag-and-drop and file picker.
- Validate file extension and size.
- Upload with `FormData`.
- Field name must be `video`.
- Call `POST /api/projects/:id/upload`.
- Show upload progress if practical.
- Invalidate project detail after upload.
- Show start processing CTA after successful upload if route exists.

### Frontend Phase 15 — Processing Job Status UI

For Phase 15:

- Add start processing action.
- Call `POST /api/projects/:id/process`.
- Fetch project jobs from:
  - `GET /api/projects/:id/jobs`

- Fetch job detail from:
  - `GET /api/jobs/:id`

- Show status badge, progress, current step, error message.
- Poll while job is queued or processing.
- Stop polling when completed, failed, or cancelled.

### Frontend Phase 16 — Generated Video Results UI

For Phase 16:

- Fetch generated videos from:
  - `GET /api/projects/:id/generated-videos`

- Display summary video prominently.
- Display reels in a grid.
- Show title, duration, aspect ratio, status, preview/download actions.
- Use placeholders only when output URLs are not playable yet.
- Do not fake generated video records.

### Frontend Phase 17 — Notifications Dropdown/Page

For Phase 17:

- Fetch notifications.
- Fetch unread count.
- Add notification bell.
- Add dropdown or page.
- Add mark as read.
- Add mark all as read.
- Invalidate notification queries after mutation.
- Use REST refetching/polling only.
- Do not add WebSockets or SSE.

### Frontend Phase 18 — Settings Page

For Phase 18:

- Add settings page.
- Include theme toggle.
- Include basic profile/account display if auth data exists.
- Do not add billing.
- Do not add social publishing settings.
- Do not add unsupported preferences.

### Frontend Phase 19 — Responsive Polish

For Phase 19:

- Improve mobile and tablet layouts.
- Make sidebar collapsible.
- Ensure cards stack properly.
- Ensure tables scroll horizontally if used.
- Ensure upload flow works on mobile.
- Do not add new features.

### Frontend Phase 20 — Accessibility and Error-State Polish

For Phase 20:

- Review keyboard navigation.
- Add visible focus states.
- Improve labels and descriptions.
- Improve empty states.
- Improve error messages.
- Improve loading states.
- Remove any leftover placeholder or fake copy.

### Frontend Phase 21 — Admin UI Later

For Phase 21:

- Add admin UI only if backend admin routes exist.
- Protect admin routes by `role === "admin"`.
- Use tables for admin users, projects, jobs, and notifications.
- Do not build admin UI before creator workflow is stable.

## Testing Rules

Add tests where practical.

Recommended tools:

```txt
Vitest
React Testing Library
Playwright later for end-to-end flows
```

At minimum, test:

```txt
API utility functions
Form validation schemas
Important components
Protected route behavior if practical
```

Do not spend excessive time on testing setup before the core frontend flow exists.

## Documentation Rules

Update documentation when adding:

```txt
New environment variables
New routes/pages
New setup commands
New API assumptions
New frontend dependencies
```

Keep `README.md` accurate.

## Command Expectations

After making frontend changes, run:

```bash
npm run build
```

If available, also run:

```bash
npm run lint
npm run test
```

Fix TypeScript, build, and lint errors before moving on.

## Do Not Do Unless Asked

Do not:

- Build multiple phases at once
- Call the FastAPI AI Service directly from the frontend
- Build custom JWT authentication
- Store auth tokens in localStorage
- Add payment UI
- Add social media publishing UI before the core workflow works
- Add admin UI before the creator workflow works
- Add fake analytics
- Add fake testimonials
- Add unnecessary charts
- Add over-designed AI marketing sections inside the app
- Add random gradients and glowing blobs everywhere
- Use inconsistent component styles
- Change the product name from RepurposePro

## Final Design Principle

RepurposePro should not feel like an AI-generated template.

It should feel like a real tool creators would use every day to turn long videos into finished, downloadable content.

Prioritize:

```txt
Workflow clarity
Video previews
Processing transparency
Clean design
Consistent components
Real product usefulness
```
