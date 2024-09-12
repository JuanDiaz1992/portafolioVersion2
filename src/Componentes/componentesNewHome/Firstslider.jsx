import slider1 from "../../img/newHome/section1/sliders/slider1.png";
import slider2 from "../../img/newHome/section1/sliders/slider2.jpg";
import slider3 from "../../img/newHome/section1/sliders/video1.mp4";
import video2 from "../../img/newHome/section1/sliders/video3.mp4";
import { Button, Tooltip } from "@nextui-org/react"
import { motion } from "framer-motion";
import { FaReact  } from "react-icons/fa"
import { SiSpring } from "react-icons/si";


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
                        <div className="header_card_slider header_card_slide_padding">
                            <h4 className="h4_title bg-white text-black">ALDÍA</h4>
                            <h3 className="h3_small_title">Asistente financiero</h3>
                            <p>ALDÍA es una plataforma web que registra los ingresos y gastos del usuario, organizándolos mensual y anualmente, con estos datos genera gráficas con promedios. Actualmente se está desarrollando un módulo para determinar la obligación de presentar declaración de renta según los datos ingresados.</p>
                            <div className="flex gap-2">
                              <Tooltip content={"React Js"} color="default">
                                <Button
                                  onClick={() =>
                                    navigate(
                                      "https://github.com/JuanDiaz1992/alDiaFront"
                                    )
                                  }
                                  isIconOnly
                                  color="default"
                                >
                                  <FaReact />
                                </Button>
                              </Tooltip>
                              <Tooltip content={"Spring Boot"} color="default">
                                <Button
                                  onClick={() =>
                                    navigate(
                                      "https://github.com/JuanDiaz1992/AldiaBackJava"
                                    )
                                  }
                                  isIconOnly
                                  color="default"
                                >
                                  <SiSpring />
                                </Button>
                              </Tooltip>
                            </div>
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
                    <SwiperSlide>
                      <div className="img_slider_container--2">
                        <img className="imgSlider_2" src={slider2} alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="video-container--firstSlider">
                      <video  autoplay="autoplay" loop="loop" muted playsinline preload="auto" className="fillWidth visible-lg desktop">
                        <source src={slider3} type="video/mp4"></source>
                      </video>
                      <video  autoplay="autoplay" loop="loop" muted playsinline preload="auto" className="fillWidth visible-lg movil">
                        <source src={video2} type="video/mp4"></source>
                      </video>
                    </SwiperSlide>
                </Swiper>

        </>
    )
}
export default Slider