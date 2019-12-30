import React from 'react';
import Title from 'components/common/Title';
import PropTypes from 'prop-types';

const FeatureService = ({ title, desc, img, imgRight }) => {
  return (
    <div className={!imgRight ? 'services-feature__bg' : ''}>
      <div className="container services-feature__item">
        <div
          className={
            imgRight
              ? 'services-feature__img services-feature__img--right'
              : 'services-feature__img'
          }>
          <img src={img} alt={title} />
        </div>
        <div className="services-feature__text">
          <Title title={title} desc={desc} />
        </div>
      </div>
    </div>
  );
};

FeatureService.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imgRight: PropTypes.bool.isRequired,
};

export default React.memo(FeatureService);
