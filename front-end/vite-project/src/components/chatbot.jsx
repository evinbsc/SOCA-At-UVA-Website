// src/components/Chatbot.jsx

import React, { useState, useEffect } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import '../styles/chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! Ask me anything about the Caribbean.' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (input.trim() === '') return;

    // Add user message
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/.netlify/functions/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();

      // Add bot response
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: data.reply },
      ]);
    } catch (error) {
      console.error('Error fetching from backend:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: 'Sorry, something went wrong. Please try again later.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  useEffect(() => {
    // Scroll to the bottom when messages update
    const chatArea = document.querySelector('.chatbot-messages');
    if (chatArea) {
      chatArea.scrollTop = chatArea.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <>
      {isOpen && (
        <div className="chatbot-container" role="dialog" aria-modal="true" aria-labelledby="chatbot-title">
          <div className="chatbot-header">
            <FaComments className="chatbot-icon" />
            <span id="chatbot-title">Caribbean Chatbot</span>
            <FaTimes className="chatbot-close" onClick={toggleChat} aria-label="Close chatbot" />
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
            {isLoading && (
              <div className="chatbot-message bot">
                <FaPaperPlane className="spinner" />
              </div>
            )}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your question..."
              aria-label="Chatbot input"
            />
            <FaPaperPlane className="send-button" onClick={handleSend} aria-label="Send message" />
          </div>
        </div>
      )}
      <div className="chatbot-button" onClick={toggleChat} aria-label="Open chatbot">
        <FaComments />
      </div>
    </>
  );
};

export default Chatbot;
