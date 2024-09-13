import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


import img1 from "../../img/newHome/section2/bannerf-3.webp";
import img2 from "../../img/newHome/section2/personal.webp";
function Slider({visiteWeb}) {
  const objects = {
    offscreen: {
      y: 30,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
      },
    },
  };
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper second_slider_container"
        viewport={{ once: true, amount: 1 }}
      >
        <SwiperSlide className="firstSliderOf_thirty_slider">
          <div className="header_card_slider firstSliderOf_thirty_slider--div1">
            <h4 className="h4_title bg-black text-white">Gesthor Design</h4>
            <h3 className="h3_small_title">Empresa Servicios Web</h3>
            <p className="max-w-[400px] w-[100%] mb-[25px]">
              La página web diseñada para
              Gesthor Design es un logro en sí,
              construida desde cero con una combinación
              de tecnologías clave como HTML, CSS y
              JavaScript. Esta sinergia de lenguajes
              de programación dio vida a una interfaz
              dinámica y atractiva que refleja
              la identidad y valores de la empresa.
            </p>
            <div>
              <Button
                onClick={() => visiteWeb("https://gesthordesign.com")}
                color="danger"
              >
                Visita la web
              </Button>
              <Button
                onClick={() =>
                  visiteWeb("https://github.com/JuanDiaz1992/gesthor_design")
                }
                isIconOnly
                color="primary"
              >
                <IoLogoJavascript />
              </Button>
            </div>
          </div>
          <div className="firstSliderOf_thirty_slider--div2">
            <img src={img1} alt=""  loading="lazy"/>
            <motion.img
              className="img_slider3_first_slider"
              src={img2}
              alt="Gesthor Design"
              variants={objects}
              initial="offscreen"
              whileInView="onscreen"

            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="secondSliderOf_thirty_slider"></SwiperSlide>
        <SwiperSlide className="thirtySliderOf_thirty_slider"></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
