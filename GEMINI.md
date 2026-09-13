# Le Malaga Repo Instructions

## Security & Secrets
- **NEVER commit secrets, API keys, or `.env` files to this repository.**
- This repository is public and is deployed to GitHub Pages.
- Any time a new token or key is needed (like the Figma Personal Access Token), it must be placed exclusively in a `.env` file, and that file MUST be listed in `.gitignore`.
- If you run any git commands (`git add`, `git commit`), ALWAYS double check `git status` or the diff to ensure no `.env` files or hardcoded credentials are included.

## Figma Integration Context
- We have a custom skill located in `.agents/skills/read-figma/` which provides Python scripts to interact with the LeMalaga Figma board.
- The `FIGMA_TOKEN` is securely stored in `.env`.
- We use these scripts to pull text, structures, and download high-quality asset nodes from Figma directly into `public/images/`.
- **Learning:** Do NOT try to manually crop screenshots of Figma mockups. It results in capturing unwanted UI elements or drop shadows. Always use the Figma API (`download_images.py`) to download the exact, clean image nodes.

## React & GitHub Pages Architecture
- **Routing:** The user strongly dislikes `HashRouter` (`/#/` URLs). We use standard `BrowserRouter`. 
- **GitHub Pages SPA Hack:** Because GitHub Pages does not support native SPA routing, our `.github/workflows/deploy.yml` pipeline is configured to automatically copy `dist/index.html` to `dist/404.html` so that direct links and page refreshes work flawlessly.

## Design & UI Guidelines
- **Realistic Layouts:** The user HATES generic developer "Placeholder" or "Simulated Page" screens. If you add a route, you MUST build out a beautiful, realistic layout using Tailwind CSS. 
- **Brand Colors:** Our exact Tailwind theme colors are Orange (`#d95a2b`), Dark Green (`#3e4a28`), and Beige Background (`#f3eedf` and `#faf9f4`).
- **Typography:** We use the `Oswald` Google Font for all headings (styled heavily with uppercase and bold/extrabold weights) to match the original Figma design language.
