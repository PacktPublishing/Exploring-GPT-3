const axios = require('axios');
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: { 'Authorization': 'Bearer ' + apiKey }
});

const params = {
  prompt: "List five historic music events that happened in July 1969.\n\nJuly 1969:\n\n1.",
  temperature: .5,
  max_tokens: 100,
  top_p: 1,
  frequency_penalty: 0.5,
  presence_penalty: 0.5
}

client.post('https://api.openai.com/v1/engines/davinci/completions', params)
  .then(result => {
    console.log(params.prompt + result.data.choices[0].text);
    // console.log(result.data);
  }).catch(err => {
    console.log(err);
  });