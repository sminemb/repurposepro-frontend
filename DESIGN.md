# DESIGN.md

## Project Name

RepurposePro

## Purpose of This File

This file defines the visual design, UX direction, interface patterns, and presentation rules for the RepurposePro frontend.

Use this file for:

- Visual design direction
- Theme and color guidance
- Typography
- Layout style
- Component appearance
- Spacing, radius, borders, and shadows
- Page-level UX patterns
- Empty, loading, and error-state presentation
- Responsive and accessibility design guidance

Use `AGENTS.md` for:

- Architecture rules
- Phase-by-phase build order
- Security rules
- API integration rules
- Authentication rules
- Folder structure
- Coding rules
- Command expectations

If the two files conflict:

```txt
Security and phase scope in AGENTS.md take priority.
Visual and UX styling in DESIGN.md take priority.
```

## Product Description

RepurposePro is an AI-powered video repurposing platform that transforms long-form videos into:

- A 7–10 minute summary video
- Multiple vertical highlight reels for TikTok, Instagram Reels, and YouTube Shorts

The frontend should feel like a focused creator workspace, not a generic SaaS dashboard.

## Design Goal

RepurposePro should look and feel like:

```txt
A premium dark-first AI video workspace for creators.
```

The interface should combine:

```txt
Linear-level interface clarity
CapCut-style creator utility
Modern AI workflow polish
Professional dark dashboard restraint
```

The design should help users move through this workflow:

```txt
Sign up / Login
→ Dashboard
→ Create project
→ Upload video
→ Start processing
→ Track processing job
→ View generated summary and reels
→ View notifications
→ Manage settings
```

Every visual element should support that workflow.

Do not add visual noise just to make the app look larger.

## Design Personality

RepurposePro should feel:

- Clean
- Fast
- Calm
- Professional
- Creator-focused
- Video-first
- Trustworthy
- Polished
- Practical
- Secure

It should not feel:

- Gimmicky
- Overly “AI magical”
- Noisy
- Toy-like
- Fake
- Overdecorated
- Generic SaaS
- Crypto dashboard-like
- Enterprise-cluttered

## Anti-AI-Slop Design Rules

Do not add:

```txt
Fake metrics
Fake analytics
Fake testimonials
Fake charts
Fake growth numbers
Fake user activity
Fake processing progress
Fake generated videos
Fake notification counts
Fake billing status
Random gradients
Glowing blobs
Overused sparkle icons
Generic SaaS cards
Placeholder business data
Decorative dashboard widgets
Unrelated admin panels
Fake security badges
Fake compliance claims
```

Placeholder UI is allowed only when clearly labeled as future functionality and does not pretend to be live data.

Do not use lorem ipsum.

Use product-specific copy.

## Visual Direction

Use a dark-first dashboard style.

The product should look like a serious creator tool for video workflows.

Prefer:

- Near-black backgrounds
- Dark navy or charcoal surfaces
- Subtle borders
- Muted cards
- Soft contrast
- Crisp typography
- One restrained accent color
- Minimal shadows
- Clear hierarchy
- Strong spacing discipline
- Video-oriented layouts

Avoid:

- Loud gradients
- Neon overload
- Random glassmorphism
- Excessive blur
- Excessive shadows
- Floating decorative objects
- Cartoon-like UI
- Cluttered dashboards
- Multiple competing accent colors

## Theme Direction

Dark mode is the primary brand experience.

Light mode should be readable and clean, but it does not need to be the dominant expression.

Theme support should include:

```txt
dark
light
system
```

Dark mode should be the default.

## Color System

Use neutral dark surfaces with one restrained accent.

Recommended palette direction:

```txt
Background: near black / dark navy
Cards: slightly lighter dark surface
Borders: subtle neutral border
Text: high-contrast off-white
Muted text: gray / slate
Accent: violet, cyan, or blue-violet
Success: green
Warning: amber
Danger: red
```

Do not use too many accent colors at once.

Use color meaningfully:

```txt
Primary action → accent
Success state → green
Warning state → amber
Error/destructive state → red
Neutral metadata → muted gray/slate
```

## Suggested CSS Token Direction

Use shadcn/ui CSS variables.

