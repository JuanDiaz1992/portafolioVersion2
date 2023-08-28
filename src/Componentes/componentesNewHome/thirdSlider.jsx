import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


import img1 from "../../img/newHome/section2/bannerf-3.png";
import img2 from "../../img/newHome/section2/personal.png";
function Slider() {
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
  const navigate = (url) => {
    setTimeout(() => {
      window.open(url, "_blank");
    }, 600);
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
            <h4>Gesthor Design</h4>
            <h3>Web Empresa Publicidad</h3>
            <p>
              La página web diseñada para
              <br />
              Gesthor Design es un logro en sí, <br />
              construida desde cero con unacombinación
              <br />
              de tecnologías clave como HTML, CSS y <br />
              JavaScript. Esta sinergia de lenguajes
              <br />
              de programación dio vida a una interfaz <br />
              dinámica y atractiva que refleja
              <br />
              la identidad y valores de la empresa.
            </p>
            <div>
              <Button
                onClick={() => navigate("https://design.gesthor.com.co/")}
                color="danger"
              >
                Visita la web
              </Button>
              <Button
                onClick={() =>
                  navigate("https://github.com/JuanDiaz1992/gesthor_design")
                }
                isIconOnly
                color="primary"
              >
                <FaGithub />
              </Button>
            </div>
          </div>
          <div className="firstSliderOf_thirty_slider--div2">
            <img src={img1} alt="" />
            <motion.img
              className="img_slider3_first_slider"
              src={img2}
              alt=""
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
