import React from 'react';
import './AboutStyle.css';
import AboutUs from './AboutUs';
import AboutTeam from './AboutTeam';

const About = () => {
  return (
    <div className="about container-fluid">
      <AboutUs />
      <AboutTeam />
    </div>
  );
};

export default About;
