// netlify/functions/chatbot.mjs

import fetch from 'node-fetch';

export const handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*', // Adjust as needed for security
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle CORS preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const { message } = JSON.parse(event.body);

    // Input validation
    if (typeof message !== 'string' || message.trim() === '') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Invalid input' }),
      };
    }

    // Example API call to Gemini Chatbot (Replace with actual Gemini API endpoint)
    const response = await fetch('https://api.gemini.com/respond', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: message }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API responded with status ${response.status}`);
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ reply: data.reply }),
    };
  } catch (error) {
    console.error('Chatbot Function Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
