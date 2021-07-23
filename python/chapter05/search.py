import requests
import os
import json

apiKey = os.environ.get("OPENAI_API_KEY")
headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + apiKey
}
data = json.dumps({
    "documents": ["plane", "boat", "spaceship", "car"],
    "query": "A vehicle with wheels"
})

url = 'https://api.openai.com/v1/engines/davinci/search'

result = requests.post(url, headers=headers, data=data)
print(result.json())
