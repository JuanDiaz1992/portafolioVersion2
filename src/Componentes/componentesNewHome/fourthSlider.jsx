import { Button, Tooltip } from "@nextui-org/react";
import { FaReact, FaPhp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const video = "/img/newHome/section2/foodEasy.mp4";
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
        className="mySwiper fourth_slider_container"
      >
        <SwiperSlide className="fourth_slider_container--item1">
          <div className="header_fourth_slider--item1">
            <h2 className="h4_title bg-black text-white px-2 py-1 inline-block">FoodEasy</h2>
            <h3 className="font-bold text-2xl mb-1">Restaurante</h3>
            <p className="max-w-[335px] w-[100%] mb-[15px] font-medium">
              Software para gestión de restaurantes.
              Manejo de facturación, menú e inventario de forma rápida y sencilla.
            </p>
            <div className="flex gap-2">
              <Tooltip content={"React Js"} color="default">
                <Button
                  onClick={() => navigate("https://github.com/JuanDiaz1992/Gestor-Restaurante-Frontend")}
                  isIconOnly
                  color="warning"
                  aria-label="Frontend"
                >
                  <FaReact size={24} />
                </Button>
              </Tooltip>
              <Tooltip content={"PHP"} color="default">
                <Button
                  onClick={() => navigate("https://github.com/JuanDiaz1992/Gestor-Restaurante-Backend")}
                  isIconOnly
                  color="primary"
                  aria-label="Backend"
                >
                  <FaPhp size={24} />
                </Button>
              </Tooltip>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="fourth_slider_container--item2"></SwiperSlide>
        <SwiperSlide className="fourth_slider_container--item3">
          <video key={video} loop autoPlay muted className="fillWidth visible-lg">
            <source src={video} type="video/mp4"></source>
          </video>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
