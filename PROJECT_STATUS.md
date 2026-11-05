# Project Status & Tracking

This file tracks the progress of the Le Malaga project so that any new agent joining the repository has immediate context on what has been built, what is currently in progress, and what remains to be done.

## 🚧 Current Status
- **Phase:** 100% DYNAMIC CMS & FULL-WIDTH ADMIN PORTAL WITH WYSIWYG PREVIEW LIVE
- **Recent Milestones:**
  - **100% Dynamic CMS Migration Completed:**
    - Seeded all remaining hardcoded public website content into Supabase project `ybovhrbnbednnxppofmv` via remote SQL migration `20261106000001_seed_all_hardcoded_content.sql`.
    - Bound all public pages (`Home`, `About`, `Support`, `SundaySessions`, `Resources`, `GetInvolved`, and `Layout` header/footer) to live Supabase CMS data with graceful fallback defaults.
    - Public pages dynamically consume `homeFeatures`, `homeActionCards`, `supportCards`, `sundayHighlights`, `resourcesReading`, `getInvolvedCards`, and footer metadata (`contactPhone`, `contactLocation`, `weAcknowledge`, `quickLinks`).
  - **Admin Portal Full-Width Dashboard & WYSIWYG Markdown Editor (`admin.lemalaga.org`):**
    - Expanded dashboard container from restrictive `max-w-7xl` to a responsive, spacious layout (`w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8`) with 2-column sidebar and 10-column workspace.
    - Built and integrated `MarkdownEditor` component featuring a rich formatting toolbar (Bold, Italic, H2, H3, Bullet list, Numbered list, Blockquote, Link, Code, Divider), live side-by-side split view, and Pasifika-styled typography preview.
    - Added structured visual card management sections for Home Features, Home Action Cards (with WebP upload), Support Services ("How We Can Help"), Sunday Session Callouts ("Open Talanoa" & "Cameras Optional"), Recommended Reading, Movement Cards, and Footer Quick Links.
  - **Automatic Content Versioning & Audit Trail (`content_versions`):**
    - Created `public.content_versions` with automated PostgreSQL triggers (`trg_version_site_pages`, `trg_version_site_settings`) that capture full JSON point-in-time snapshots whenever content is edited, including timestamp and admin email.
    - Added "Revision History" modal to the Admin Portal allowing editors to view past changes and restore older versions with 1 click.
  - **Admin User Profile & Google Photo Sync:**
    - Added `avatar_url` to `admin_users` table with self-update RLS policy.
    - Automatically syncs Google display name and Google profile picture upon login, and provides an "Edit Profile" modal to customize display names and upload custom WebP avatars.
  - **Smart YouTube & Vimeo Embed Normalizer:**
    - Integrated automatic URL parser that converts standard YouTube links (`youtube.com/watch?v=...`, `youtu.be/...`, or Shorts) into privacy-friendly embed links (`youtube-nocookie.com/embed/...`) with live preview in the Admin Portal and responsive 16:9 playback on public pages.
  - **Google OAuth Login Activated:** Wired Google Identity Client ID (`85563814161-b7qo7n2t89jsf921f531qn7hqk35emh0.apps.googleusercontent.com`) into `admin.lemalaga.org` with Supabase OAuth callback configured to `https://admin.lemalaga.org`.
  - **Supabase Cloudflare Proxy:** Operating on `https://api.lemalaga.org` proxying to `ybovhrbnbednnxppofmv.supabase.co`.
  - Authored and committed `CARER_PORTAL_SPECS.md` and interactive prototype `prototype/index.html` detailing the full Carer Community & Patient Safety Portal architecture.
  - Configured custom domain (`www.lemalaga.org`) via `public/CNAME` and set GitHub Pages build source to GitHub Actions workflow.

## 🚧 In Progress
- Verification of live edits across all pages on `https://admin.lemalaga.org` reflected instantly on `https://www.lemalaga.org`.

## 📝 To Do
- Phase 2: Build the Carer Community Portal (`portal.lemalaga.org` or `/portal`) for Carer Lived-Experience Profiles, Village Feed, Collaborative Resource Wiki, Rest Home Reviews, and Patient Geofence Safety Tracker (Note: Hold until user requests).
