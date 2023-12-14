import slider1 from "../../img/newHome/section1/sliders/slider1.png";
import slider2 from "../../img/newHome/section1/sliders/slider2.jpg";
import slider3 from "../../img/newHome/section1/sliders/video2.mp4";
import { Button, Tooltip } from "@nextui-org/react"
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "../../stylesheets/section1.css";

// import required modules
import { Navigation } from 'swiper/modules';

function Slider (){

    const navigate = (url) => {
        setTimeout(() => {
          window.open(url, "_blank");
        }, 600);
      };
    return(
        <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper slider">
                    <SwiperSlide className="first_slider_container">
                        <div className="header_card_slider">
                            <h4>ALDÍA</h4>
                            <h3>Asistente financiero</h3>
                            <p>ALDÍA es una plataforma web que registra los ingresos y gastos del usuario, organizándolos mensual y anualmente, con estos datos genera gráficas con promedios. Actualmente se está desarrollando un módulo para determinar la obligación de presentar declaración de renta según los datos ingresados.</p>
                            <Tooltip content={"Front end"} color="default">
                              <Button
                                onClick={() =>
                                  navigate(
                                    "https://github.com/JuanDiaz1992/alDiaFront"
                                  )
                                }
                                isIconOnly
                                color="default"
                              >
                                <FaGithub />
                              </Button>
                            </Tooltip>
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
                    <SwiperSlide className="video-container--firstSlider">
                      <video loop autoPlay muted className="fillWidth visible-lg">
                        <source src={slider3} type="video/mp4"></source>
                      </video>
                    </SwiperSlide>
                </Swiper>

        </>
    )
}
export default Slider