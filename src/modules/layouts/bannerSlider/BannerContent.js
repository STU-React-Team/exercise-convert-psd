import React from 'react';
import { PropTypes } from 'prop-types';



export default function BannerDetail({title, content}) {
    return ( 
        <div className="banner-content">
            <h1>{title}</h1>
            <div>
                <p>{content}</p>
            </div>
        </div>
    )
}
BannerDetail.propTypes = {
    title: PropTypes.string.isRequired,
    content : PropTypes.string.isRequired
}
