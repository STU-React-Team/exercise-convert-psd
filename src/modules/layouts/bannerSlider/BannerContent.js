import React from 'react';
import { PropTypes } from 'prop-types';

const BannerDetail = React.memo(({ title, content }) => {
  return (
    <div className="banner-content">
      <h1>{title}</h1>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
})
BannerDetail.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default BannerDetail;