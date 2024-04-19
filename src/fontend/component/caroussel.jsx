import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';





export default function Carroussel() {
  const slidesData = [
    {
      imgUrl: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712914072/Banner%20publicite/banner_1_ajtal6.jpg",
    },
    {
      imgUrl: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712914072/Banner%20publicite/banner_2_zwpsoa.jpg",
      
    },
    
  ];
  return (
    
    <Splide
      options={{
        rewind: true,
        autoplay: true,
        interval: 4500,
        arrows: true
      }}>
      {slidesData.map((slide, index) => (
        <SplideSlide key={index}>
          <div className="relative  ">
            <img src={slide.imgUrl} alt={`Image ${index + 1}`}/>
            <div className="absolute flex-col top-0 left-0 right-0 bottom-0 flex justify-center items-center  text-white">
            <div className="text-justify h-56 flex flex-col justify-center -mt-28 -ml-[49%] absolute">
            <p className="  text-xs absolute -mt-48">{slide.text}</p>
            <p className="text-6xl font-bold mt-5">{slide.sommaire}</p>
            <img src={slide.iconUrl} className="absolute -mt-[17%] ml-[52%] size-24" />
            </div>
             
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
} 







































// function Caroussel(){
//     return(
//         <div className="caroussel" flex h-96>
// <Splide 
// options={{
//   // rewind: true,
//   // autoplay: true,
//   // interval: 1000,
//   // arrows: false,
//   // gap: '1rem'
// }}
// >
//   <SplideSlide>
//     <img src="src/fontend/images/images (3).jpeg"/>
//   </SplideSlide>
//   <SplideSlide>
//     <img src="src/fontend/images/images (20).jpeg" alt="Image 2"/>
//   </SplideSlide>
// </Splide>

//         </div>
//     )
// }
// export default Caroussel;