# Product Design Direction

RepurposePro is a premium AI video workspace for creators.

The product helps users turn long-form videos into:

- A 7–10 minute summary video
- Multiple short vertical reels
- Captions and downloadable outputs later

The interface should feel like a real creator tool, not a generic AI dashboard.

The design should feel like:

```txt
Linear-level interface clarity
+ CapCut-style creator utility
+ modern AI workflow polish
```

The frontend should feel:

- Clean
- Fast
- Focused
- Creator-friendly
- Video-first
- Professional
- Dark-first
- Useful, not decorative

## Core Design Principle

Every UI element should support the creator workflow.

Before adding any component, ask:

```txt
Does this help the user upload, process, preview, manage, or download videos?
```

If the answer is no, do not add it.

RepurposePro should not feel like an AI-generated template. It should feel like a real product creators would use every day.

## Visual Identity

RepurposePro should use a dark-first SaaS workspace style.

The design should prioritize:

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

## Theme Direction

Default theme:

```txt
dark
```

Supported themes:

```txt
dark
light
system
```

Dark mode should be the primary experience.

Light mode should be supported but does not need to be more visually prominent than dark mode.

Use `next-themes` for theme switching.

Use semantic CSS variables for colors.

Do not hard-code random colors throughout components.

## Color System

Use a small, controlled color palette.

Recommended direction:

```txt
Background: near-black / dark navy
Surface: dark gray
Surface elevated: slightly lighter dark gray
Border: subtle gray
Primary accent: violet or cyan
Success: green
Warning: amber
Error: red
Text primary: near-white
Text secondary: soft gray
Text muted: muted gray
```

Use one main primary accent consistently.

Recommended primary accent:

```txt
violet
```

Acceptable alternative:

```txt
cyan
```

Do not use many competing accent colors.

### Good Accent Usage

Use accent color for:

```txt
Primary button
Active sidebar item
Progress indicator
Selected tab
Upload focus state
Important call-to-action
```

### Bad Accent Usage

Avoid:

```txt
Every card has a different gradient
Every section glows
Every icon has a random color
Buttons use inconsistent colors
```

## Semantic Color Tokens

Use semantic tokens instead of raw color classes where practical.

Recommended tokens:

```txt
background
foreground
card
card-foreground
popover
popover-foreground
primary
primary-foreground
secondary
secondary-foreground
muted
muted-foreground
accent
accent-foreground
border
input
ring
destructive
destructive-foreground
success
success-foreground
warning
warning-foreground
```

Status colors must always include readable text labels.

Do not rely on color alone to communicate state.

## Typography

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

Import fonts through:

```txt
next/font/google
```

Do not load Google Fonts through external `<link>` tags unless there is a strong reason.

### Font Usage

Recommended usage:

```txt
Headings: Geist Sans, semibold
Body text: Geist Sans, regular
Muted text: Geist Sans, regular
Buttons: Geist Sans, medium
Labels: Geist Sans, medium
```

Avoid:

```txt
Too many font families
Decorative display fonts
Overly playful fonts
Random font changes between pages
All-caps everywhere
Marketing-style giant headings inside app pages
```

## Layout System

The app should use a real product layout.

Final dashboard layout:

```txt
Sidebar navigation
Top bar/header
Main content area
Optional right-side details panel later
```

Recommended structure:

```txt
AppShell
├── Sidebar
├── Header
└── MainContent
```

Avoid:

```txt
Unaligned cards
Random margins
Floating sections without structure
Huge empty hero sections inside the app
Overly centered dashboard content
```

## Spacing

Use generous but consistent spacing.

Recommended spacing:

```txt
Page padding: 24px to 32px
Card padding: 20px to 24px
Section gap: 24px
Small element gap: 8px to 12px
Form field gap: 16px
```

Do not cram UI elements together.

Do not create huge empty gaps that make the app feel unfinished.

## Border Radius

Use a consistent radius system.

Recommended:

```txt
Small elements: rounded-md
Inputs/buttons: rounded-lg
Cards/panels: rounded-xl or rounded-2xl
Large containers: rounded-2xl
```

Avoid mixing too many radius styles on the same page.

## Shadows and Borders

Prefer subtle borders over heavy shadows.

Use:

```txt
Subtle border
Soft background contrast
Occasional soft shadow for elevated surfaces
```

Avoid:

```txt
Huge drop shadows
Neon glows everywhere
Unclear card boundaries
```

## Component Style

Use shadcn/ui-style components.

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

Components should be consistent across the app.

## Button Design

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

Button labels should be action-oriented and clear.

Good:

```txt
Create Project
Upload Video
Start Processing
Download Reel
Mark All as Read
```

Bad:

```txt
Continue
Submit
Do Magic
AI It
```

## Card Design

Cards should be functional, not decorative.

Every card must have a purpose:

```txt
Project card
Generated video card
Upload card
Processing status card
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

## Icon Style

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
Search
Folder
Clock
```

Avoid:

```txt
Sparkles everywhere
Random magic wand icons on every AI feature
Multiple icon styles
Emoji used as primary UI icons
```

## Motion and Animation

Use motion sparingly.

Good animations:

```txt
Button hover
Dropdown open
Dialog transition
Upload progress
Toast entrance
Card hover lift
Skeleton loading
```

Avoid:

```txt
Constant moving backgrounds
Random floating objects
Excessive page transitions
Bouncy animations everywhere
```

Animations should make the product feel smoother, not childish.

## Copywriting Style

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

## AI Feature Copy

Do not over-market the AI.

Use practical labels:

