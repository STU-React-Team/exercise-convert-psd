import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'assets/170921-jordan-crying.png';
import AboutPlayer from './AboutPlayer';

const AboutTeam = () => {
  let slider = null;

  const goNext = () => {
    slider.slickNext();
  };

  const goPrev = () => {
    slider.slickNext();
  };

  const listPlayers = [
    {
      srcImg: Image,
      name: 'Mr Thịnh',
      rule: 'manager',
    },
    {
      srcImg: Image,
      name: 'Mr Thành',
      rule: 'manager',
    },
    {
      srcImg: Image,
      name: 'Mr Thắng',
      rule: 'manager',
    },
    {
      srcImg: Image,
      name: 'Mr Hải',
      rule: 'Boss',
    },
    {
      srcImg: Image,
      name: 'Mr Tân',
      rule: 'Boss',
    },
  ];

  const renderListPlayers = listPlayers.map(player => (
    <AboutPlayer
      key={player.name}
      srcImg={player.srcImg}
      name={player.name}
      rule={player.rule}
    />
  ));

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="about-team container">
      <div className="row">
        <h1 className="about-head heading w-100">ABOUT TEAM</h1>
        <div className="about-team-content">
          <Slider
            ref={c => { slider = c }}
            infinite={settings.infinite}
            slidesToShow={settings.slidesToShow}
            slidesToScroll={settings.slidesToScroll}
            autoplay={settings.autoplay}
            autoplaySpeed={settings.autoplaySpeed}
            responsive={settings.responsive}
            >
              {renderListPlayers}
          </Slider>
        </div>
      </div>

      <div className="group-btn-swiper">
        <button
          type="button"
          className="about-us-btn-prev fas fa-chevron-left"
          aria-label="swiper"
          onClick={goPrev}
        />
        <button
          type="button"
          className="about-us-btn-next fas fa-chevron-right"
          aria-label="swiper"
          onClick={goNext}
        />
      </div>
    </div>
  );
};

export default AboutTeam;
