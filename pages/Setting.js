import React, { useState } from 'react';
import './Setting.css'; 

const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France', 'India', 'Japan']; // Add more countries as needed
const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Hindi']; // Add more languages as needed

const Setting = () => {
  const [name, setName] = useState('John Doe');
  const [selectedCountry, setSelectedCountry] = useState('USA');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [darkMode, setDarkMode] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`settings-page ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Settings</h1>
      <div className="setting-option">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div className="setting-option">
        <label htmlFor="country">Country</label>
        <select id="country" value={selectedCountry} onChange={handleCountryChange}>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="setting-option">
        <label htmlFor="language">Language</label>
        <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
          {languages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
      <div className="setting-option">
        <label>Dark Mode</label>
        <input type="checkbox" checked={darkMode} onChange={handleDarkModeToggle} />
      </div>
    </div>
  );
};

export default Setting;
