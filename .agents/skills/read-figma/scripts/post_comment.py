import urllib.request
import json
import os

def get_figma_token():
    try:
        with open('.env', 'r') as f:
            for line in f:
                if line.startswith('FIGMA_TOKEN='):
                    return line.strip().split('=', 1)[1]
    except FileNotFoundError:
        pass
    return os.environ.get('FIGMA_TOKEN')

def post_comment(file_id, node_id, message):
    token = get_figma_token()
    url = f'https://api.figma.com/v1/files/{file_id}/comments'

    data = json.dumps({
        "message": message,
        "client_meta": {
            "node_id": node_id,
            "node_offset": {
                "x": 0,
                "y": 0
            }
        }
    }).encode('utf-8')

    req = urllib.request.Request(url, data=data, method='POST')
    req.add_header('X-Figma-Token', token)
    req.add_header('Content-Type', 'application/json')

    try:
        with urllib.request.urlopen(req) as response:
            res = json.loads(response.read().decode('utf-8'))
            print(f"Success! Posted comment to node {node_id}.")
            return True
    except urllib.error.HTTPError as e:
        print(f"HTTP Error posting comment to {node_id}: {e.code} - {e.read().decode('utf-8')}")
        return False
    except Exception as e:
        print(f"Error posting comment: {e}")
        return False

if __name__ == '__main__':
    file_id = 'PvoxALzl64NZFgpgCnNdPH'
    
    # Node 8:181 is the 'About Us' section
    post_comment(file_id, '8:181', "✅ INTEGRATED BY AGENT: The About Us masonry grid layout and photos have been fully downloaded and coded into the live React application!")
    
    # Node 8:190 is the 'Activities' section
    post_comment(file_id, '8:190', "✅ INTEGRATED BY AGENT: The Sunday Sessions details and Zoom photo have been fully coded into the live React application!")
