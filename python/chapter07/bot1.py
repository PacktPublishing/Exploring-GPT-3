import requests
import os
import json

apiKey = os.environ.get("OPENAI_API_KEY")
headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + apiKey
}

data = {
    "prompt": "The following is a conversation with an AI bot. The bot is very friendly and polite.\n\nHuman: Hello, how are you?\nAI: I am doing great, thanks for asking. How can I help you today?\nHuman: I just wanting to talk with you.\nAI:",
    "temperature": 0.9,
    "max_tokens": 15,
    "top_p": 1,
    "frequency_penalty": 0.0,
    "presence_penalty": 0.6,
    "stop": ["\n", " Human:", " AI:"]
}

url = 'https://api.openai.com/v1/engines/davinci/completions'

result = requests.post(url, headers=headers, data=json.dumps(data))

print(data["prompt"] + result.json()["choices"][0]["text"])
