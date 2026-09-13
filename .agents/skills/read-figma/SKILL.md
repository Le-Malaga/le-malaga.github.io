---
name: read-figma
description: >-
  Use this skill to read and fetch data from the LeMalaga Figma board. It provides a python script to pull document structure, text, and styles via the Figma API.
---

# Read Figma Board Skill

This skill allows you to programmatically read the LeMalaga Figma board.

## How to use

When you need to read the Figma board, execute the Python script located at `scripts/read_figma.py` inside this skill's directory. 

```bash
# Run this from the root of the project where the .env file is located
python .agents/skills/read-figma/scripts/read_figma.py
```

The script will automatically:
1. Parse the `FIGMA_TOKEN` from the `.env` file in the project root.
2. Connect to the Figma API for the LeMalaga board (File ID: `PvoxALzl64NZFgpgCnNdPH`).
3. Fetch the document structure and print out the top-level nodes and text content to help you understand the design.

If you need specific nodes, you can modify the Python script to fetch them or traverse the JSON response more deeply!
