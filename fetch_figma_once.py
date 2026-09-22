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

FIGMA_TOKEN = get_token('FIGMA_TOKEN')
FILE_KEY = 'PvoxALzl64NZFgpgCnNdPH'

print("Attempting to fetch Figma file...")
url = f'https://api.figma.com/v1/files/{FILE_KEY}'
req = urllib.request.Request(url)
req.add_header('X-Figma-Token', FIGMA_TOKEN)

try:
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode('utf-8'))
        with open('figma_backup.json', 'w') as f:
            json.dump(data, f)
        print("SUCCESS! Saved figma_backup.json locally. We are safe from rate limits.")
except urllib.error.HTTPError as e:
    print(f"HTTP Error {e.code}: {e.reason}")
except Exception as e:
    print("Error fetching Figma file:", e)
