import slider1 from "../../img/newHome/section1/sliders/slider1.webp";
import slider2 from "../../img/newHome/section1/sliders/slider2.webp";
import slider3 from "../../img/newHome/section1/sliders/video1.mp4";
import video2 from "../../img/newHome/section1/sliders/video3.mp4";
import { Button, Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../stylesheets/section1.css";

import { Navigation } from "swiper/modules";

function Slider({ visiteWeb }) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper slider"
      >
        <SwiperSlide className="first_slider_container">
          <div className="header_card_slider header_card_slide_padding">
            <h2 className="h4_title bg-white text-black">ALDÍA</h2>
            <h3 className="h3_small_title  text-black">Asistente financiero</h3>
            <p className="max-w-[500px] w-[100%] mb-[15px] text-black">
              ALDÍA es una plataforma web que registra los ingresos y gastos del
              usuario, organizándolos mensual y anualmente, con estos datos
              genera gráficas con promedios. Actualmente se está desarrollando
              un módulo para determinar la obligación de presentar declaración
              de renta según los datos ingresados.
            </p>
            <div className="flex gap-2">
              <Tooltip content={"React Js"} >
                <Button
                  onClick={() =>
                    visiteWeb("https://github.com/JuanDiaz1992/alDiaFront")
                  }
                  isIconOnly
                  color="warning"
                  aria-label="Al Día Front"
                >
                  <FaReact />
                </Button>
              </Tooltip>
              <Tooltip content={"Spring Boot"} >
                <Button
                  onClick={() =>
                    visiteWeb("https://github.com/JuanDiaz1992/AldiaBackJava")
                  }
                  isIconOnly
                  color="primary"
                  aria-label="Al Día Back"
                >
                  <SiSpring />
                </Button>
              </Tooltip>
            </div>
          </div>
          <div className="img_slider_container">
            <motion.img
              className="imgSlider"
              src={slider1}
              alt=""
              initial={{ y: 50 }}
              animate={{ y: 1 }}
              exit={{ y: 50 }}
              transition={{
                delay: 1,
                duration: 1,
                ease: "linear",
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_slider_container--2">
            <img className="imgSlider_2" src={slider2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="video-container--firstSlider">
          <video
            autoPlay="autoplay"
            loop="loop"
            muted
            playsInline
            preload="auto"
            className="fillWidth visible-lg desktop"
          >
            <source src={slider3} type="video/mp4"></source>
          </video>
          <video
            autoPlay="autoplay"
            loop="loop"
            muted
            playsInline
            preload="auto"
            className="fillWidth visible-lg movil"
          >
            <source src={video2} type="video/mp4"></source>
          </video>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
