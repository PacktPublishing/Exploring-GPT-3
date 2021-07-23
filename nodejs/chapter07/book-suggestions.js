const axios = require('axios');
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: { 'Authorization': 'Bearer ' + apiKey }
});

const params = {
  prompt: "Suggest a list of books that everyone should try to read in their lifetime.\n\nBooks:\n1.",
  temperature: 0.7,
  max_tokens: 100,
  top_p: 1.0,
  frequency_penalty: 0.5,
  presence_penalty: 0.0,
  stop: ".\n"
}

client.post('https://api.openai.com/v1/engines/davinci/completions', params)
  .then(result => {
    console.log(params.prompt + result.data.choices[0].text);
  }).catch(err => {
    console.log(err);
  });