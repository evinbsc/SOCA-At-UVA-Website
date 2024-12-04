// netlify/functions/chatbot.js

const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const { message } = JSON.parse(event.body);

    const model = 'models/gemini-1.5-turbo'; 

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/${model}:generateMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: {
          messages: [
            { role: 'user', content: message },
          ],
        },
        maxTokens: 150,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${errorData.error.message}`);
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: data.message.content }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: 'Sorry, something went wrong. Please try again later.' }),
    };
  }
};
