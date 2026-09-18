import urllib.request
import json
import os
from PIL import Image
from io import BytesIO

def get_figma_token():
    try:
        with open('.env', 'r') as f:
            for line in f:
                if line.startswith('FIGMA_TOKEN='):
                    return line.strip().split('=', 1)[1]
    except FileNotFoundError:
        pass
    return os.environ.get('FIGMA_TOKEN')

def download_images():
    token = get_figma_token()
    file_id = 'PvoxALzl64NZFgpgCnNdPH'
    
    # The IDs of the nodes with images that we found
    nodes = {
        '50:69': 'flory1',
        '50:70': 'flory2',
        '50:77': 'tasi1',
        '50:81': 'tasi2',
        '52:68': 'juita'
    }
    
    ids_str = ','.join(nodes.keys())
    url = f'https://api.figma.com/v1/images/{file_id}?ids={ids_str}&format=jpg'

    req = urllib.request.Request(url)
    req.add_header('X-Figma-Token', token)

    try:
        print("Requesting image URLs from Figma...")
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode('utf-8'))
            images = data.get('images', {})
            
            for node_id, image_url in images.items():
                if not image_url:
                    print(f"Node {node_id} has no image URL.")
                    continue
                    
                filename = nodes[node_id] + '.jpg'
                filepath = os.path.join('public', 'images', filename)
                
                print(f"Downloading {filename}...")
                urllib.request.urlretrieve(image_url, filepath)
                
                # Check dimensions
                with Image.open(filepath) as img:
                    width, height = img.size
                    ratio = width / height
                    print(f"  -> Saved {filename}. Dimensions: {width}x{height} (Aspect ratio: {ratio:.2f})")
                    
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    download_images()
