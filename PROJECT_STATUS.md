# Project Status & Tracking

This file tracks the progress of the Le Malaga project so that any new agent joining the repository has immediate context on what has been built, what is currently in progress, and what remains to be done.

## 🚧 Current Status
- **Phase:** LIVE SUPABASE PUBLIC CMS & INVITE-ONLY ADMIN PORTAL DEPLOYED
- **Recent Milestones:**
  - **Supabase Database & Storage (`ybovhrbnbednnxppofmv`, Oceania Sydney `ap-southeast-2`):**
    - Created and pushed SQL migrations (`20261102000001_public_cms_and_admin_auth.sql` & `20261102000002_seed_public_cms_content.sql`) establishing `admin_users` (invite-only Google OAuth allowlist seeded with `elijahmondero@gmail.com` as `super_admin`), `site_settings`, `site_pages`, `team_members`, `stories`, `events`, `community_highlights`, `resources`, and the `site-media` Storage bucket with strict Row Level Security (RLS).
  - **Separate Admin & Public Website CMS Repository (`https://github.com/Le-Malaga/admin.lemalaga.org`):**
    - Built and deployed the standalone Admin Portal (`admin.lemalaga.org` / `https://www.lemalaga.org/admin.lemalaga.org/`) with Invite-Only Google OAuth login, 7 management tabs (Global Header/Logo/Footer, All 12 Public Pages with movable/resizable media blocks, Meet the Aiga Team Profiles, Carer Stories with Public/Portal/Draft scope, Events & Sunday Sessions & Walk Fundraiser Banner, Carer Resources, and Super Admin Invite-Only Users Manager), and automatic client-side `<canvas>` WebP image compression/upload to `site-media`.
    - Configured `.github/workflows/deploy.yml` in `Le-Malaga/admin.lemalaga.org` (with GitHub Actions secrets set via `gh secret set`) to automatically run `supabase db push` database migrations and deploy Supabase Edge Functions (`supabase/functions/`) on push, followed by deploying the Admin SPA to GitHub Pages.
  - **Public Website (`Le-Malaga/le-malaga.github.io` / `www.lemalaga.org`) Connected to Supabase:**
    - Added `src/lib/supabase.ts` and `src/context/CmsContext.tsx` so all 12 public pages (`Home`, `About`, `Support`, `Resources`, `SundaySessions`, `Events`, `Stories`, `StoryDetail`, `GetInvolved`, and `GenericPage` routes `/start`, `/privacy`, `/terms`, `/safeguarding`, `/complaints`) dynamically render live content and movable/resizable media blocks from Supabase while preserving instant static fallbacks and original Tailwind styling.
  - Authored and committed `CARER_PORTAL_SPECS.md` and interactive prototype `prototype/index.html` detailing the full Carer Community & Patient Safety Portal architecture.
  - Configured custom domain (`www.lemalaga.org`) via `public/CNAME` and set GitHub Pages build source to GitHub Actions workflow.

## 🚧 In Progress
- Configuring Google OAuth Client ID & Secret in the Supabase Dashboard (`Authentication -> Providers -> Google`) and DNS `CNAME` record for `admin.lemalaga.org` -> `le-malaga.github.io`.

## 📝 To Do
- Phase 2: Build the Carer Community Portal (`portal.lemalaga.org` or `/portal`) for Carer Lived-Experience Profiles, Village Feed, Collaborative Resource Wiki, Rest Home Reviews, and Patient Geofence Safety Tracker.
