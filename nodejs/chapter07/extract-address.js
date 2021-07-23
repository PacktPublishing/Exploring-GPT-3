const axios = require('axios');
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: { 'Authorization': 'Bearer ' + apiKey }
});

const engine = "davinci-instruct-beta";

const params = {
  prompt: "Extract the postal address from this email:\n\nDear Paul,\n\nI'm in the market for a new home and I understand you're the listing agent for the property located at 2620 Riviera Dr, Laguna Beach, CA 92651.\n\nIs the seller flexible at all on the asking price?\n\nBest,\n\nLinda\n\nProperty Address:\n",
  temperature: 0,
  max_tokens: 64,
  top_p: 1.0,
  frequency_penalty: 0.5,
  presence_penalty: 0.0
}

client.post(`https://api.openai.com/v1/engines/${engine}/completions`, params)
  .then(result => {
    console.log(params.prompt + result.data.choices[0].text);
    // console.log(result.data);
  }).catch(err => {
    console.log(err);
  });