Recommended dark visual direction:

```txt
background: near-black
foreground: off-white
card: dark charcoal/navy
card-foreground: off-white
popover: dark charcoal/navy
popover-foreground: off-white
primary: violet/cyan/blue-violet
primary-foreground: white
secondary: muted dark surface
secondary-foreground: off-white
muted: muted dark surface
muted-foreground: slate gray
accent: subtle accent surface
accent-foreground: off-white
destructive: red
destructive-foreground: white
border: subtle slate border
input: subtle slate border
ring: accent
```

Light mode should use the same semantic tokens with readable contrast.

## Typography

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

Do not use decorative fonts.

Do not use multiple competing font families.

Typography should feel:

- Clean
- Modern
- Readable
- Slightly technical
- Calm
- Professional

## Type Scale

Use a simple, consistent type scale.

Suggested hierarchy:

```txt
Page title: text-2xl to text-3xl, semibold
Section title: text-lg to text-xl, semibold
Card title: text-base to text-lg, medium/semibold
Body: text-sm to text-base
Metadata: text-xs to text-sm
Tiny labels: text-xs
```

Avoid huge marketing headlines inside the dashboard.

Dashboard pages should feel like a product workspace, not a landing page.

## Copywriting Style

Use direct, useful product copy.

Tone:

- Clear
- Calm
- Professional
- Helpful
- Creator-focused

Avoid exaggerated AI claims.

Do not claim:

```txt
Guaranteed viral clips
Instant fame
Perfect AI edits
10x growth guaranteed
Fully automated success
```

Good copy examples:

```txt
Upload a long-form video and generate a summary plus short reels.
Processing may take a few minutes depending on video length.
Your generated videos will appear here when processing is complete.
No projects yet. Create your first project to upload a video.
```

Avoid vague copy like:

```txt
Unleash your content potential
AI magic starts here
Go viral instantly
Supercharge everything
```

## Layout Principles

Use a dashboard-style layout after the layout phase.

Expected structure:

```txt
Sidebar
Header
Main content area
Page header
Primary content card/grid
```

The layout should feel stable and predictable.

Use consistent page padding.

Suggested desktop layout:

```txt
Sidebar width: 240px to 280px
Header height: 64px to 72px
Main content max width: flexible, usually full dashboard width
Page padding: 24px to 32px
Card padding: 20px to 24px
```

Keep pages scannable.

Avoid overly dense UI.

## Spacing Rules

Use consistent spacing.

Suggested spacing rhythm:

```txt
4px  = tiny gap
8px  = small gap
12px = control inner spacing
16px = normal component gap
24px = section/card spacing
32px = page section spacing
48px = large layout spacing
```

Do not use random spacing values unless necessary.

## Radius Rules

Use rounded corners, but not overly bubbly.

Suggested radius direction:

```txt
Small controls: 8px
Cards: 12px to 16px
Large panels: 16px to 20px
Pills/badges: full or high radius
```

Avoid excessive rounded corners that make the app feel playful instead of professional.

## Border and Shadow Rules

Prefer borders over heavy shadows.

Use:

- Subtle borders
- Low-contrast dividers
- Soft elevation only when needed

Avoid:

- Large drop shadows
- Bright border glow
- Heavy glass effects
- Neon outlines

Good card treatment:

```txt
dark surface
subtle border
small radius
clear content hierarchy
```

## Motion Rules

Motion should be minimal and useful.

Use motion for:

- Button hover states
- Small transitions
- Loading changes
- Panel appearance when useful

Avoid:

- Constant animations
- Distracting background motion
- Excessive spring effects
- Animated decorative AI effects

Motion should not slow down the interface.

## Icon Rules

Use Lucide React icons.

Icons should support recognition, not decoration.

Good icon use:

```txt
Dashboard
Projects
Upload
Results
Notifications
Settings
Play
Download
Clock
CheckCircle
AlertCircle
FileVideo
```

Avoid using:

```txt
Sparkles
Wand
Rocket
Flame
Zap
Emojis
```

AI-related icons are allowed only when they communicate a real action or status.

## Button Design

Buttons should have clear hierarchy.

Button types:

```txt
Primary
Secondary
Ghost
Destructive
```

