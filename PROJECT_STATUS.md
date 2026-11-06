# Project Status & Tracking

This file tracks the progress of the Le Malaga project so that any new agent joining the repository has immediate context on what has been built, what is currently in progress, and what remains to be done.

## 🚧 Current Status
- **Phase:** 100% DYNAMIC CMS WITH REALTIME PRESENCE, AUDITABLE VERSIONING & SYNCHRONIZED CRUD ENGINE LIVE
- **Recent Milestones:**
  - **Live Realtime Admin Presence & Concurrent Editing Alerts (`admin.lemalaga.org`):**
    - Integrated Supabase Realtime Presence WebSockets across the entire admin portal, tracking active admins with zero server overhead.
    - Added live top header status indicator (`🟢 {count} Online` with animated radar dot, avatar stack, and interactive dropdown revealing active admins, their profile photos, and the exact section or page they are currently editing).
    - Added concurrent editing collision alerts in Tab 2 (Public Pages) and Tab 4 (Our Stories) displaying amber alert banners when multiple admins have the same page or carer story open at the same time.
    - Added live navigation indicators on sidebar tabs and page/story selector pills with pulsing badges highlighting where other team members are actively browsing.
    - Configured direct Supabase endpoint routing (`https://ybovhrbnbednnxppofmv.supabase.co`) in `src/lib/supabase.ts` to ensure 100% WebSocket upgrade compatibility.
  - **Complete Content Harmonization & Migration Verified:**
    - Confirmed all public website components are 100% stored in Supabase and live editable:
      - **Header & Footer:** Global logo, navigation items, donate CTA button/destination, contact email, phone, location, cultural acknowledgement, and legal quick links (`site_settings.header_footer`).
      - **Meet the Aiga Team:** All 3 co-founders (Flory, Tasi, Juita) with high-res photos, bios, and callout box (`team_members`).
      - **Carer Stories:** All 10 carer stories (Mel, Barry, Fiapai, Lisa, Sina & Vera, Tania, Chichi, Sapini, Jennifer, Ruby) with 5-step polaroid journey timelines, quotes, and photos (`stories`).
      - **Upcoming Events:** All 4 events (Le Malaga Tag Tournament, Indoor Netball, Carers Workshop, Fiafia Night) plus Next Sunday Session spotlight (`events` and `site_settings.next_sunday_session`).
      - **Carer Resources:** All 5 system guides and reading frameworks (`resources` and `site_settings.resources_reading`).
      - **Community Highlights & Walk Fundraiser:** Recent gatherings and Givealittle walk banner (`community_highlights` and `site_settings.fundraiser_banner`).
    - **Dual-Schema Database Migration Applied (`20261106000003_harmonize_schema_and_version_all_tables.sql`):**
      - Resolved query mismatch between `sort_order` / `display_order`, `is_published` / `is_active`, and `role` / `role_title` by adding bi-directional sync triggers across `team_members`, `stories`, `events`, `community_highlights`, and `resources`.
      - Attached automatic `content_versions` audit triggers to all remaining content tables, enabling point-in-time snapshot history and 1-click restore across the entire portal.
      - Implemented bidirectional Markdown and timeline step parsing in `admin.lemalaga.org`, enabling the WYSIWYG editor to manage full 5-step story journeys.
    - **Footer Quick Links & Top Nav Item Harmonization:**
      - Resolved blank input issue in the Admin Portal by bridging property name differences (`label` vs `title` and `path` vs `url`).
      - All 4 Footer Quick Links (Privacy Policy, Terms of Use, Safeguarding Policy, Complaints Process) and 8 Navigation Links now populate and update live.
    - **SEO, Favicon & Brand Identity Suite Live:**
      - Removed all "Prototype" labels from `index.html` and configured production metadata.
      - Implemented dynamic route-aware `<title>` management across all pages (`Our Stories | Le Malaga`, `About Us | Le Malaga`, etc.).
      - Integrated customizable Favicon upload and dynamic head injector (`link[rel='icon']`).
      - Added full OpenGraph (OG) and Twitter Card tags (`og:title`, `og:description`, `og:image`, `og:url`, `twitter:card`).
      - Created SEO management suite in Tab 1 of `admin.lemalaga.org` allowing editors to customize Site Title, Meta Description, Favicon, Social Share Cards, and Search Keywords directly.
    - **Cross-Domain Image 404 Fix & Migration (`20261106000004_convert_relative_media_to_absolute_urls.sql`):**
      - Fixed cross-domain 404s in the Admin Portal where relative paths (`/images/...`) attempted to resolve to `admin.lemalaga.org` instead of the public assets.
      - Synchronized all 36 public image assets to `admin.lemalaga.org/public/images/`.
      - Built and integrated `resolveMediaUrl()` helper in `admin.lemalaga.org` with automatic fallback to public CDN URLs and graceful `onError` recovery.
      - Migrated all database rows in Supabase to canonical absolute URLs (`https://www.lemalaga.org/images/...`).
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
