import React from "react";
import Splide from '@splidejs/splide';





function Caroussel(){
    const splide = new Splide( '.splide' ).mount();
    return(
        <div className="caroussel">
<section class="splide" aria-labelledby="carousel-heading">
  <h2 id="carousel-heading">Splide Basic HTML Example</h2>


  <div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">Slide 01</li>
			<li class="splide__slide">Slide 02</li>
			<li class="splide__slide">Slide 03</li>
		</ul>
  </div>
</section>

        </div>
    )
}
export default Caroussel;