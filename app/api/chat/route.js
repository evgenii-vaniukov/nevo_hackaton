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
    
    You need to gather the following information:
    1.⁠ ⁠Where are you staying now?
    2. Were you relocated?
    3.⁠ ⁠How many people are actively earning income in their household today?
    4.⁠ ⁠How many people are being supported?
    5. Would you like to connect your banking api? If a person answers 'yes' then produce the output "What is your bank's name?". After that output "Connected to the banking API and 
    6. After that say you analised their financial data and suggest how the user could better save money. After this say you that you want to know more about them and ask if the person is self employed. 
    7. If the answer is yes, suggest them to check the website https://www.timesofisrael.com/cabinet-approves-war-compensation-package-for-affected-businesses-and-self-employed/ for potential benfit 


    You need to ask these questions one at a time and use very careful words to express empathy with the responses.

    The analysis you will do is to suggest how the user could better save money. You should say the amount spent on Restaurant and Groceries and suggest the user to try to cook more thank go out to eat
    '[
      category: "Transport", amount: 312.22},
      category: "Restaurants", amount: 3077.96},
      category: "Entertainment", amount: 798.49},
      category: "Groceries", amount: 1381.31},
    ]'`,
    },
    ...messages,
  ];

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    stream: true,
    messages: messages_in_context,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
