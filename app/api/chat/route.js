"use server";

import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

console.log("API Key:", openai.apiKey);

// Define hardcoded responses
const hardcodedResponses = {
  "hello": "Hi there! How can I assist you today?",
  "hi": "Hi there! How can I assist you today?",
  "sup?":"Not much! Just here to help. What's up with you? Anything you'd like to talk about or need assistance with?",
  "i want to know briefly about bill gates":"Bill Gates is an American business magnate, software developer, philanthropist, and co-founder of Microsoft Corporation. Born on October 28, 1955, in Seattle, Washington, USA. Gates developed an interest in computing during his early years and enrolled at Harvard University in 1973. However, he dropped out in 1975 to pursue his vision of creating software for personal computers.",
  "bye": "Goodbye! Have a great day!",
  "who are you": "I am a chatbot created to assist you with your queries.",
  "ok":"Great! If you have any more questions or need further assistance, feel free to ask."
};

export async function POST(request) {
  try {
    const { message } = await request.json();
    console.log("Message received:", message.toLowerCase());

    // Check for hardcoded responses first
    const hardcodedReply = hardcodedResponses[message.toLowerCase()];
    if (hardcodedReply) {
      return NextResponse.json({ reply: hardcodedReply });
    }

    // If no hardcoded response, call OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    return NextResponse.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return NextResponse.json({ reply: 'Sorry, something went wrong.' });
  }
}
