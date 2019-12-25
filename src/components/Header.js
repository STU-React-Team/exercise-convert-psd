import React from 'react';
import logo from '../assets/images/paper-plane.png';

function Header() {
  const navigators = ['Home', 'Services', 'Clients', 'Team', 'Contact'];
  return (
    <header className="text-white">
      <section className="container">
        <div className="py-30">
          <div className="pull-left py-10">
            <img className="logo-icon" src={logo} alt="Logo" />
            <span className="logo-text text-uppercase">Escape</span>
          </div>
          <div className="pull-right">
            <ul className="list-inline">
              {navigators.map(navigator => {
                return (
                  <li className="list-inline-item">
                    <a className="nav-link" href="http://localhost:3000">
                      {navigator}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="clearfix" />
      </section>
      <div className="banner">
        <div className="banner-text">
          <div className="text-center">
            <p>Can you build the website of my dreams?</p>
            <h1>Yup, we can do that.</h1>
            <a className="btn btn-more" href="http://localhost:3000/">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
