// src/components/Chatbot.jsx
import React, { useState } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import '../styles/chatbot.css';

const API_KEY = process.env.AIzaSyCqHKIk5OXuUtCAS1PHZCcyuPatrw3575I

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! Ask me anything about the Caribbean.' },
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (input.trim() === '') return;

    // Add user message
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');

    // Call Google Gemini API
    try {
      const response = await fetch('https://your-gemini-api-endpoint.com/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`, // Use the API_KEY variable
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Add bot response
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: data.reply },
      ]);
    } catch (error) {
      console.error('Error fetching from Gemini API:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: 'Sorry, something went wrong. Please try again later.' },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <FaComments className="chatbot-icon" />
            <span>Caribbean Chatbot</span>
            <FaTimes className="chatbot-close" onClick={toggleChat} />
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.sender === 'bot' ? 'bot' : 'user'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your question..."
            />
            <FaPaperPlane className="send-button" onClick={handleSend} />
          </div>
        </div>
      )}
      <div className="chatbot-button" onClick={toggleChat}>
        <FaComments />
      </div>
    </>
  );
};

export default Chatbot;
