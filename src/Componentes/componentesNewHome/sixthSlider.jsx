import { Button } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaJs, FaReact, FaPython } from "react-icons/fa";

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
        className="mySwiper sixth_slider_container"
        viewport={{ once: true, amount: 1 }}
      >
        <SwiperSlide className="sixth_slider_container--item1">
          <div className="header_card_slider sixth_slider_container-header_card-item1 ">
            <h4 className="h4_title bg-black text-white">Otros</h4>
            <h3 className="h3_hiper_small_title">Otros proyectos</h3>
            <p className="max-w-[290px] w-[100%]">
              Esta es la lista de otros proyectos que he desarrollado, cada uno representa una oportunidad para aprender y crecer. Explora esta colección que abarca diversos desafíos en mi trayectoria de desarrollo. ¡Disfruta explorando!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sixth_slider_container--item2">
          <div className="header_card_slider sixth_slider_container-header_card-item2 ">
            <h2 className="h4_title bg-white text-black">WineSur</h2>
            <h3 className="h3_hiper_small_title">Landing tienda Vinos</h3>
            <p className="max-w-[290px] w-[100%] text-white mb-[15px]">
              Plataforma de bienestar personal que ofrece recursos y herramientas para alcanzar objetivos.            </p>
            <Button
              onClick={() =>
                navigate("https://github.com/JuanDiaz1992/WineSur")
              }
              isIconOnly
              color="primary"
              aria-label="WineSur"
            >
              <FaJs />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sixth_slider_container--item3">
          <div className="header_card_slider sixth_slider_container-header_card-item3 ">
            <h2 className="h4_title bg-black text-white">Gesthor</h2>
            <h3 className="h3_hiper_small_title">Ingeniería eléctrica</h3>
            <p className="max-w-[290px] w-[100%] text-white mb-[15px]">
              Web del grupo gesthor para la parte
              encargada de la Ingeniería eléctrica.
            </p>
            <div>
              <Button
                onClick={() => navigate("https://gesthor.com.co/")}
                color="danger"
                aria-label="gesthor"
              >
                Visita la web
              </Button>
              <Button
                onClick={() =>
                  navigate("https://github.com/JuanDiaz1992/gesthor")
                }
                isIconOnly
                color="primary"
              >
                <FaReact />
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sixth_slider_container--item4">
          <div className="header_card_slider sixth_slider_container-header_card-item4 ">
            <h2 className="h4_title bg-black text-white">Imanku Solutions</h2>
            <h3 className="h3_hiper_small_title">Contador de votos</h3>
            <p className="max-w-[290px] w-[100%] text-white mb-[15px]">
              Software de conteo electoral (EE. UU.) compatible con Excel/JSON; ofrece estadísticas personalizadas y requiere autenticación para registrar votos.            </p>
            <div>
              <Button
                onClick={() =>
                  navigate(
                    "https://github.com/JuanDiaz1992/contador_de_votaciones"
                  )
                }
                isIconOnly
                aria-label="Imanku Solutions"
                color="primary"
              >
                <FaPython />
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sixth_slider_container--item5">
          <div className="header_card_slider sixth_slider_container-header_card-item5 ">
            <h2 className="h4_title bg-black text-white">BOOCIC</h2>
            <h3 className="h3_hiper_small_title">Bienestar personal</h3>
            <p className="max-w-[290px] w-[100%] text-white mb-[15px]">
              Plataforma de bienestar personal que ofrece recursos y herramientas para alcanzar objetivos.            </p>
            <Button
              onClick={() => navigate("https://github.com/JuanDiaz1992/BOOCIC")}
              isIconOnly
              color="primary"
              aria-label="BOOCIC"
            >
              <FaJs />
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
