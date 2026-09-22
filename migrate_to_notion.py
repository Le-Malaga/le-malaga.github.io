import urllib.request
import json
import os

def get_token(key):
    try:
        with open('.env', 'r') as f:
            for line in f:
                if line.startswith(f'{key}='):
                    return line.strip().split('=', 1)[1]
    except:
        pass
    return os.environ.get(key)

NOTION_TOKEN = get_token('NOTION_TOKEN')
DB_ID = '3dfa5ee478c3805b85a2f574f46eda83'

def create_notion_task(title, content):
    url = "https://api.notion.com/v1/pages"
    
    # Split content into smaller chunks if it's too long for one paragraph block
    # Notion max size per text block is 2000 chars, so we chunk by paragraph
    paragraphs = content.split('\n')
    blocks = []
    
    for p in paragraphs:
        p = p.strip()
        if not p:
            continue
        # If a single paragraph is still > 2000, we'll chop it (lazy handling, but should be fine)
        if len(p) > 2000:
            p = p[:1990] + "..."
            
        blocks.append({
            "object": "block",
            "type": "paragraph",
            "paragraph": {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": p
                        }
                    }
                ]
            }
        })
        
    data = {
        "parent": { "database_id": DB_ID },
        "properties": {
            "Task name": {
                "title": [
                    {
                        "text": {
                            "content": title[:200]  # Ensure title isn't too long
                        }
                    }
                ]
            }
        },
        "children": blocks
    }
    
    req = urllib.request.Request(url, method='POST')
    req.add_header('Authorization', f'Bearer {NOTION_TOKEN}')
    req.add_header('Notion-Version', '2022-06-28')
    req.add_header('Content-Type', 'application/json')
    
    try:
        with urllib.request.urlopen(req, data=json.dumps(data).encode('utf-8')) as response:
            res = json.loads(response.read().decode('utf-8'))
            print(f"Created Notion Task: {title}")
    except Exception as e:
        print(f"Failed to create task '{title}': {e}")

# Parse figma_texts.txt
with open('figma_texts.txt', 'r', encoding='utf-8') as f:
    raw = f.read()

nodes = raw.split('---\nNode: ')
for node in nodes:
    if not node.strip():
        continue
    
    # Extract title and text
    lines = node.split('\n', 1)
    if len(lines) < 2:
        continue
        
    header = lines[0]
    content = lines[1].strip()
    
    if len(content) < 50:
        continue # Skip very small snippets
        
    # Title is everything before " (ID:"
    title = header.split(' (ID:')[0]
    
    # We will prepend "MIGRATED FROM FIGMA: " so the user knows
    create_notion_task(f"[Figma] {title}", content)

print("Migration Complete!")
