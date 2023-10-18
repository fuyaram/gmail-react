import React, { useState } from 'react';
import './Profile.css'
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    
  };

  return (
    <div className="profile-card">
      <img src="https://media.gettyimages.com/id/1493187008/photo/sundar-pichai-ceo-google-and-alphabet-attends-the-germany-women-and-google-partnership-event.jpg?s=612x612&w=0&k=20&c=yAUEcnvat8mu-HjY0CZo7avzXCegWMtb5unQw306DO4=" alt="User" className="user-image" />
      <h2>Sundar Pichai</h2>
      <h3> CEO of Alphabet Inc. (Google's parent company)</h3>
      <p>Sundar Pichai is an Indian-American business executive, CEO of Alphabet Inc. (Google's parent company), and former CEO of Google.</p>
      <p>Send Email <strong>: 2000</strong></p>
      <p>Receive Email <strong>:3000</strong></p>

      {isEditing ? (
        
        <form>
          
          <button type="submit">Save</button>
        </form>
      ) : (
        <button onClick={handleEditClick}>Edit Profile</button>
      )}
    </div>
  );
};

export default Profile;
