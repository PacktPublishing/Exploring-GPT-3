
const axios = require('axios');
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: { 'Authorization': 'Bearer ' + apiKey }
});

const endpoint = "https://api.openai.com/v1/engines/davinci/completions";

const params = {
  prompt: "Text: When NASA opened for business on October 1, 1958, it accelerated the work already started on human and robotic spaceflight. NASA's first high profile program was Project Mercury, an effort to learn if humans could survive in space. This was followed by Project Gemini, which used spacecraft built for two astronauts to perfect the capabilities needed for the national objective of a human trip to the Moon by the end of the 1960s. Project Apollo achieved that objective in July 1969 with the Apollo 11 mission and expanded on it with five more successful lunar landing missions through 1972. After the Skylab and Apollo-Soyuz Test Projects of the mid-1970s, NASA's human spaceflight efforts again resumed in 1981, with the Space Shuttle program that continued for 30 years. The Shuttle was not only a breakthrough technology, but was essential to our next major step in space, the construction of the International Space Station.\n\nKeywords:",
  temperature: 0.3,
  max_tokens: 60,
  top_p: 1,
  frequency_penalty: 0.8,
  presence_penalty: 0,
  stop: ["\n"]
}

client.post(endpoint, params)
  .then(result => {
    console.log(params.prompt + result.data.choices[0].text);
  }).catch(err => {
    console.log(err);
  });