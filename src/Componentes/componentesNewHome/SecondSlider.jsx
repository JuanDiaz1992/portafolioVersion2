import { Button, Tooltip } from "@nextui-org/react";
import { BiStore } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import logo from "../../img/newHome/section2/logo-catleya.svg"
import img2 from "../../img/newHome/section2/img3-2.webp";
import img3 from "../../img/newHome/section2/img3-3.webp"
import img4 from "../../img/newHome/section2/img3-4.webp"
function Slider({ visiteWeb }) {

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper second_slider_container"
      >
        <SwiperSlide className="second_slider_container--item p-[40px] flex items-start justify-center">
          <img src={logo} alt="" className="w-[200px] hidden md:block" />
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="header_card_slider header_second_slider">
            <h2 className="h4_title bg-black text-white">Hotel Catleya Royal Club</h2>
            <h3 className="h3_hiper_small_title text-white">Servicios de Alojamiento</h3>
            <p className="max-w-[500px] w-[100%] mb-[25px] text-white">
              Desarrollé la plataforma web integral para Catleya Royal Club, un proyecto que integra una experiencia de usuario de alto nivel con un sistema complejo de gestión hotelera. Como Frontend Developer, construí la interfaz completa utilizando React y Vite, enfocándome en la fluidez de la navegación y la seguridad en el flujo de pagos. Trabajé en estrecha colaboración con el equipo de backend (Laravel) para asegurar una integración eficiente de los datos, logrando una interfaz rápida, intuitiva y a la altura de la exclusividad del hotel.
            </p>
            <div>
              <Button
                onClick={() =>
                  visiteWeb("https://catleyaroyalclub.com")
                }
                color="default"
                aria-label="web"
              >
                Visita la web
              </Button>
              <Tooltip content={"React Js"} color="default">
                <Button isIconOnly color="primary" aria-label="gesthordesign" className="cursor-default">
                  <FaReact size={30} />
                </Button>
              </Tooltip>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-[#D9D9D9] hidden md:block">
          <div className="w-full h-full flex justify-center items-center">
            <img src={img2} alt="" className="w-[90%] contain rounded-xl" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#D9D9D9] hidden md:block">
          <div className="w-full h-full flex justify-center items-center">
            <img src={img3} alt="" className="w-[90%] contain rounded-xl" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#D9D9D9] hidden md:block">
          <div className="w-full h-full flex justify-center items-center">
            <img src={img4} alt="" className="w-[90%] contain rounded-xl" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
