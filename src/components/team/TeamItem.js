import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const TeamItem = (props) => {
  const { name, pos, tw, fb, google, pinterest } = props;
  return (
    <div className="team__item">
      <div className="team__img" />
      <h2 className="team__name"> {name} </h2>
      <p className="team__position"> {pos} </p>
      <div className="team__info">
        {tw ? (
          <button type="button">
            {' '}
            <FontAwesomeIcon icon={['fab', 'twitter']} />{' '}
          </button>
        ) : null}
        {fb ? (
          <button type="button">
            {' '}
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />{' '}
          </button>
        ) : null}
        {google ? (
          <button type="button">
            {' '}
            <FontAwesomeIcon icon={['fab', 'google-plus-g']} />{' '}
          </button>
        ) : null}
        {pinterest ? (
          <button type="button">
            {' '}
            <FontAwesomeIcon icon={['fab', 'pinterest-p']} />{' '}
          </button>
        ) : null}
      </div>
    </div>
  );
}

TeamItem.propTypes = {
  name: PropTypes.string.isRequired,
  pos: PropTypes.string,
  fb: PropTypes.string,
  google: PropTypes.string,
  tw: PropTypes.string,
  pinterest: PropTypes.string,
};

TeamItem.defaultProps = {
  pos: '',
  fb: '',
  google: '',
  tw: '',
  pinterest: '',
};

export default TeamItem;
