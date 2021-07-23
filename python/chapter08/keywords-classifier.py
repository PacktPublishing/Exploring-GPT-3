import requests
import os
import json

headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + os.environ.get("OPENAI_API_KEY")
}

endpoint = 'https://api.openai.com/v1/engines/davinci/completions'

params = {
    "prompt": "Text: When NASA opened for business on October 1, 1958, it accelerated the work already started on human and robotic spaceflight. NASA's first high profile program was Project Mercury, an effort to learn if humans could survive in space. This was followed by Project Gemini, which used spacecraft built for two astronauts to perfect the capabilities needed for the national objective of a human trip to the Moon by the end of the 1960s. Project Apollo achieved that objective in July 1969 with the Apollo 11 mission and expanded on it with five more successful lunar landing missions through 1972. After the Skylab and Apollo-Soyuz Test Projects of the mid-1970s, NASA's human spaceflight efforts again resumed in 1981, with the Space Shuttle program that continued for 30 years. The Shuttle was not only a breakthrough technology, but was essential to our next major step in space, the construction of the International Space Station.\n\nKeywords:",
    "temperature": 0.3,
    "max_tokens": 60,
    "top_p": 1,
    "frequency_penalty": 0.8,
    "presence_penalty": 0,
    "stop": ["\n"]
}

result = requests.post(endpoint, headers=headers, data=json.dumps(params))

print(params["prompt"] + result.json()["choices"][0]["text"])
