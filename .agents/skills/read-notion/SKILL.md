---
name: read-notion
description: Read and extract text, tasks, and images from the Le Malaga Notion CMS database.
---

# Notion CMS Skill

This skill allows the agent to fetch the latest website copy and images directly from the team's Notion Database. Since the Figma API proved too restrictive (429 Rate Limits), the team migrated content management to Notion.

## Setup & Credentials
The Notion API requires a token, which is securely stored as `NOTION_TOKEN` inside the `.env` file at the root of the repository. **Never commit the `.env` file to git.**

The target Notion database is the "LeMalaga Website Tasks" board. The Database ID is hardcoded in the scripts (ID: `3dfa5ee4-78c3-805b-85a2-f574f46eda83`).

## Available Scripts

### `scripts/read_notion.py`
This script connects to the Notion API, fetches all tasks currently in the database, and extracts both the text content (paragraphs) and any images embedded within those tasks.

**Usage:**
```bash
python .agents/skills/read-notion/scripts/read_notion.py
```

## Agent Instructions
Whenever the user asks you to "check Notion", "sync Notion", or "pull the latest text":
1. Run `read_notion.py` to fetch the latest content.
2. Review the output to see what text or images the team has added.
3. If new images are present, you may need to download them locally to `/public/images/` using standard curl or python requests.
4. Integrate the new text/images into the relevant React components.
