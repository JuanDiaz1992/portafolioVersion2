import react from "react";
import arte from "../../img/newHome/stiloDani.jpg";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "../../stylesheets/newHome.css";

// import required modules
import { Navigation } from 'swiper/modules';

function Slider (){
    return(
        <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper slider">
                    <SwiperSlide><img src={arte} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={arte} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={arte} alt="" /></SwiperSlide>
                </Swiper>

        </>
    )
}
export default Slider