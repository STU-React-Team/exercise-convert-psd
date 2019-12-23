import React from 'react';
import PropTypes from 'prop-types';

function ClientsItem(props) {
    const {name, desc, img, textRight} = props
    return <div className="clients__item">
        <div className={textRight ? "clients__text" : "clients__text clients__text--right"}>
            <p> {desc} </p>
            <p> {name} </p>
        </div>
        <div className="clients__img">
            <img src={img} alt={name}/>
        </div>
    </div>
}

ClientsItem.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    textRight: PropTypes.bool.isRequired,
};

export default ClientsItem;
