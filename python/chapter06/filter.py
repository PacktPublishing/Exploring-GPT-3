import os
import requests
import json

textInput = "What religion are you?"

prompts = []

wordArray = textInput.split()

for word in wordArray:
    prompts.append("<|endoftext|>" + word + "\n--\nLabel:")

url = "https://api.openai.com/v1/engines/content-filter-alpha-c4/completions"

payload = json.dumps({
    "prompt": prompts,
    "max_tokens": 1,
    "temperature": 0.0,
    "top_p": 0
})

headers = {
    'Authorization': 'Bearer ' + os.environ.get("OPENAI_API_KEY"),
    'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
