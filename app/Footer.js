"use client";

import { useState } from 'react';

const Footer = () => {
  const [rating, setRating] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleRatingClick = (star) => {
    setRating(star);
  };

  const handleSubmit = () => {
    setFeedbackMessage('Your feedback has been submitted, thank you!');
    setTimeout(() => {
      setRating(0); // Reset rating after showing the feedback message
      setFeedbackMessage(''); // Clear the feedback message
    }, 2000); // Message and reset delay
  };

  return (
    <footer style={footerStyle}>
      <h3>Rate Your Experience</h3>
      <div style={ratingStyle}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{ ...starStyle, color: star <= rating ? '#FFD700' : '#ccc' }}
            onClick={() => handleRatingClick(star)}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleSubmit} style={buttonStyle}>Submit</button>
      {feedbackMessage && <p style={feedbackMessageStyle}>{feedbackMessage}</p>}
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'black',
  padding: '20px',
  textAlign: 'center',
  borderTop: '2px solid #ddd',
};

const ratingStyle = {
  marginTop: '2px',
};

const starStyle = {
  fontSize: '30px',
  cursor: 'pointer',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007bff',
  color: 'white',
  cursor: 'pointer',
  marginTop: '10px',
};

const feedbackMessageStyle = {
  marginTop: '10px',
  fontSize: '16px',
  color: '#28a745', // Green color for success message
};

export default Footer;
