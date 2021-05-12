import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

import "../styles/swiper.module.scss"


// import Swiper core and required modules
import SwiperCore, {
  EffectFade,Navigation,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectFade,Navigation,Pagination]);


export default function App() {



  return (
    <>
    <Swiper spaceBetween={30} effect={'fade'} navigation={true} pagination={{
  "clickable": true
}} className="mySwiper">
  <SwiperSlide><Image src="/images/profile.jpg" alt="hero" height={600} width={500} quality={90}/>
  </SwiperSlide><SwiperSlide><Image src="/images/pic12.jpg"alt="hero" height={600} width={500} quality={90}/>
  </SwiperSlide><SwiperSlide><Image src="/images/pic13.jpg" alt="hero" height={600} width={500} quality={90}/>
  </SwiperSlide><SwiperSlide><Image src="/images/pic14.jpg" alt="hero" height={600} width={500} quality={90}/></SwiperSlide>
  </Swiper>
    </>
  )
}
