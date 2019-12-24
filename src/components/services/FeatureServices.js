import React from 'react';
import PropTypes from 'prop-types';

function FeatureServices(props) {
    const {title, desc, img, imgRight} = props;
    const titleArr = title.split(" ");
    const descArr = desc.split("-");
    return <div className={!imgRight ? "services-feature__bg" : ""}>
        <div className="container services-feature__item">
            <div className={imgRight ? "services-feature__img services-feature__img--right" : "services-feature__img"}>
                <img src={img} alt={title} />
            </div>
            <div className="services-feature__text">
                <div className="title">
                    <span> {titleArr[0]} </span>
                    <span> {titleArr[1]} </span>
                </div>
                <p className="services__desc services-feature__desc"> {descArr[0]} </p>
                <p className="services__desc services-feature__desc"> {descArr[1]} </p>
            </div>
        </div>
    </div>;
}

FeatureServices.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    imgRight: PropTypes.bool.isRequired
};

export default FeatureServices;
