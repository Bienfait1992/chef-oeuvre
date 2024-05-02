import React from "react";
// import { Splide, SplideSlide } from '@splidejs/react-splide';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

 function Caroussel() {
  
  return (
    <Carousel  autoPlay interval={3000} infiniteLoop thumbWidth={0} showIndicators={false} showStatus={false} >
    
      <img src="https://res.cloudinary.com/dk2apwxms/image/upload/v1714493309/images_1_veio41.jpg" className="relative"></img>
      <img src="https://res.cloudinary.com/dk2apwxms/image/upload/v1714493399/images_bavv0z.jpg" alt="" className="relative"/>

      
    </Carousel>
  );
}
export default Caroussel;

