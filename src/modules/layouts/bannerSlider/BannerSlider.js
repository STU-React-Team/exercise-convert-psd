import React from 'react';
import BannerContent from './BannerContent';
import './BannerStyle.css';

const BannerSlider = () => {
  const content =
    'Ethernet scan, in indeterminate controller high, recognition frequency silicon logistically. Read-only or boolean potentiometer pc infrared development debugged processor. ';
  const title = `Anhiora Business solutions`;
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide banner-slider"
      data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="http://iotcoworkingspace.com/uploads/images/sliders/1548385620.jpg"
            className="d-block "
            alt="..."
          />
          <BannerContent title={title} content={content} />
        </div>
        <div className="carousel-item">
          <img
            src="http://iotcoworkingspace.com/uploads/images/sliders/1548385593.jpg"
            className="d-block "
            alt="..."
          />
          <BannerContent title={title} content={content} />
        </div>
        <div className="carousel-item">
          <img
            src="http://iotcoworkingspace.com/uploads/images/sliders/1548669307.jpg"
            className="d-block "
            alt="..."
          />
          <BannerContent title={title} content={content} />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
      </a>
    </div>
  );
}

export default BannerSlider;
