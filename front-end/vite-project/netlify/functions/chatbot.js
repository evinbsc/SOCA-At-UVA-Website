// netlify/functions/chatbot.js

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ message: 'Method Not Allowed' }),
      };
    }
  
    try {
      // Dynamically import node-fetch
      const fetchModule = await import('node-fetch');
      const fetch = fetchModule.default;
  
      const { message } = JSON.parse(event.body);
  
      // Example: Call to an external chatbot API
      const response = await fetch('https://api.chatbot.com/respond', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: message }),
      });
  
      if (!response.ok) {
        throw new Error(`Chatbot API responded with status ${response.status}`);
      }
  
      const data = await response.json();
  
      return {
        statusCode: 200,
        body: JSON.stringify({ reply: data.reply }),
      };
    } catch (error) {
      console.error('Chatbot Function Error:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Internal Server Error' }),
      };
    }
  };
  