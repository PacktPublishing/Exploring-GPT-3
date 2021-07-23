const axios = require('axios');
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: { 'Authorization': 'Bearer ' + apiKey }
});

const engine = "davinci-instruct-beta";

const params = {
  prompt: "Extract the title, h1, and body text from the following HTML document:\n\n<head><title>A simple page</title></head><body><h1>Hello World</h1><p>This is some text in a simple html page.</p></body></btml>\n\nTitle:",
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