import React from 'react';
import {Routes , Route } from 'react-router-dom';
import './App.css';

import Allinbox from './pages/Allinbox';
import Allmails from './pages/Allmails';
import Bin from './pages//Bin';
import Calanders from './pages/Calenders';
import Contacts from './pages/Contacts';
import Drofts from './pages/Drofts';
import Feedback from './pages/Feedback';
import Gmail from './pages/Gmail';
import Important from './pages/Important';
import Outbox from './pages/Outbox';
import Pramotion from './pages/Pramotion';
import Schodules from './pages/Schodules';
import Sent from './pages/Sent';
import Sentting from './pages/Setting';
import Snoozed from './pages/Snoozed';
import Social from './pages/Social';
import Spam from './pages/Spam';
import Stared from './pages/Stared';
import Profile from './pages/Profile';
import Navbar from './Navbar';
import Primary from './pages/Primary';

const App = () => {
  

  return (
   <>
   
    <Navbar />
      <Routes>
      <Route path="/" element={<Gmail />} />
      <Route path="/Primary" element={<Primary />} />
      <Route path="/inbox" element={<Allinbox />} />
      <Route path="/Allmails" element={<Allmails />} />
      <Route path="/social" element={<Social />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Pramotion" element={<Pramotion />} />
      <Route path="/bin" element={<Bin />} />
      <Route path="/Calanders" element={<Calanders />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/important" element={<Important />} />
      <Route path="/outbox" element={<Outbox />} />
      <Route path="/Sentting" element={<Sentting />} />
      <Route path="/snoozed" element={<Snoozed />} />
      <Route path="/spam" element={<Spam />} />
      <Route path="/stared" element={<Stared />} />
      <Route path="/drofts" element={<Drofts />} />
      <Route path="/sent" element={<Sent />} />
      <Route path="/Schodules" element={<Schodules />} />
      </Routes>
    
   
   </>
  );
};

export default App;
