import urllib.request
import json
import os
import time

def get_token(key):
    try:
        with open('.env', 'r') as f:
            for line in f:
                if line.startswith(f'{key}='):
                    return line.strip().split('=', 1)[1]
    except:
        pass
    return os.environ.get(key)

FIGMA_TOKEN = get_token('FIGMA_TOKEN')
FILE_KEY = 'PvoxALzl64NZFgpgCnNdPH'

with open('figma_backup.json', 'r') as f:
    data = json.load(f)

def extract_images(node):
    results = set()
    if 'fills' in node:
        for fill in node['fills']:
            if fill.get('type') == 'IMAGE' and 'imageRef' in fill:
                results.add((node.get('name', 'unknown'), node.get('id')))
    if 'children' in node:
        for child in node['children']:
            results.update(extract_images(child))
    return results

images = extract_images(data['document'])
ids = ",".join([node_id for name, node_id in images])

print(f"Requesting image URLs for {len(images)} images...")
url = f'https://api.figma.com/v1/images/{FILE_KEY}?ids={ids}&format=png'
req = urllib.request.Request(url)
req.add_header('X-Figma-Token', FIGMA_TOKEN)

try:
    with urllib.request.urlopen(req) as response:
        res_data = json.loads(response.read().decode('utf-8'))
        
    os.makedirs('public/images', exist_ok=True)
    
    # Create mapping of id to name
    id_to_name = {node_id: name for name, node_id in images}
    
    for node_id, img_url in res_data.get('images', {}).items():
        if img_url:
            name = id_to_name[node_id].replace(' ', '_').replace('/', '_')
            filename = f"public/images/{name}.png"
            print(f"Downloading {filename}...")
            urllib.request.urlretrieve(img_url, filename)
            time.sleep(0.2) # Small delay to be polite
            
    print("All images downloaded successfully!")
except Exception as e:
    print("Error:", e)