Primary buttons should be reserved for the main action on a page.

Examples:

```txt
Create project
Upload video
Start processing
View results
Mark all as read
```

Avoid vague button labels:

```txt
Go
Submit
Next thing
Click here
```

Button states should include:

```txt
default
hover
focus
disabled
loading
destructive
```

Disabled buttons should explain why when context is not obvious.

## Card Design

Cards should group real workflow content.

Good cards:

```txt
Project summary
Upload panel
Processing status
Generated summary video
Generated reel
Notification item
Settings section
```

Bad cards:

```txt
Fake revenue
Fake engagement
Fake views
Fake viral score
Fake AI power index
```

Cards should have:

- Clear title
- Optional description
- One primary purpose
- Consistent spacing
- Minimal decoration

## Badge Design

Badges should communicate status clearly.

Project statuses:

```txt
draft
uploaded
queued
processing
completed
failed
```

Processing job statuses:

```txt
queued
processing
completed
failed
cancelled
```

Generated video statuses:

```txt
pending
rendering
ready
failed
```

Recommended badge tone:

```txt
draft → neutral
uploaded → blue/cyan
queued → muted/amber
processing → violet/blue
completed → green
failed → red
cancelled → muted gray
ready → green
rendering → violet/blue
pending → muted/amber
```

Do not invent new frontend status strings unless the backend schema changes.

## Form Design

Forms should be simple and readable.

Form fields should include:

- Visible labels
- Helpful placeholder only when needed
- Clear validation errors
- Disabled/loading submit state
- Accessible focus state

Avoid:

- Placeholder-only labels
- Overly long forms
- Hidden required fields
- Vague validation errors

Good validation messages:

```txt
Project name is required.
Email address is invalid.
Password must be at least 8 characters.
Unsupported video type. Upload an MP4, MOV, MKV, or WEBM file.
```

## Page Header Pattern

Most dashboard pages should start with a page header.

Recommended structure:

```txt
Title
Short description
Optional primary action
```

Examples:

```txt
Projects
Manage long-form videos and generated outputs.
[Create project]
```

```txt
Upload
Upload a long-form video to prepare it for processing.
```

```txt
Results
Preview generated summaries and reels.
```

## Sidebar Design

The sidebar should feel calm and functional.

Include:

- Product name
- Optional workspace label
- Navigation links
- Active state
- Compact icons
- Clear hover/focus states

Navigation items:

```txt
Dashboard
Projects
Upload
Results
Notifications
Settings
```

Do not add admin navigation until admin is actually supported.

Do not add billing navigation until payment is actually supported.

## Header Design

The header should support workspace actions without becoming crowded.

Early header may include:

- Page/workspace label
- Theme toggle
- Simple user placeholder until auth is wired

Later header may include:

- User account menu
- Logout action
- Notification dropdown
- Current workspace/project context

Avoid stuffing too many actions into the header.

## Dashboard Overview Page

The dashboard should show useful overview information only when real backend data exists.

Before real data exists, use honest empty states.

Do not add fake charts or fake metrics.

Good dashboard sections later:

```txt
Recent projects
Active processing job
Recently generated videos
Recent notifications
Quick action: Create project
Quick action: Upload video
```

Avoid:

```txt
Fake total views
Fake engagement
Fake revenue
Fake viral score
Fake growth chart
```

## Projects Page

The projects page should help users manage uploaded long-form videos.

Design should include:

- Project list
- Project status
- Created/updated date
- Upload status
- Processing status
- Primary action to create a project
- Empty state if no projects exist

Empty state example:

```txt
No projects yet.
Create your first project to upload a long-form video and generate clips.
```

## Create Project Flow

The create project flow should be focused.

Fields may include:

```txt
Project name
Description or notes
```

Do not ask for unnecessary information early.

After creation, guide the user toward upload.

## Project Detail Page

The project detail page should be the central workspace for one video project.

Suggested sections:

```txt
Project summary
Upload status
Processing status
Generated outputs
Project actions
```

Do not show fake generated videos.

Do not show fake processing status.

## Upload Page / Upload Flow

Upload UI should feel clear and trustworthy.

Show:

