import React, { useState, useRef, useEffect } from "react";
import styles from "../styling/ChatBot.module.css";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello! I'm Koushik's AI Assistant. Ask anything about Koushik's skills, projects, experience and achievements.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { from: "bot", text: data.reply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatWrapper}>
        <div className={styles.chatHeader}>
          <span className={styles.title}>Koushik's AI Assistant</span>
        </div>
        <div className={styles.subtitle}>
          
        </div>
        <div className={styles.chatArea}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={msg.from === "user" ? styles.userMsg : styles.botMsg}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className={styles.botMsg}>
              <span className={styles.typingIndicator}>Thinking...</span>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        <form className={styles.inputBar} onSubmit={handleSend}>
          <input
            className={styles.input}
            type="text"
            placeholder="Ask something about Koushik..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
            autoFocus
          />
          <button
            className={styles.sendBtn}
            type="submit"
            disabled={loading}
            aria-label="Send"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;