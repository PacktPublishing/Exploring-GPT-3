import requests
import os
import json

headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + os.environ.get("OPENAI_API_KEY")
}

endpoint = "https://api.openai.com/v1/classifications"

examples = [
    ["Hello, I'm interested in applying for the prompt designer position you are hiring for. Can you please tell me where I should send my resume?", "English"],
    ["Здравствуйте, я хочу подать заявку на должность быстрого дизайнера, на которую вы нанимаете. Подскажите, пожалуйста, куда мне отправить резюме?", "Russian"],
    ["Hola, estoy interesado en postularme para el puesto de diseñador rápido para el que está contratando. ¿Puede decirme dónde debo enviar mi currículum?", "Spanish"],
    ["Bonjour, je suis intéressé à postuler pour le poste de concepteur rapide pour lequel vous recrutez. Pouvez-vous me dire où je dois envoyer mon CV?", "French"],
    ["नमस्कार, मैं उस त्वरित डिज़ाइनर पद के लिए आवेदन करने में रुचि रखता हूं, जिसके लिए आप नौकरी कर रहे हैं। क्या आप मुझे बता सकते हैं कि मुझे अपना रिज्यूम कहां भेजना चाहिए?", "Hindi"]
]

params = {
    "query": "¿Con quién debo comunicarme sobre ofertas de trabajo técnico?",
    "examples": examples,
    "model": "curie"
}

result = requests.post(endpoint, headers=headers, data=json.dumps(params))

print(params["query"] + '\nLABEL:' + result.json()["label"])
