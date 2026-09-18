# Le Malaga Repo Instructions

## Security & Secrets
- **NEVER commit secrets, API keys, or `.env` files to this repository.**
- This repository is public and is deployed to GitHub Pages.
- Any time a new token or key is needed (like the Figma Personal Access Token), it must be placed exclusively in a `.env` file, and that file MUST be listed in `.gitignore`.
- If you run any git commands (`git add`, `git commit`), ALWAYS double check `git status` or the diff to ensure no `.env` files or hardcoded credentials are included.

## Content Management (Notion & Figma)
- **Notion CMS (Primary):** Due to strict rate limits on the free Figma API, we use a Notion Database as our Headless CMS. We have a custom skill in `.agents/skills/read-notion/` to automatically extract the latest text and images from the team's Notion board. The `NOTION_TOKEN` is securely stored in `.env`.
- **Figma Assets (Secondary):** We still maintain the `.agents/skills/read-figma/` skill to download high-quality asset nodes from Figma directly into `public/images/`. The `FIGMA_TOKEN` is also in `.env`.
- **Learning:** Do NOT try to manually crop screenshots of Figma mockups. Always use the Figma API (`download_images.py`) to download the exact, clean image nodes.

## React & GitHub Pages Architecture
- **Routing:** The user strongly dislikes `HashRouter` (`/#/` URLs). We use standard `BrowserRouter`. 
- **GitHub Pages SPA Hack:** Because GitHub Pages does not support native SPA routing, our `.github/workflows/deploy.yml` pipeline is configured to automatically copy `dist/index.html` to `dist/404.html` so that direct links and page refreshes work flawlessly.

## Design & UI Guidelines
- **Realistic Layouts:** The user HATES generic developer "Placeholder" or "Simulated Page" screens. If you add a route, you MUST build out a beautiful, realistic layout using Tailwind CSS. 
- **Brand Colors:** Our exact Tailwind theme colors are Orange (`#d95a2b`), Dark Green (`#3e4a28`), and Beige Background (`#f3eedf` and `#faf9f4`).
- **Typography:** We use the `Oswald` Google Font for all headings (styled heavily with uppercase and bold/extrabold weights) to match the original Figma design language.

## Deployment & CI/CD Workflow
- **Local Testing:** ALWAYS run local builds (`npm run build`) and perform testing before pushing any code. Never push blindly.
- **Pipeline Verification:** After pushing to GitHub, you MUST monitor the GitHub Actions deployment pipeline to ensure it builds successfully.
- **Proactive Debugging:** If the pipeline fails, you are expected to proactively read the logs, debug the failure, commit a fix, and verify the pipeline again until it succeeds.

## Project State Tracking
- **State File:** We maintain a `PROJECT_STATUS.md` file at the root of the repository. 
- **Context Gathering:** Any time you start a new session, you MUST read `PROJECT_STATUS.md` to understand what has already been built and what is currently in progress. 
- **Updating State:** Whenever you complete a significant milestone or feature, you are required to update `PROJECT_STATUS.md` with your accomplishments so the next agent has up-to-date context.
