import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false

    
  };

  return (
    <div className="carousel-container">
      
      <Slider {...settings}>
        <div>
          <img src="https://res.cloudinary.com/dk2apwxms/image/upload/v1717446227/FR_Hero_store_desktop_1500x300_tlykqi.png" alt="Slide 1" className='taille'/>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dk2apwxms/image/upload/v1717446227/FR_Hero_store_desktop_1500x300_tlykqi.png" alt="Slide 2" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dk2apwxms/image/upload/v1717446227/FR_Hero_store_desktop_1500x300_tlykqi.png" alt="Slide 3" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dk2apwxms/image/upload/v1717446227/FR_Hero_store_desktop_1500x300_tlykqi.png" alt="Slide 4" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dk2apwxms/image/upload/v1717446227/FR_Hero_store_desktop_1500x300_tlykqi.png" alt="Slide 5" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

