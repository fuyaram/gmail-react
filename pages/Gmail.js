
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Email from './Email';

const emails = [
  {
    id: 'user123',
    profileImage: 'https://images.pexels.com/photos/3812740/pexels-photo-3812740.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-17 10:00 AM',
  },
  {
    id: 'user456',
    profileImage: 'https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-16 2:30 PM',
  },
  {
    id: 'user103',
    profileImage: 'https://images.pexels.com/photos/1037989/pexels-photo-1037989.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-17 10:00 AM',
  },
  {
    id: 'user456',
    profileImage: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-16 2:30 PM',
  },
  {
    id: 'user1993',
    profileImage: 'https://images.pexels.com/photos/3812960/pexels-photo-3812960.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-17 10:00 AM',
  },
  {
    id: 'user0956',
    profileImage: 'https://images.pexels.com/photos/3142449/pexels-photo-3142449.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-16 2:30 PM',
  },
  {
    id: 'user189',
    profileImage: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-17 10:00 AM',
  },
  {
    id: 'user78856',
    profileImage: 'https://images.pexels.com/photos/2647090/pexels-photo-2647090.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-16 2:30 PM',
  },
  {
    id: 'us5er456',
    profileImage: 'https://images.pexels.com/photos/3756848/pexels-photo-3756848.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-16 2:30 PM',
  },
  {
    id: 'user16723',
    profileImage: 'https://images.pexels.com/photos/1724565/pexels-photo-1724565.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?.',
    time: '2023-10-17 10:00 AM',
  },
  {
    id: 'user44556',
    profileImage: 'https://images.pexels.com/photos/2773682/pexels-photo-2773682.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-16 2:30 PM',
  },
  {
    id: 'user44556',
    profileImage: 'https://images.pexels.com/photos/2282849/pexels-photo-2282849.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-16 2:30 PM',
  },
  {
    id: 'user445123',
    profileImage: 'https://images.pexels.com/photos/3402695/pexels-photo-3402695.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-17 10:00 AM',
  },
  {
    id: 'user46756',
    profileImage: 'https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-16 2:30 PM',
  },
  {
    id: 'user1273',
    profileImage: 'https://images.pexels.com/photos/3812740/pexels-photo-3812740.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-17 10:00 AM',
  },
  {
    id: 'user467856',
    profileImage: 'https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-16 2:30 PM',
  },
  {
    id: 'us78er123',
    profileImage: 'https://images.pexels.com/photos/1037989/pexels-photo-1037989.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-17 10:00 AM',
  },
  {
    id: 'user45236',
    profileImage: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-16 2:30 PM',
  },
  {
    id: 'user123423',
    profileImage: 'https://images.pexels.com/photos/3812960/pexels-photo-3812960.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-17 10:00 AM',
  },
  {
    id: 'user4906756',
    profileImage: 'https://images.pexels.com/photos/3142449/pexels-photo-3142449.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-16 2:30 PM',
  },
  {
    id: 'user1y723',
    profileImage: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-17 10:00 AM',
  },
  {
    id: 'user478896',
    profileImage: 'https://images.pexels.com/photos/2647090/pexels-photo-2647090.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-16 2:30 PM',
  },
  {
    id: 'user45909096',
    profileImage: 'https://images.pexels.com/photos/3756848/pexels-photo-3756848.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-16 2:30 PM',
  },
  {
    id: 'user46123',
    profileImage: 'https://images.pexels.com/photos/1724565/pexels-photo-1724565.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-17 10:00 AM',
  },
  {
    id: 'user45406',
    profileImage: 'https://images.pexels.com/photos/2773682/pexels-photo-2773682.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-16 2:30 PM',
  },
  {
    id: 'user490056',
    profileImage: 'https://images.pexels.com/photos/2282849/pexels-photo-2282849.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-16 2:30 PM',
  },
  {
    id: 'user78123',
    profileImage: 'https://images.pexels.com/photos/3402695/pexels-photo-3402695.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'ary@gmail.example',
    content: 'Subject: IT Update | Body: System Improvements, Any Concerns?',
    time: '2023-10-17 10:00 AM',
  },
];

const Gmail = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEmailClick = (emailId) => {
    const selected = emails.find((email) => email.id === emailId);
    setSelectedEmail(selected);
  };

  const filteredEmails = emails.filter((email) =>
    email.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="gmail-container">
      <SearchBar onSearch={setSearchTerm} />
      <div className="email-list">
        {filteredEmails.map((email) => (
          <Email key={email.id} email={email} onClick={handleEmailClick} />
        ))}
      </div>
      {selectedEmail && <Email email={selectedEmail} onClick={() => {}} />}
    </div>
  );
};

export default Gmail;
