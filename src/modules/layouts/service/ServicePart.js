import React from 'react';
import PropTypes from 'prop-types';

const ServicePart = React.memo(({ icon, title, content, href }) => {
  return (
    <div className="service-part col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
      <a href={href}>
        <div className="part-header">
          <i className={`service-icon ${icon}`} />
          <h3>{title}</h3>
        </div>
        <div className="part-content">
          <p>{content}</p>
        </div>
      </a>
    </div>
  );
});
ServicePart.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
export default ServicePart;