import { Button, Tooltip } from "@nextui-org/react";
import { BiStore } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import video from "../../img/newHome/section2/video1.2.1.mp4";
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
        className="mySwiper second_slider_container"
      >
        <SwiperSlide className="second_slider_container--item"></SwiperSlide>
        <SwiperSlide className="">
          <div className="header_card_slider header_second_slider">
            <h4 className="h4_title bg-black text-white">Romofyi</h4>
            <h3 className="h3_hiper_small_title">Tienda de ropa</h3>
            <p>
              Se desarrollo una tienda en línea utilizando el framework Django y
              JavaScript. Incluye funcionalidades como gestión de usuarios,
              combinaciones de productos según tallas y colores, así como una
              pasarela de pagos y un historial de compras. Para ponerlo a
              prueba. Te invito a explorar el código fuente y el proyecto en los
              siguientes enlaces.
            </p>
            <div>
              <Button
                onClick={() =>
                  navigate("https://juandiazv.pythonanywhere.com/")
                }
                color="danger"
                endContent={<BiStore />}
              >
                Visita la tienda
              </Button>
                <Tooltip content={"Django"} color="default">
                <Button
                  onClick={() =>
                    navigate("https://github.com/JuanDiaz1992/eccomerce")
                  }
                  isIconOnly
                  color="primary"
                >
                  <DiDjango />
                </Button>
              </Tooltip>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="video-container">
          <video autoplay="autoplay" loop="loop" muted playsinline preload="auto"  className="fillWidth visible-lg">
            <source src={video} type="video/mp4"></source>
          </video>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
