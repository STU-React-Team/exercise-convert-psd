import React from 'react';
import PropTypes from 'prop-types';

const Work = React.memo(({ icon, title, content }) => {
  return (
    <div className="work col-xl-3 col-lg-3 col-md-12 col-sm-12">
      <a href="foo">
        <div className={`work-icon ${icon}`} />
        <div className="work-content">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </a>
    </div>
  );
});
Work.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Work;
