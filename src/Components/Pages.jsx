import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow } from 'swiper/modules';
import { Pagination, Navigation } from 'swiper/modules';
import p1 from "../assests/1.png"
import p2 from "../assests/2.png"
import p3 from "../assests/3.png"
import p4 from "../assests/4.png"
// import 
const items = [
  { src: p1, alt: 'Image 1' },
  { src: p2, alt: 'Image 2' },
  { src: p3, alt: 'Image 3' },
  { src: p4, alt: 'Image 4' },
];
function Pages() {
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={p1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p4} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75021 10.5H21.6289V13.5H8.75021L13.6895 18.4393L11.5682 20.5606L3.00757 12L11.5682 3.4393L13.6895 5.56062L8.75021 10.5Z" fill="#D3D2D2"/>
</svg>          </div>
          <div className="swiper-button-next slider-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="24px" viewBox="0 0 25 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1069 13.557H3.55322V10.443H16.1069L11.2922 5.31595L13.36 3.11401L21.7046 12L13.36 20.886L11.2922 18.6841L16.1069 13.557Z" fill="#D3D2D2"/>
</svg>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Pages;