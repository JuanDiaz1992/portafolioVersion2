import { Button, Tooltip } from "@nextui-org/react";
import { BiStore } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import video from "../../img/newHome/section2/video1.2.1.mp4";
function Slider({visiteWeb}) {

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
            <h2 className="h4_title bg-black text-white">Romofyi</h2>
            <h3 className="h3_hiper_small_title text-black">Tienda de ropa</h3>
            <p className="max-w-[500px] w-[100%] mb-[25px]">
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
                  visiteWeb("https://juandiazv.pythonanywhere.com/")
                }
                color="default"
                endContent={<BiStore />}
                aria-label="eccomerce"
              >
                Visita la tienda
              </Button>
                <Tooltip content={"Django"} color="default">
                <Button
                  onClick={() =>
                    visiteWeb("https://github.com/JuanDiaz1992/eccomerce")
                  }
                  isIconOnly
                  color="primary"
                  aria-label="eccomerce django"
                >
                  <DiDjango />
                </Button>
              </Tooltip>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="video-container">
          <video autoPlay="autoplay" loop="loop" muted playsInline preload="auto"  className="fillWidth visible-lg">
            <source src={video} type="video/mp4"></source>
          </video>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
