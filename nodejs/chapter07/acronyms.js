const axios = require('axios');
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: { 'Authorization': 'Bearer ' + apiKey }
});

const completionParmas = {
  prompt: "Provide the meaning for the following acronym.\n---\n\nacronym: LOL\nmeaning: Laugh out loud\nacronym: BRB\nmeaning: Be right back\nacronym: L8R",
  temperature: 0.5,
  max_tokens: 15,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  stop: "acronym:"
}

client.post('https://api.openai.com/v1/engines/davinci/completions', completionParmas)
  .then(result => {
    console.log(completionParmas.prompt + result.data.choices[0].text);
  }).catch(err => {
    console.log(err);
  });