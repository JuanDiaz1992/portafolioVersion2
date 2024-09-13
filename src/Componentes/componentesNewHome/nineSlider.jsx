import { Button, Tooltip } from "@nextui-org/react";
import { FaReact, FaPhp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import video from "../../img/newHome/section2/foodEasy.mp4";
function Slider() {
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
        className="mySwiper nine_slider_container"
      >
        <SwiperSlide className="nine_slider_container--item1">
        <div className="header_FoodEasy_container">
            <h4>FoodEasy</h4>
            <h3>Restaurante</h3>
            <p className="mb-[15px]">
              Este software creado en React JS, PHP y Node JS
              se implemento como una solución para
              restaurantes en donde se lleva el menú diario,
              control de inventarios, empleados, gastos y ventas
              manejando una interfaz sencilla, fácil de entender.
            </p>
            <div>
              <Tooltip content={"React Js"} color="default">
                <Button
                  onClick={() =>
                    navigate(
                      "https://github.com/JuanDiaz1992/Gestor-Restaurante-Frontend"
                    )
                  }
                  isIconOnly
                  color="default"
                >
                  <FaReact />
                </Button>
              </Tooltip>
              <Tooltip content={"PHP"} color="default">
                <Button
                  onClick={() =>
                    navigate(
                      "https://github.com/JuanDiaz1992/Gestor-Restaurante-Backend"
                    )
                  }
                  isIconOnly
                  color="default"
                >
                  <FaPhp />
                </Button>
              </Tooltip>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="nine_slider_container--item2"></SwiperSlide>
        <SwiperSlide className="video-container--nineSlider">
          <video loop autoPlay muted className="fillWidth visible-lg">
            <source src={video} type="video/mp4"></source>
          </video>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
