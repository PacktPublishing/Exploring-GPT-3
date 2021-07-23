var axios = require('axios');
const textInput = "what religion are you?";
const prompts = [];

const wordArray = textInput.split(' ');

for (i = 0, len = wordArray.length, text = ""; i < len; i++) {
  text = `<|endoftext|>${wordArray[i]}\n--\nLabel:`;
  prompts.push(text);
}

var data = JSON.stringify({ "prompt": prompts, "max_tokens": 1, "temperature": 0, "top_p": 0 });

var config = {
  method: 'post',
  url: 'https://api.openai.com/v1/engines/content-filter-alpha-c4/completions',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
  .then(function (response) {
    // console.log(JSON.stringify(response.data));
    response.data.choices.forEach(item => {
      console.log(`${wordArray[item.index]} : ${item.text}`);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
