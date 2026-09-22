import urllib.request
import json
import os

def update_task_status():
    with open('.env', 'r') as f:
        token = [line.strip().split('=', 1)[1] for line in f if line.startswith('NOTION_TOKEN=')][0]
    
    db_id = '3dfa5ee478c3805b85a2f574f46eda83'
    req = urllib.request.Request(f'https://api.notion.com/v1/databases/{db_id}/query', method='POST')
    req.add_header('Authorization', f'Bearer {token}')
    req.add_header('Notion-Version', '2022-06-28')
    req.add_header('Content-Type', 'application/json')
    
    task_id = None
    with urllib.request.urlopen(req, data=b'{}') as r:
        data = json.loads(r.read())
        for t in data['results']:
            title = t['properties']['Task name']['title'][0]['plain_text']
            if 'fix sizes of the photos' in title:
                task_id = t['id']
                break
                
    if not task_id:
        print("Task not found.")
        return
        
    print(f"Found Task ID: {task_id}")
    
    # Update the status to 'Done'
    update_data = json.dumps({
        "properties": {
            "Status": {
                "status": {
                    "name": "Done"
                }
            }
        }
    }).encode('utf-8')
    
    req_update = urllib.request.Request(f'https://api.notion.com/v1/pages/{task_id}', method='PATCH')
    req_update.add_header('Authorization', f'Bearer {token}')
    req_update.add_header('Notion-Version', '2022-06-28')
    req_update.add_header('Content-Type', 'application/json')
    
    try:
        with urllib.request.urlopen(req_update, data=update_data) as r2:
            print("Successfully updated task status to Done.")
    except Exception as e:
        print(f"Failed to update task: {e}")

if __name__ == '__main__':
    update_task_status()
