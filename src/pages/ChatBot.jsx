import React, { useState, useRef, useEffect } from 'react';
import { sendChatMessage } from '../config/apiConfig';
import '../styles/Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hi! I\'m Koushik\'s AI assistant. Ask me anything about Koushik!',
      timestamp: new Date()
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  /**
   * Handle sending a message
   */
  const handleSendMessage = async (e) => {
    e.preventDefault();

    const userMessage = inputValue.trim();
    if (!userMessage) {
      setError('Please enter a message');
      return;
    }

    // Clear input and error
    setInputValue('');
    setError(null);

    // Add user message to chat
    const userMessageObj = {
      id: messages.length + 1,
      type: 'user',
      text: userMessage,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessageObj]);

    // Set loading state
    setLoading(true);

    try {
      // Send message to backend
      const response = await sendChatMessage(userMessage);

      // Add bot response to chat
      const botMessageObj = {
        id: messages.length + 2,
        type: 'bot',
        text: response.reply || 'Sorry, I couldn\'t generate a response.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessageObj]);

    } catch (err) {
      console.error('Chat error:', err);

      // Add error message to chat
      const errorMessage = {
        id: messages.length + 2,
        type: 'error',
        text: err.message || 'Failed to get response. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setError(err.message);

    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  /**
   * Handle clear chat
   */
  const handleClearChat = () => {
    setMessages([
      {
        id: 1,
        type: 'bot',
        text: 'Hi! I\'m Koushik\'s AI assistant. Ask me anything about Koushik!',
        timestamp: new Date()
      }
    ]);
    setError(null);
    setInputValue('');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h2>Koushik's AI Assistant</h2>
        <button onClick={handleClearChat} className="clear-btn" title="Clear chat">
          🔄
        </button>
      </div>

      <div className="chatbot-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.type}-message`}
          >
            <div className="message-content">
              <p>{msg.text}</p>
              <span className="message-time">
                {msg.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
          </div>
        ))}
        {loading && (
          <div className="message bot-message loading">
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {error && (
        <div className="chatbot-error">
          ⚠️ {error}
        </div>
      )}

      <form onSubmit={handleSendMessage} className="chatbot-input-form">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask me something..."
          disabled={loading}
          className="chatbot-input"
        />
        <button
          type="submit"
          disabled={loading || !inputValue.trim()}
          className="send-btn"
        >
          {loading ? '...' : '➤'}
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
