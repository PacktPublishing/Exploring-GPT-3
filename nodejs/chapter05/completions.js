const axios = require('axios');

const client = axios.create({
  headers: {
    'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY
  }
});

const completionParmas = {
  "prompt": "Once upon a time",
  "max_tokens": 10
}

client.post('https://api.openai.com/v1/engines/davinci/completions', completionParmas)
  .then(result => {
    console.log(completionParmas.prompt + result.data.choices[0].text);
    // console.log(result.data);
  }).catch(err => {
    console.log(err);
  });