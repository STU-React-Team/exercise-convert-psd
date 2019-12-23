import React from 'react';
import PropTypes from 'prop-types';

function ServiceSkills({ img, heading, desc }) {
  return (
    <div className="services-skills__item">
      <div className="services-skills__img">
        <img src={img} alt={heading} />
      </div>
      <div className="services-skills__text">
        <h2 className="services-skills__heading"> {heading} </h2>
        <p className="services__desc services-skills__desc"> {desc} </p>
      </div>
    </div>
  );
}

ServiceSkills.propTypes = {
  img: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ServiceSkills;
