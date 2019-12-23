import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const [state, setState] = useState({});

  const handleInputChange = e => {
    const { value, name } = e.target;
    const currentState = state;
    const newState = Object.assign(currentState, { [name]: value });
    setState(newState);
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__item">
            <div className="title">
              <span> Say </span>
              <span> Hello </span>
              <p>
                Don’t be shy, drop us an email and say hello! We are a really
                nice bunch of people :&#41;
              </p>
            </div>
            <div className="footer-info">
              <div className="footer-info__social">
                <div>
                  <FontAwesomeIcon icon={faMobileAlt} />
                </div>
                <p> (416) 555-0000 </p>
              </div>
              <div className="footer-info__social">
                <div>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <p> hello@escape.com </p>
              </div>
              <div className="footer-info__social">
                <div>
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </div>
                <p> @escape </p>
              </div>
              <div className="footer-info__social">
                <div>
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </div>
                <p> facebook.com/escape </p>
              </div>
              <div className="footer-info__social">
                <div>
                  <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
                </div>
                <p> plus.com/escape </p>
              </div>
              <div className="footer-info__social">
                <div>
                  <FontAwesomeIcon icon={['fab', 'pinterest-p']} />
                </div>
                <p> pinterest.com/escape </p>
              </div>
            </div>
          </div>
          <div className="footer__item">
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  name="name"
                  value={state.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your E-mail *"
                  name="email"
                  value={state.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message *"
                  rows="8"
                  name="message"
                  value={state.message}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p> &copy; 2014 Escape by FreebiesXpress • Made In Toronto </p>
      </div>
    </div>
  );
}

export default Footer;
