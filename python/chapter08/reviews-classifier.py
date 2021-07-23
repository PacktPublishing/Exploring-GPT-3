import requests
import os
import json

headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + os.environ.get("OPENAI_API_KEY")
}

endpoint = "https://api.openai.com/v1/classifications"

examples = [
    ["The service was super quick. I love that.", "Good"],
    ["Would not go back.", "Poor"],
    ["I tried the chicken and cranberry pizza...mmmm!", "Good"],
    ["There were no signs indicating cash only!", "Poor"],
    ["I was disgusted. There was a hair in my food.", "Poor"],
    ["The waitress was a little slow but friendly.", "Neutral"]
]

params = {
    "query": "I'm never going to this place again",
    "examples": examples,
    "model": "curie"
}

result = requests.post(endpoint, headers=headers, data=json.dumps(params))

print(params["query"] + '\nLABEL:' + result.json()["label"])