```txt
Generate Summary
Generate Reels
Detect Highlights
Create Captions
Process Video
```

Avoid vague labels:

```txt
Unleash AI Magic
Supercharge Creativity
Make Viral Content Instantly
```

The product should feel trustworthy, not gimmicky.

## Page Design Rules

Every page should have:

```txt
Clear title
Short description
Primary action
Relevant content
Loading state
Empty state
Error state
```

Do not leave pages blank while loading.

Do not use fake data unless it is clearly marked as mock during early phases.

## Root / Entry Page

The root page should be simple.

It may include:

```txt
Product name
Short value statement
Sign in button
Go to dashboard button
```

Do not build a full marketing landing page unless explicitly requested.

Avoid fake testimonials, fake metrics, and hype copy.

## Auth Pages

Login and sign-up pages should be simple and trustworthy.

Include:

```txt
Product name
Short value statement
Email/password fields or Better Auth-supported flow
Clear validation errors
Loading state
Link between login and signup
```

Do not over-design auth pages with excessive marketing content.

## Dashboard Page

The dashboard should answer:

```txt
What projects exist?
What is processing?
What is ready?
What should the user do next?
```

Recommended sections:

```txt
Recent projects
Processing jobs
Generated videos ready for review
Upload new video action
Notifications or activity
Basic usage stats only if real
```

Do not show fake vanity metrics.

Bad metrics:

```txt
AI Power Score
Productivity Boost 99%
Magic Creativity Index
```

Good metrics:

```txt
Projects created
Videos processed
Reels generated
Jobs in progress
Failed jobs needing attention
```

Only show metrics if the backend provides them or they are computed from real fetched data.

## Projects Page

The projects page should include:

```txt
Project cards or clean list
Status filters later
Search later if practical
Create project button
Loading state
Empty state
Error state
```

Project cards should show:

```txt
Project title
Description if available
Status badge
Upload status
Created date
Primary action
```

## Project Detail Page

The project detail page should include:

```txt
Project information
Original video/upload status
Processing jobs
Generated summary
Generated reels
Relevant activity if useful
```

This page should be the main workspace for a single video project.

## Upload Page / Upload Section

The upload experience is one of the most important parts of the app.

It should feel reliable and focused.

Required elements:

```txt
Large drag-and-drop upload area
Manual file picker
Accepted file formats
Maximum file size
Selected file name
Upload progress if practical
Clear success message
Clear error message
Start processing CTA after upload
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

Upload field name:

```txt
video
```

Avoid:

```txt
Tiny file input
No progress feedback
No file validation message
No explanation of supported formats
```

## Processing Status UI

Processing should feel transparent.

Show:

```txt
Current step
Progress bar
Job status badge
Started time
Completed time if available
Clear error message if failed
```

Possible steps:

```txt
Queued
Sending video to AI service
Extracting audio
Transcribing audio
Detecting highlights
Generating summary
Generating reels
Rendering captions
Completed
Failed
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

## Generated Video Results UI

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

For reels, display them in a grid.

For the summary video, give it more space than reels.

Do not hide creator-facing outputs in a plain table unless it is an admin page.

## Notifications UI

Notifications should be useful and restrained.

Notification UI should include:

```txt
Notification bell
Unread count
Dropdown or page
Read/unread state
Mark as read
Mark all as read
```

Notification messages should be direct:

```txt
Your video was uploaded successfully.
Your summary and reels are ready.
Processing failed. Please try again.
```

Avoid annoying notifications for every minor event.

## Settings UI

Settings should include:

```txt
Theme toggle
Profile/account information if available
Basic preferences later
```

Do not add billing settings unless explicitly requested.

Do not add social publishing settings before social publishing exists.

## Admin UI

Admin UI comes later.

Do not build admin UI before the creator workflow works.

If admin pages are added later, they should require:

```txt
Authenticated session
role === "admin"
```

Admin pages may use tables and dense operational layouts.

Creator-facing pages should prefer cards and visual previews.

## Empty States

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

Avoid generic empty text:

```txt
No data found.
Nothing here.
```

## Loading States

Use skeletons and progress indicators.

Use:

```txt
Skeleton cards
Loading spinner only for small actions
Progress bars for uploads and processing
Disabled buttons during submission
```

Avoid full-page spinners unless absolutely necessary.

Do not leave blank pages while loading.

## Error States

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

## Forms

Forms should be simple and validated.

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

## Tables

Use tables for admin and management views only.

Good table use:

```txt
Admin users
Admin jobs
Admin projects
Notifications history
```

Bad table use:

```txt
Generated videos for creators
Upload workflow
Main project dashboard
```

Creator-facing pages should prefer cards and visual previews.

## Status Badges

Use clear text labels.

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

Use both color and text.

Do not communicate status with color alone.

## Accessibility

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

## Responsive Design

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

## Design Quality Checklist

Before finishing any page, verify:

```txt
The page has a clear purpose.
The main action is obvious.
The layout is aligned.
Spacing is consistent.
Cards use the same style.
Buttons follow hierarchy.
Text is concise.
Loading state exists.
Empty state exists.
Error state exists.
Mobile layout is acceptable.
Dark mode looks polished.
No fake data appears unless clearly marked as mock.
No generic AI marketing copy is used.
```

## Anti-Slop Checklist

Do not include:

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
Meaningless AI copy
```

## Final Design Principle

RepurposePro should feel like a focused production tool.

Prioritize:

```txt
Workflow clarity
Video previews
Processing transparency
Clean design
Consistent components
Real product usefulness
```
