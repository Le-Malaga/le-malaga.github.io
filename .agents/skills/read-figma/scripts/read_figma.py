import urllib.request
import json
import os

# Parse .env file manually so we don't need python-dotenv
def get_figma_token():
    try:
        with open('.env', 'r') as f:
            for line in f:
                if line.startswith('FIGMA_TOKEN='):
                    return line.strip().split('=', 1)[1]
    except FileNotFoundError:
        pass
    return os.environ.get('FIGMA_TOKEN')

def read_figma():
    token = get_figma_token()
    if not token:
        print("Error: FIGMA_TOKEN not found in .env file or environment variables.")
        return

    # File ID from the board URL provided
    file_id = 'PvoxALzl64NZFgpgCnNdPH'
    url = f'https://api.figma.com/v1/files/{file_id}'

    req = urllib.request.Request(url)
    req.add_header('X-Figma-Token', token)

    try:
        print(f"Fetching Figma data for file {file_id}...")
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode('utf-8'))
            print("Successfully fetched data!")
            
            # Print a quick summary of the document
            doc = data.get('document', {})
            name = data.get('name', 'Unknown')
            print(f"Board Name: {name}")
            
            # Simple recursive function to extract text
            def extract_text(node, depth=0):
                node_type = node.get('type')
                node_name = node.get('name', '')
                
                if node_type == 'TEXT':
                    text = node.get('characters', '').strip()
                    if text:
                        print("  " * depth + f"- TEXT ({node_name}): {text}")
                else:
                    # Check for images in fills
                    has_image = False
                    for fill in node.get('fills', []):
                        if fill.get('type') == 'IMAGE':
                            has_image = True
                            image_ref = fill.get('imageRef', 'unknown')
                            print("  " * depth + f"- IMAGE FILL in {node_type} ({node_name}): ref={image_ref} id={node.get('id')}")
                            
                    if node_type in ['FRAME', 'SECTION', 'CANVAS', 'GROUP', 'COMPONENT', 'RECTANGLE', 'VECTOR'] and not has_image:
                        print("  " * depth + f"[{node_type}] {node_name} id={node.get('id')}")
                
                for child in node.get('children', []):
                    extract_text(child, depth + 1)
            
            print("\n--- Document Structure & Text ---")
            extract_text(doc)

    except Exception as e:
        print(f"Failed to fetch Figma data: {e}")

if __name__ == '__main__':
    read_figma()
