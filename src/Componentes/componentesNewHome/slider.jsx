import react from "react";
import slider1 from "../../img/newHome/sliders/slider1.png";
import slider2 from "../../img/newHome/sliders/slider2.jpg";
import logoArte from "../../img/newHome/sliders/logo.png"
import { Button } from "@nextui-org/react"
import { motion } from "framer-motion";
import { BiStore } from "react-icons/bi";
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
                    <SwiperSlide>
                        <div className="header_card_slider">
                            <h4>ARTE & PINTURA</h4>
                            <h3>Tienda de arte</h3>
                            <p>Se creo implemento una tienda en linea con el fin <br/>de mejorar la presencia en linea de la marca,<br/> incrementando sus ingresos.</p>
                            <Button color="default" endContent={<BiStore/>}>Visita la tienda</Button>
                        </div>
                        <div className="img_slider_container">
                            <motion.img className="imgSlider" src={slider1} alt=""
                                      initial={{ y: 50 }}
                                      animate={{ y: 1 }}
                                      exit={{ y: 50 }}
                                      transition={{
                                        delay: 0.5,
                                        duration: 1,
                                        ease: "linear",
                                      }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img className="imgSlider" src={slider2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="imgSlider" src={slider2} alt="" /></SwiperSlide>
                </Swiper>

        </>
    )
}
export default Slider