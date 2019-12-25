import React from 'react';
import PropTypes from 'prop-types';

const AboutPlayer = React.memo(({ srcImg, name, rule }) => {
  return (
    <div className="about-team-player col-xl-12 col-md-12 col-sm-12">
      <img src={srcImg} alt="" />
      <h2>{name}</h2>
      <h3>{rule}</h3>
    </div>
  );
});

AboutPlayer.propTypes = {
  srcImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rule: PropTypes.string.isRequired,
};

export default AboutPlayer;
