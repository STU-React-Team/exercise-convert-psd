import React from 'react';
import PropTypes from 'prop-types';

const LogoItem = ({img, name}) => {
    return (
        <div className="logo__item">
            <img src={img} alt={name}/>
        </div>
    )
}

LogoItem.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

export default LogoItem;
