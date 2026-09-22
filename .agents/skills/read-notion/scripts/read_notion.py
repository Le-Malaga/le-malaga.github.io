import urllib.request
import json
import os

def get_notion_token():
    try:
        with open('.env', 'r') as f:
            for line in f:
                if line.startswith('NOTION_TOKEN='):
                    return line.strip().split('=', 1)[1]
    except FileNotFoundError:
        pass
    return os.environ.get('NOTION_TOKEN')

def read_database(database_id):
    token = get_notion_token()
    url = f'https://api.notion.com/v1/databases/{database_id}/query'
    req = urllib.request.Request(url, method='POST')
    req.add_header('Authorization', f'Bearer {token}')
    req.add_header('Notion-Version', '2022-06-28')
    req.add_header('Content-Type', 'application/json')
    
    with urllib.request.urlopen(req, data=b"{}") as response:
        return json.loads(response.read().decode('utf-8'))

def read_page_blocks(page_id):
    token = get_notion_token()
    url = f'https://api.notion.com/v1/blocks/{page_id}/children'
    req = urllib.request.Request(url, method='GET')
    req.add_header('Authorization', f'Bearer {token}')
    req.add_header('Notion-Version', '2022-06-28')
    
    try:
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode('utf-8'))
    except Exception as e:
        print(f"Error reading blocks for page {page_id}: {e}")
        return None

if __name__ == '__main__':
    db_id = '3dfa5ee4-78c3-805b-85a2-f574f46eda83'
    print(f"Reading Database {db_id}...\n")
    
    data = read_database(db_id)
    for row in data.get('results', []):
        page_id = row['id']
        
        # In the Tasks tracker, the title column is usually 'Task name' or 'Name'
        props = row.get('properties', {})
        title = "Untitled"
        for key, prop in props.items():
            if prop['type'] == 'title':
                title_arr = prop.get('title', [])
                if title_arr:
                    title = title_arr[0].get('plain_text', 'Untitled')
        
        print(f"=== TASK: {title} ===")
        
        blocks = read_page_blocks(page_id)
        
        # Check properties for files or URLs
        print("  [PROPERTIES]:")
        for key, prop in props.items():
            if prop['type'] == 'files':
                files = prop.get('files', [])
                for f in files:
                    fname = f.get('name', 'Unknown')
                    furl = f.get('file', {}).get('url') or f.get('external', {}).get('url')
                    print(f"    - FILE ({key}): {fname} -> {furl}")
            elif prop['type'] == 'url':
                url = prop.get('url')
                if url:
                    print(f"    - URL ({key}): {url}")
                    
        print("  [PAGE CONTENT]:")
        if blocks:
            for block in blocks.get('results', []):
                btype = block.get('type')
                if btype == 'paragraph':
                    text_arr = block.get('paragraph', {}).get('rich_text', [])
                    text = "".join([t.get('plain_text', '') for t in text_arr])
                    if text.strip() and text != "Provide an overview of the task and related details.":
                        print(f"    [TEXT]: {text}")
                elif btype == 'image':
                    img_url = block.get('image', {}).get('file', {}).get('url')
                    if not img_url:
                        img_url = block.get('image', {}).get('external', {}).get('url')
                    print(f"    [IMAGE]: {img_url}")
                elif btype in ['pdf', 'file', 'video']:
                    file_info = block.get(btype, {})
                    furl = file_info.get('file', {}).get('url') or file_info.get('external', {}).get('url')
                    if furl:
                        print(f"    [{btype.upper()}]: {furl}")
        print("\n")
