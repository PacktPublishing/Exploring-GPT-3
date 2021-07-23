const axios = require('axios');
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: { 'Authorization': 'Bearer ' + apiKey }
});

client.get('https://api.openai.com/v1/engines')
  .then(result => {
    console.log(result.data);
  }).catch(err => {
    console.log(err.message);
  });