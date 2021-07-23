const axios = require('axios');

const client = axios.create({
  headers: {
    'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY
  }
});

const endpoint = "https://api.openai.com/v1/classifications";

const examples = [
  ["The service was super quick. I love that.", "Good"],
  ["Would not go back.", "Poor"],
  ["I tried the chicken and cranberry pizza...mmmm!", "Good"],
  ["There were no signs indicating cash only!", "Poor"],
  ["I was disgusted. There was a hair in my food.", "Poor"],
  ["The waitress was a little slow but friendly.", "Neutral"]
]

const params = {
  "query": "I'm never going to this place again",
  "examples": examples,
  "model": "curie"
}

client.post(endpoint, params)
  .then(result => {
    console.log(params.query + '\nLABEL:' + result.data.label);
  }).catch(err => {
    console.log(err);
  });