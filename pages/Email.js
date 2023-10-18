// Email.js
import React from 'react';

const Email = ({ email, onClick }) => {
  return (
    <div className="email-item" onClick={() => onClick(email.id)}>
      <img src={email.profileImage} alt="Profile" className="profile-image" />
      <div className="email-details">
        <div className="email-id">{email.id}</div>
        <div className="email-title">{email.title}</div>
        <div className="email-content">{email.content}</div>
        <div className="email-time">{email.time}</div>
      </div>
    </div>
  );
};

export default Email;
