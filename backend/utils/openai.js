const { OpenAI } = require("openai");
const dotenv = require("dotenv");
dotenv.config();
// const { brief } = require("./aggregate.js");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function analyzeData(filename) {
  try {
    const { getResults } = await import("./aggregate.js");
    const {results, brief} = await getResults(filename);

    const completion = await client.chat.completions.create({
      model: "gpt-4o", 
      messages: [
        {
          role: "assistant",
          content:
            "You are an expert trading consultant who gives accurate predictions for the target price for various stocks by analyzing the available data and information about the company"
        },
        {
          role: "user",
          content: `These are the stats ${JSON.stringify(
            results
          )} and this is the information regarding the company and the field it belongs to ${brief}. Give a short report on its favourability for long term investment and then also give a target price to invest in it in under 80 words.`,
        },
      ],
    });

    // console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;
  } catch (error) {
    console.log(error);
  }
}
// analyzeData();
module.exports = { analyzeData };
// export default analyzeData;
