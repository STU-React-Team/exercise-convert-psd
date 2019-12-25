import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, desc }) => {
  const splitTitle = title.split(' ');
  const splitDesc = desc.split('-');

  return (
    <div className="title">
      {splitTitle.map(item => (
        <span key={item}> {item} </span>
      ))}
      {splitDesc.length === 1 ? (
        <p> {splitDesc} </p>
      ) : (
        splitDesc.map(item => (
          <p key={item} className="services__desc services-feature__desc">
            {item}
          </p>
        ))
      )}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default React.memo(Title);
