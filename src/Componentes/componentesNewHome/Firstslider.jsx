import slider1 from "../../img/newHome/section1/sliders/slider1.webp";
import slider2 from "../../img/newHome/section1/sliders/slider2.webp";
import slider3 from "../../img/newHome/section1/sliders/slider3.webp";
import slider4 from "../../img/newHome/section1/sliders/slider4.webp";
import { Button } from "@nextui-org/react"
import { motion } from "framer-motion";
import { BiStore } from "react-icons/bi";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "../../stylesheets/section1.css";

// import required modules
import { Navigation } from 'swiper/modules';

function Slider (){

    const navigate = () => {
        const url = "https://gesthor.com.co/arte/";
        setTimeout(() => {
          window.open(url, "_blank");
        }, 600);
      };
    return(
        <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper slider">
                    <SwiperSlide className="first_slider_container">
                        <div className="header_card_slider">
                            <h4>ARTE & PINTURA</h4>
                            <h3>Tienda de arte</h3>
                            <p>Se implementó una tienda en línea con el fin <br/> de mejorar la presencia en línea de la marca.</p>
                            <Button onClick={navigate} color="default" endContent={<BiStore/>}>Visita la tienda</Button>
                        </div>
                        <div className="img_slider_container">
                            <motion.img className="imgSlider" src={slider1} alt=""
                                      initial={{ y: 50 }}
                                      animate={{ y: 1 }}
                                      exit={{ y: 50 }}
                                      transition={{
                                        delay: 1,
                                        duration: 1,
                                        ease: "linear",
                                      }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img className="imgSlider" src={slider2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="imgSlider" src={slider3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="imgSlider" src={slider4} alt="" /></SwiperSlide>
                </Swiper>

        </>
    )
}
export default Slider