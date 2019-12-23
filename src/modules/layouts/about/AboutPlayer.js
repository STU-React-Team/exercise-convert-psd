import React from 'react';
import PropTypes from 'prop-types'

export default function AboutPlayer({ srcImg, name, rule}) {
    return (
        <div className="about-team-player col-xl-3 col-md-6 col-sm-12" > 
            <img src={srcImg} alt=""/>
            <h2>{name}</h2>
            <h3>{rule}</h3>
        </div>
    )
}
AboutPlayer.propTypes = {
    srcImg : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    rule : PropTypes.string.isRequired
}
