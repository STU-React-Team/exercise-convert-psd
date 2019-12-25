import React from 'react';
import PropTypes from 'prop-types';
// css
import './navbarStyle.css';

const Navbar = ({ handleClick }) => {
  // const handleNavbar = () => {
  //   clickNavbar();
  // }
  return (
    <div className="navbar container-fluid">
      <div className="row w-100 h-100">
        <div className="btn-menu" role="button">
          <button
            type="button"
            className="fas fa-bars"
            aria-label="Send Button"
            onClick={handleClick}
          />
        </div>

        <div className="h-100 col-xl-2 col-lg-2 col-md-2 col-sm-5 logo">
          <h2 className="h-100">
            <img src="" alt="" />
            Anhiora
          </h2>
        </div>
        
        <div className="h-100 col-xl-8 col-lg-8 col-md-8 menu-list">
          <ul className="list-me">
            <li>
              <a href="foo">Home</a>
            </li>
            <li>
              <a href="foo">About</a>{' '}
            </li>
            <li>
              <a href="foo">Services</a>{' '}
            </li>
            <li>
              <a href="foo">Prices</a>
            </li>
            <li>
              <a href="foo">Contact</a>
            </li>
          </ul>
        </div>
        
        <div className="h-100 col-xl-2 col-lg-2 col-md-2 col-sm-4 contact">
          <span className="icon-fb">
            <i className="fab fa-facebook-square " />
          </span>
          <span className="icon-gm">
            <i className="fas fa-envelope-square" />
          </span>
          <span className="icon-tw">
            <i className="fab fa-twitter-square" />
          </span>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Navbar;
