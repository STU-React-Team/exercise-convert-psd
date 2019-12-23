import React, { useState } from 'react'
import Swiper from 'react-id-swiper';
import AboutPlayer from './AboutPlayer';
import { Image } from '../../../assets/170921-jordan-crying.png'

export default function AboutTeam() {
    const [swiper, updateSwiper] = useState(null);
    const goNext = () => {
        if (swiper != null) {
            swiper.slideNext();
        }
    };
    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };
    const listPlayers = [
       
        {
            srcImg : Image,
            name : "Mr Thịnh",
            rule : "manager"
        },
        {
            srcImg : Image,
            name : "Mr Thành",
            rule : "manager"
        },
        {
            srcImg : Image,
            name : "Mr Thắng",
            rule : "manager"
        },
        {
            srcImg : Image,
            name : "Mr Hải",
            rule : "Boss"
        },
        {
            srcImg : Image,
            name : "Mr Tân",
            rule : "Boss"
        }
    ];
    const renderListPlayers = listPlayers.map(player => (
        <AboutPlayer 
            srcImg={player.srcImg}
            name={player.name}
            rule={player.rule}
        />
    ))
    return (
        <div className="about-team container">
            <div className="row">
                    <h1 className="about-head heading w-100">
                        ABOUT TEAM
                    </h1>
                    <div className="about-team-content">
                        <Swiper getSwiper={updateSwiper}>
                            {renderListPlayers}
                        </Swiper>
                        
                    </div>
                    </div>
                    <div className="group-btn-swiper">
                            <button type="button" className="about-us-btn-prev fas fa-chevron-left" aria-label="swiper" onClick={goPrev} />
                            <button type="button" className="about-us-btn-next fas fa-chevron-right" aria-label="swiper" onClick={goNext} />
                    </div>
        </div>
    )
}
