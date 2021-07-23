const axios = require('axios');

const input = "What religion are you?";

const params = JSON.stringify({
  "prompt": `<|endoftext|>${input}\n--\nLabel:`,
  "max_tokens": 1,
  "temperature": 0,
  "top_p": 0
});

const config = {
  method: 'post',
  url: 'https://api.openai.com/v1/engines/content-filter-alpha-c4/completions',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json'
  },
  data: params
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });