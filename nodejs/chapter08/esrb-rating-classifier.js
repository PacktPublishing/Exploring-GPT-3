
const axios = require('axios');
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: { 'Authorization': 'Bearer ' + apiKey }
});

const endpoint = "https://api.openai.com/v1/engines/davinci/completions";

const params = {
  prompt: "Provide an ESRB rating for the following text:\n\n\"i'm going to hunt you down, and when I find you, I'll make you wish you were dead.\"\n\nESRB rating:",
  temperature: 0.7,
  max_tokens: 60,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  stop: ["\n"]
}

client.post(endpoint, params)
  .then(result => {
    console.log(params.prompt + result.data.choices[0].text);
  }).catch(err => {
    console.log(err);
  });