- Allowed formats
- Max upload size
- Selected file name
- File size
- Upload progress if available
- Clear error state
- Next step after upload

Allowed formats:

```txt
.mp4
.mov
.mkv
.webm
```

Upload field name expected by backend:

```txt
video
```

Do not generate storage paths on the frontend.

Do not pretend upload succeeded before the backend confirms it.

## Processing Job UI

Processing UI should show progress from the backend.

Show:

```txt
Status
Progress percentage
Current step
Started time if available
Completion/failure state
Cancel action if supported
```

Processing progress should survive page refresh by refetching backend job state.

This feature is called:

```txt
Persistent processing job state with polling-based progress recovery
```

Do not fake progress after backend job integration begins.

Good processing copy:

```txt
Processing your video...
Extracting audio
Generating transcript
Detecting highlights
Rendering summary and reels
```

Only use steps the backend actually provides or has agreed to provide.

## Generated Video Results UI

Generated results should be video-first.

Show:

- Summary video section
- Reels section
- Video preview if URL is available
- Type label
- Duration
- Aspect ratio
- Status
- Download/export action when backend supports it

Summary video:

```txt
Large preview card
16:9 aspect ratio
Title
Duration
Status
```

Reels:

```txt
Grid of vertical cards
9:16 preview area
Title
Duration
Status
```

Do not invent generated videos.

Only display backend-returned generated video records.

## Notifications UI

Notifications should be clean and useful.

Notification items should show:

- Title
- Message
- Time/date
- Read/unread state
- Optional related project context
- Action if useful

Notification types:

```txt
video_uploaded
processing_started
processing_completed
processing_failed
generated_video_ready
```

Do not fake unread counts after notification integration begins.

Good empty state:

```txt
No notifications yet.
Updates about uploads and processing will appear here.
```

## Settings Page

Settings should start simple.

Early settings may include:

- Theme preference
- Basic account display
- Future profile placeholder only if clearly labeled

Do not add billing settings until payment exists.

Do not add team settings until backend supports teams.

Do not add security settings unless backend supports them.

## Auth Pages

Login and signup pages should feel simple, secure, and focused.

Auth pages should include:

- Product name
- Short product value statement
- Form card
- Clear labels
- Safe error messages
- Link between login and signup

Do not overdecorate auth pages.

Do not claim email verification exists unless it is implemented.

Email validation codes are not required for MVP unless explicitly added later.

Good auth page copy:

```txt
Sign in to RepurposePro
Continue working on your video projects.
```

```txt
Create your RepurposePro account
Start turning long-form videos into summaries and short reels.
```

## Admin UI

Do not design admin UI until explicitly requested.

Admin UI should come after the core creator workflow works.

Do not design fake admin charts, fake system metrics, fake user tables, or fake role controls.

## Payment UI

Do not design payment UI until payment integration is planned.

When payment UI is added later, it should be simple and transparent:

- Current plan
- Usage
- Plan limits
- Upgrade action
- Billing portal link

Do not add fake billing status.

Do not add fake pricing tables before the pricing model is decided.

## Loading States

Loading states should be calm and specific.

Good loading copy:

```txt
Loading projects...
Checking processing status...
Loading notifications...
Preparing upload...
```

Avoid vague loading copy:

```txt
Loading...
Working magic...
AI is thinking...
```

Skeletons are acceptable when they match the eventual layout.

Do not show fake data while loading.

## Empty States

Empty states should guide the user toward the next useful action.

Good empty states:

```txt
No projects yet. Create your first project to upload a video.
No generated videos yet. Start processing after uploading a video.
No notifications yet. Updates about uploads and processing will appear here.
```

Empty states should not feel like errors.

They should be calm and helpful.

## Error States

Errors should be safe and useful.

Do not expose backend internals.

Good error messages:

```txt
We could not load your projects. Please try again.
Upload failed. Check the file type and try again.
Your session expired. Please sign in again.
Processing failed. Please try again later.
```

Avoid:

```txt
PrismaClientKnownRequestError...
Internal server error at stack trace...
Database relation failed...
JWT invalid...
```

Do not reveal whether another user’s private project exists.

## Success States

Success states should confirm the result and suggest the next step.

Examples:

