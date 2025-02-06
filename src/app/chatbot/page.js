'use client'
import React, { useState } from 'react';
import axios from 'axios';

function ChatBot() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://127.0.0.1:5000', { message });
      setResponse(res.data);
      setMessage('');
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div>
      <h1>ChatBot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default ChatBot;