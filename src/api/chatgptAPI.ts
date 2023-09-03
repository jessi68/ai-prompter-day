import {OpenAI}  from "openai";
import Configuration from "openai";
import axios from "axios";

const API_KEY = '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';
const API_ENDPOINT = 'https://api.openai.com/v1/your-api-endpoint';
const URL = "https://api.openai.com/v1/chat/completions";

const APIBody = {
  "model": "gpt-3.5-turbo-0301",
  "prompt": "",
  "temperature": 0,
  "max_tokens": 60,
  "top_p": 1.0,
  "frequency_penalty": 0.0,
  "presence_penalty": 0.0
}

const openai = new OpenAI({
  apiKey: API_KEY, dangerouslyAllowBrowser: true
});

async function getAnswerFromChatGPT(prompt: string, setAnswer: any, setLoading: any) {
  console.log("prompt " + prompt)
  APIBody.prompt = prompt;
  const headers = {
    'Content-type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  };
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{role : 'user', content: prompt}]
    });
    console.log(response.choices)
    setAnswer(response.choices[0]["message"]["content"]);
    setLoading(false);
  } catch(error) {
    console.error(error);
  }
}

export default getAnswerFromChatGPT;