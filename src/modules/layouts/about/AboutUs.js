import React from 'react';
import Slider from "react-slick";

const AboutUs = () => {
  let slider = null;

  const goNext = () => {
    slider.slickNext();
  };
  const goPrev = () => {
    slider.slickNext();
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive : [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="about-us container">
      <div className="row">
        <h1 className="about-head heading w-100">
          ABOUT US
          <i className="fas fa-arrow-up" />
        </h1>
        <div className="about-us-content">
          <Slider 
            ref={c => {slider = c}} 
            infinite={settings.infinite}
            slidesToShow= {settings.slidesToShow}
            slidesToScroll= {settings.slidesToScroll}
            autoplay= {settings.autoplay}
            autoplaySpeed= {settings.autoplaySpeed}
            responsive= {settings.responsive}
            className="about-us-swiper" 
            >
            <div className="about-us-who w-100 col-xl-12 col-md-12 col-sm-12">
              <h2>Who We Are?</h2>
              <p>
                Suspendisse dictum quam tortor, et dapibus lacus. Quisque
                euismod lacus in mi consequat sed pulvinar elit ultricies. Nam
                eu ligula ut massa lobortis scelerisque. Curabitur at rhoncus
                quam. In in tortor quis sem tempor ultricies in eu risus. Fusce
                posuere justo et metus semper molestie.{' '}
              </p>
            </div>
            <div className="about-us-why w-100 col-xl-12 col-md-12 col-sm-12">
              <h2>Why Us?</h2>
              <ul className="whyus-list">
                <li>
                  <i className="fas fa-arrow-right " />
                  Suspendisse dictum quam tortor
                </li>
                <li>
                  <i className="fas fa-arrow-right" />
                  Set dapibus lacus.
                </li>
                <li>
                  <i className="fas fa-arrow-right" />
                  Quisque euismod lacus in mi consequat sed
                </li>
                <li>
                  <i className="fas fa-arrow-right" />
                  Nam eu ligula ut massa lobortis scelerisque.
                </li>
                <li>
                  <i className="fas fa-arrow-right" />
                  Curabitur at rhoncus quam.
                </li>
              </ul>
            </div>
            <div className="about-us-teste w-100 col-xl-12 col-md-12 col-sm-12">
              <h2>Testemonials</h2>
              <div className="teste">
                <div className="teste-content">
                  <p>
                    Curabitur at rhoncus quam. In in tortor quis sem tempor
                    ultricies in eu risus. Fusce posuere justo et metus semper
                    molestie.
                  </p>
                  <div className="wtf">
                    <div className="wtf-icon" />
                    <span className="wtf-name">Jhon Doe</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-us-who w-100 col-xl-12 col-md-12 col-sm-12">
              <h2>Who We Are?</h2>
              <p>
                Suspendisse dictum quam tortor, et dapibus lacus. Quisque
                euismod lacus in mi consequat sed pulvinar elit ultricies. Nam
                eu ligula ut massa lobortis scelerisque. Curabitur at rhoncus
                quam. In in tortor quis sem tempor ultricies in eu risus. Fusce
                posuere justo et metus semper molestie.{' '}
              </p>
            </div>
          </Slider>
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
      </div>
    </div>
  );
}
export default AboutUs; 