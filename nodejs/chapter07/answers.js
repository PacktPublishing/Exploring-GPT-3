const axios = require('axios');
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: { 'Authorization': 'Bearer ' + apiKey }
});

const answers = [
  "We are located at 123 Main Street, Tampa FL 33626.",
  "We've been in business since 2014."
]

const endpoint = 'https://api.openai.com/v1/answers';

const data = {
  "documents": answers,
  "question": "When did you start?",
  "search_model": "ada",
  "model": "curie",
  "examples_context": "In 2017, U.S. life expectancy was 78.6 years.",
  "examples": [["What is human life expectancy in the United States?", "In 2017, life expectancy in the U.S. was 78.6 years."], ["Where are you located?", "We are located at 123 Main Street, Tampa, FL 33626"]],
  "max_tokens": 5,
  "temperature": 0,
  "return_prompt": false,
  "expand": ["completion"],
  "stop": ["\n", "<|endoftext|>"],
}

client.post(endpoint, data)
  .then(result => {
    console.log(result.data);
  }).catch(err => {
    console.log(err);
  });