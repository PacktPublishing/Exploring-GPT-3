import requests
import os

apiKey = os.environ.get("OPENAI_API_KEY")
headers = {
    'Authorization': 'Bearer ' + apiKey
}

result = requests.get('https://api.openai.com/v1/engines', headers=headers)

print(result.json())
