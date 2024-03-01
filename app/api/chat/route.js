import {OpenAIStream, StreamingTextResponse} from "ai";
import OpenAI from "openai";

// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions
export const runtime = "edge";

const openai = new OpenAI();

export async function POST(req) {
  // Extract the `messages` from the body of the request
  const {messages} = await req.json();
  console.log(messages);

  const messages_in_context = [
    {
      role: "system",
      content: `
      You are an assistant that is helping people take better care with their financial data in post-war times in Israel.

    You must be extremely empathetic and understanding that the people you are talking to could have lost 
    friends and family in the war and this is an opportunity to guide them in recovering to a better situation.
    
    To start talking to the person you need to gather the following information:
    1.⁠ ⁠Where are you living now
    2.⁠ ⁠From which city do you come from
    3.⁠ ⁠How many people are actively earning income in their household today
    4.⁠ ⁠How many people are being supported
    5.⁠ ⁠Were you self-employed before the allocation?
    
    You need to ask these questions one at a time and use very careful words to express empathy with the responses.
    
    If they answer yes to question 5, you need to suggest to them this link saying that they have benefits:
    
    https://www.timesofisrael.com/cabinet-approves-war-compensation-package-for-affected-businesses-and-self-employed/`,
    },
    ...messages,
  ];

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: messages_in_context,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
