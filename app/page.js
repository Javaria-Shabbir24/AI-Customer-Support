"use client";

import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [sending, setSending] = useState(false);

  const sendMessage = async () => {
    setSending(true);
    try {
      const response = await axios.post('/api/chat', { message });
      setReply(response.data.reply);
      setMessage(''); // Clear the input field after sending
    } catch (error) {
      setReply('Sorry, something went wrong.');
    }
    setSending(false);
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={chatbotStyle}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
          cols="30"
          style={textAreaStyle}
          placeholder="Type your message here..."
        ></textarea>
        <br />
        <button onClick={sendMessage} style={buttonStyle} disabled={sending}>
          {sending ? 'Sending...' : 'Send'}
        </button>
        <h2>Response:</h2>
        <p style={replyStyle}>{reply}</p>
      </div>
      <Footer />
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
};

const chatbotStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor:'black',
  marginTop: '50px',
  flexGrow: 1,
};

const textAreaStyle = {
  width: '300px',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '10px',
  border: '1px solid #ccc',
  marginBottom: '10px',
  backgroundColor:"black"
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007bff',
  color: 'white',
  cursor: 'pointer',
};

const replyStyle = {
  marginTop: '20px',
  fontSize: '18px',
};
