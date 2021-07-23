const axios = require('axios');
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: { 'Authorization': 'Bearer ' + apiKey }
});

const completionParmas = {
  prompt: "The following is a conversation with an AI bot. The bot is very friendly and polite.\n\nHuman: Hello, how are you?\nAI: I am doing great, thanks for asking. How can I help you today?\nHuman: I just wanting to talk with you.\nAI:",
  temperature: 0.9,
  max_tokens: 150,
  top_p: 1,
  frequency_penalty: 0.0,
  presence_penalty: 0.6,
  stop: ["\n", " Human:", " AI:"]
}

client.post('https://api.openai.com/v1/engines/davinci/completions', completionParmas)
  .then(result => {
    console.log(completionParmas.prompt + result.data.choices[0].text);
    // console.log(result.data);
  }).catch(err => {
    console.log(err);
  });