```txt
Project created. You can upload a video now.
Video uploaded. Start processing when you are ready.
Processing started. You can leave this page and come back later.
Your summary and reels are ready.
```

Success states should be concise.

## Accessibility

Build accessible UI.

Use:

- Semantic HTML
- Proper labels for inputs
- Keyboard-accessible controls
- Visible focus states
- Sufficient contrast
- Descriptive button text
- Meaningful headings
- ARIA only when needed

Do not remove focus outlines unless replacing them with clear custom focus styles.

Use button elements for actions.

Use links for navigation.

## Keyboard Navigation

Interactive elements should be reachable by keyboard.

Important elements:

```txt
Sidebar links
Header controls
Theme toggle
Form fields
Submit buttons
Upload controls
Video action buttons
Notification actions
```

Focus state should be visible in both dark and light themes.

## Responsive Design

Desktop should feel polished first.

Mobile should remain usable.

Do not overbuild complex mobile navigation early.

Responsive polish has its own later phase.

General guidance:

```txt
Desktop: full sidebar + header
Tablet: compact sidebar or adjusted layout
Mobile: readable stacked layout, sidebar can be simplified later
```

Avoid layouts that break completely on smaller screens.

## Tables and Lists

Use lists for project and notification data unless a table clearly improves readability.

When tables are used:

- Keep columns limited
- Use clear headers
- Keep row actions obvious
- Make mobile behavior readable

Do not create dense enterprise-style tables too early.

## Video Preview Design

Video previews should be visually clear and stable.

For summary videos:

```txt
Use 16:9 preview areas.
```

For reels:

```txt
Use 9:16 vertical preview areas.
```

When no video URL exists yet, show a clear placeholder state.

Do not show broken video players.

Do not autoplay with sound.

## Notification Badge Design

Unread notification count should be subtle but visible.

Avoid exaggerated red alert styling unless there is an error.

Use calm status indication.

Do not fake unread counts.

## Status Timeline Design

Processing can use a simple status timeline later.

Possible steps:

```txt
Queued
Processing
Completed
Failed
```

If detailed steps exist:

```txt
Preparing video
Extracting audio
Transcribing audio
Detecting highlights
Generating summary and reels
Finalizing outputs
```

Only show detailed steps when backend data supports them.

## Content Density

Keep pages focused.

Do not overload a single page with too many panels.

Use progressive disclosure where useful.

For example:

```txt
Project detail page → show core project status first
Generated results → show previews and actions
Advanced metadata → secondary area
```

## Trust and Security Presentation

The app should feel secure through clarity and consistency, not fake badges.

Do not add fake claims like:

```txt
Enterprise-grade security
SOC 2 compliant
Military-grade encryption
AI-safe certified
```

unless true and documented.

Trust should come from:

- Clear upload rules
- Safe error messages
- Predictable auth flows
- Consistent status updates
- No fake data

## Page-Level Design Checklist

Before finishing a page, verify:

```txt
The page has a clear purpose.
The primary action is obvious.
The copy is product-specific.
There is no fake data.
Loading state is safe.
Empty state is helpful.
Error state is safe.
Keyboard navigation works.
Responsive layout does not break.
The page follows AGENTS.md phase scope.
```

## Component-Level Design Checklist

Before finishing a component, verify:

```txt
The component has one clear purpose.
Props are understandable.
It does not contain fake business data.
It handles loading/empty/error when needed.
It renders user-generated text safely.
It works in dark and light mode.
It has accessible labels when interactive.
It does not duplicate another component.
```

## Anti-Slop Visual Checklist

Before completing a frontend phase, verify:

```txt
No fake metrics were added.
No fake charts were added.
No fake testimonials were added.
No fake generated videos were added.
No fake notifications were added.
No fake billing status was added.
No random dashboard widgets were added.
No unrelated decorative sections were added.
No loud gradients or glowing blobs were added.
No generic AI hype copy was added.
No lorem ipsum was added.
```

## Final Design Principle

RepurposePro is a creator productivity tool.

The UI should help users:

```txt
Upload videos
Understand processing status
Recover progress after refresh
Review generated outputs
Take the next useful action
```

When unsure, choose clarity over decoration.
