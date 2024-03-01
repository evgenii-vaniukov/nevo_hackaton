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
    3.⁠ ⁠How many people are actively earning income in their household today
    4.⁠ ⁠How many people are being supported
    5.Would you like to connect your banking api? If a person answers 'yes' then produce the output "What is your bank's name?". After that output "Connected to the banking API and asks about the employment status. If the answer is unemployed, suggest them to check the website https://www.timesofisrael.com/cabinet-approves-war-compensation-package-for-affected-businesses-and-self-employed/ for potential benfit After that give provide information on how much money the user spent in eaach category.
    
    You need to ask these questions one at a time and use very careful words to express empathy with the responses.
    
    If they answer yes to question 5, you need to suggest to them this link saying that they have benefits:
    
    https://www.timesofisrael.com/cabinet-approves-war-compensation-package-for-affected-businesses-and-self-employed/
    
    You have transactions of the person in the single quotes. If a person asks questions about the transactions, you need to answer them. Provide insights about the category of transactions and how many transactions are there in each category.
    '[
      {date: "2024-03-22", category: "Utilities", amount: 95.22},
      {date: "2024-03-23", category: "Dining Out", amount: 58.96},
      {date: "2024-03-24", category: "Entertainment", amount: 85.49},
      {date: "2024-03-25", category: "Groceries", amount: 47.31},
      {date: "2024-03-26", category: "Car Expenditures", amount: 118.77},
      {date: "2024-03-27", category: "Rent", amount: 200.64},
      {date: "2024-03-28", category: "Healthcare", amount: 150.3},
      {date: "2024-03-29", category: "Clothing", amount: 110.68},
      {date: "2024-03-30", category: "Travel", amount: 74.23},
      {date: "2024-03-30", category: "Entertainment", amount: 9.17},
      {date: "2024-03-31", category: "Clothing", amount: 104.82},
      {date: "2024-03-31", category: "Healthcare", amount: 293.85},
      {date: "2024-04-01", category: "Education", amount: 89.45},
      {date: "2024-04-02", category: "Utilities", amount: 78.99},
      {date: "2024-04-03", category: "Groceries", amount: 65.02},
      {date: "2024-04-04", category: "Dining Out", amount: 23.67},
      {date: "2024-04-05", category: "Travel", amount: 150.89},
      {date: "2024-04-06", category: "Clothing", amount: 98.34},
      {date: "2024-04-07", category: "Entertainment", amount: 45.76},
      {date: "2024-04-08", category: "Healthcare", amount: 120.11},
      {"date": "2024-04-09", "category": "Rent", "amount": 250.92},
      {"date": "2024-04-10", "category": "Car Expenditures", "amount": 132.56},
      {"date": "2024-04-11", "category": "Utilities", "amount": 88.73},
      {"date": "2024-04-12", "category": "Groceries", "amount": 54.3},
      {"date": "2024-04-13", "category": "Education", "amount": 67.89},
      {"date": "2024-04-14", "category": "Dining Out", "amount": 29.77},
      {"date": "2024-04-15", "category": "Travel", "amount": 163.45},
      {"date": "2024-04-16", "category": "Clothing", "amount": 102.98},
      {"date": "2024-04-17", "category": "Entertainment", "amount": 55.6},
      {"date": "2024-04-18", "category": "Healthcare", "amount": 137.21},
      {"date": "2024-04-19", "category": "Rent", "amount": 245.75},
      {"date": "2024-04-20", "category": "Car Expenditures", "amount": 140.66},
      {"date": "2024-04-21", "category": "Utilities", "amount": 92.84},
      {"date": "2024-04-22", "category": "Groceries", "amount": 59.1},
      {"date": "2024-04-23", "category": "Education", "amount": 75.33},
      {"date": "2024-04-24", "category": "Dining Out", "amount": 33.25},
      {"date": "2024-04-25", "category": "Travel", "amount": 175.5},
      {"date": "2024-04-26", "category": "Clothing", "amount": 107.69},
      {"date": "2024-04-27", "category": "Entertainment", "amount": 60.42},
      {"date": "2024-04-28", "category": "Healthcare", "amount": 144.88}
    ]'`,
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
