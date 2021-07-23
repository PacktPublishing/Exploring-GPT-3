//chapter07/dumb-joke-generator.js
const axios = require('axios');
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: { 'Authorization': 'Bearer ' + apiKey }
});

const endpoint = "https://api.openai.com/v1/engines/davinci/completions";

const params = {
  prompt: "Dumb Joke: I'm not a vegetarian because I love animals. I'm a vegetarian because I hate plants.\n###\nDumb Joke: Parallel lines have so much in common. It's a shame they'll never meet.\n###\nDumb Joke: Someone stole my mood ring. I don't know how I feel about that.\n###\nDumb Joke:",
  temperature: 0.5,
  max_tokens: 100,
  top_p: 1,
  frequency_penalty: 0.5,
  presence_penalty: 0,
  stop: ["###"]
}

client.post(endpoint, params)
  .then(result => {
    console.log(params.prompt + result.data.choices[0].text);
    // console.log(result.data);
  }).catch(err => {
    console.log(err);
  });