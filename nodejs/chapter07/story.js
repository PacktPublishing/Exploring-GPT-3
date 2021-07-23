const axios = require('axios');
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: { 'Authorization': 'Bearer ' + apiKey }
});

const params = {
  prompt: "Write a 10-page story for kids about a Dog named Bingo who travels to space.\n---\n\nPage 1: Once upon a time there was a dog named Bingo.\nPage 2: He was trained by NASA to go in space.\nPage 3:",
  temperature: 0.9,
  max_tokens: 500,
  top_p: 1.0,
  frequency_penalty: 0.7,
  presence_penalty: 0.0,
  stop: "Page 11:"
}

client.post('https://api.openai.com/v1/engines/davinci/completions', params)
  .then(result => {
    console.log(params.prompt + result.data.choices[0].text);
    // console.log(result.data);
  }).catch(err => {
    console.log(err);
  });