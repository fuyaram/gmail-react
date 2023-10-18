import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope,faUser, faStar,faInbox, faExclamationCircle, faPaperPlane, faBan, faAddressBook, faClock, faTrash, faEdit, faBell, faCalendarAlt, faComments, faList, faCog } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from './images/gmail.png'
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    <header className="header">
    <div className="header-item ad"></div>
            <div className="header-item logo">
            <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="header-item profile-icon">
            <Link to="/Profile"><FontAwesomeIcon icon={faUser} /></Link>
            </div>
        </header>
    <div className={`navigation-bar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className="sidebar-menu">
      <li><Link to="/"><FontAwesomeIcon icon={faEnvelope} /> Gmail</Link></li>
        <li><Link to="/inbox"><FontAwesomeIcon icon={faInbox} /> Inbox</Link></li>
        <li><Link to="/stared"><FontAwesomeIcon icon={faStar} /> Stared</Link></li>
        <li><Link to="/important"><FontAwesomeIcon icon={faExclamationCircle} /> Important</Link></li>
        <li><Link to="/sent"><FontAwesomeIcon icon={faPaperPlane} /> Sent</Link></li>
        <li><Link to="/spam"><FontAwesomeIcon icon={faBan} /> Spam</Link></li>
        <li><Link to="/drofts"><FontAwesomeIcon icon={faEdit} /> Drafts</Link></li>
        <li><Link to="/bin"><FontAwesomeIcon icon={faTrash} /> Bin</Link></li>
        <li><Link to="/contacts"><FontAwesomeIcon icon={faAddressBook} /> Contacts</Link></li>
        <li><Link to="/primary"><FontAwesomeIcon icon={faInbox} />Primary</Link></li>
        <li><Link to="/snoozed"><FontAwesomeIcon icon={faClock} /> Snoozed</Link></li>
        <li><Link to="/Schodules"><FontAwesomeIcon icon={faCalendarAlt} />Schodules</Link></li>
        <li><Link to="/outbox"><FontAwesomeIcon icon={faPaperPlane} /> Outbox</Link></li>
        <li><Link to="/Allmails"><FontAwesomeIcon icon={faList} />Allmails</Link></li>
        <li><Link to="/Pramotion"><FontAwesomeIcon icon={faBell} />Pramotion</Link></li>
        <li><Link to="/Calanders"><FontAwesomeIcon icon={faCalendarAlt} />Calanders</Link></li>
        <li><Link to="/Sentting"><FontAwesomeIcon icon={faCog} />Sentting</Link></li>
        <li><Link to="/feedback"><FontAwesomeIcon icon={faComments} /> Feedback</Link></li>
      </ul>
    </div>
    </>
  );
}

export default Navbar;
