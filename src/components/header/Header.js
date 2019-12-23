import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from 'assets/images/paper-plane.png';

const Header = () => {
  const [toggleNav, setToggleNav] = useState(0);

  return (
    <header className="header">
      <div className="header-menu container">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <button
          type="button"
          className="header-mobile"
          onClick={() => setToggleNav(toggleNav + 1)}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
        <nav className={toggleNav % 2 ? 'active' : ''}>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Clients</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="header-banner">
        <div className="header-cap">
          <h6> Can you build the website of my dream? </h6>
          <h4> YUP, WE CAN DO THAT. </h4>
          <button type="button" className="btn btn--header">
            {' '}
            Learn More{' '}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
