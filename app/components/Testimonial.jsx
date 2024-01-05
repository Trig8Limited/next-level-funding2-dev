import React from 'react';
import Slider from 'react-slick';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, // Adjust this to scroll one slide at a time
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, // Adjust this to scroll one slide at a time
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, // Adjust this to scroll one slide at a time
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // Adjust this to scroll one slide at a time
        },
      },
    ],
  };

  return (
    <div>
      <div className="carousel">
        <Slider {...settings}>
          <div className="box">
            <h3>1</h3>
          </div>
          <div className="box">
            <h3>2</h3>
          </div>
          <div className="box">
            <h3>3</h3>
          </div>
          <div className="box">
            <h3>3</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
