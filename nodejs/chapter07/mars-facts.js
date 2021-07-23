const axios = require('axios');
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: { 'Authorization': 'Bearer ' + apiKey }
});

const params = {
  prompt: "I'm studying the planets. List things I should know about Mars.\n\n1. Mars is the nearest planet to Earth.\n2. Mars has seasons, dry variety (not as damp as Earth's).\n3. Mars' day is about the same length as Earth's (24.6 hours).\n4.",
  temperature: 0,
  max_tokens: 100,
  top_p: 1.0,
  frequency_penalty: 0.5,
  presence_penalty: 0.5,
  stop: "11."
}

client.post('https://api.openai.com/v1/engines/davinci/completions', params)
  .then(result => {
    console.log(params.prompt + result.data.choices[0].text);
    // console.log(result.data);
  }).catch(err => {
    console.log(err);
  });