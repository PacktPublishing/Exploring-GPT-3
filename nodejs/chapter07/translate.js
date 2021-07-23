const axios = require('axios');
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: { 'Authorization': 'Bearer ' + apiKey }
});

const params = {
  prompt: "Tranlate from English to Spanish\n---\n\nEnglish: Where is the bathroom?\nSpanish:",
  temperature: 0.5,
  max_tokens: 15,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  stop: "---"
}

client.post('https://api.openai.com/v1/engines/davinci/completions', params)
  .then(result => {
    console.log(params.prompt + result.data.choices[0].text);
    // console.log(result.data);
  }).catch(err => {
    console.log(err);
  });