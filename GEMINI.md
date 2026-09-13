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
