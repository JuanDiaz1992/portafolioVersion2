import { FaGithub } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

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
            <p>
            Esta es la lista de otros proyectos que he<br />
            desarrollado, cada uno representa una <br />
            oportunidad para aprender y crecer. <br />
            Explora esta colección que abarca diversos <br />
            desafíos en mi trayectoria de desarrollo. <br />
            ¡Disfruta explorando!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sixth_slider_container--item2">
          <div className="header_card_slider sixth_slider_container-header_card-item2 ">
            <h4 className="h4_title bg-white text-black">WineSur</h4>
            <h3 className="h3_hiper_small_title">Landing tienda Vinos</h3>
            <p>
              Proyecto de landing page para una tienda
              <br />
              de vinos, donde el diseño y la pasión <br />
              por el vino se combinan en una experiencia
              <br />
              cautivadora.
            </p>
            <Button
              onClick={() =>
                navigate("https://github.com/JuanDiaz1992/WineSur")
              }
              isIconOnly
              color="primary"
            >
              <FaGithub />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sixth_slider_container--item3">
          <div className="header_card_slider sixth_slider_container-header_card-item3 ">
            <h4 className="h4_title bg-black text-white">Gesthor</h4>
            <h3 className="h3_hiper_small_title">Ingeniería eléctrica</h3>
            <p>
              Web del grupo gesthor para la parte <br />
              encargada de la Ingeniería eléctrica.
              <br />
            </p>
            <div>
              <Button
                onClick={() => navigate("https://gesthor.com.co/")}
                color="danger"
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
                <FaGithub />
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sixth_slider_container--item4">
          <div className="header_card_slider sixth_slider_container-header_card-item4 ">
            <h4 className="h4_title bg-black text-white">Imanku Solutions</h4>
            <h3 className="h3_hiper_small_title">Contador de votos</h3>
            <p>
              Se ha creado un software para el conteo de votos <br />
              de elecciones en los últimos años para Estados Unidos. <br />
              Procesa datos de Excel o JSON, realiza conteos y <br />
              estadísticas específicas para el cliente. Permite <br />
              ingresar votos individuales. Para el ingreso, el <br />
              usuario debe estar registrado.<br />
            </p>
            <div>
              <Button
                onClick={() =>
                  navigate(
                    "https://github.com/JuanDiaz1992/contador_de_votaciones"
                  )
                }
                isIconOnly
                color="primary"
              >
                <FaGithub />
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sixth_slider_container--item5">
          <div className="header_card_slider sixth_slider_container-header_card-item5 ">
            <h4 className="h4_title bg-black text-white">BOOCIC</h4>
            <h3 className="h3_hiper_small_title">Bienestar personal</h3>
            <p>
            Landing page cuya finalidad es ser una plataforma <br />
            que ofrece recursos y herramientas para mejorar <br />
            el bienestar personal y ayudar a los usuarios a <br />
            alcanzar sus objetivos.<br />
            </p>
            <Button
              onClick={() => navigate("https://github.com/JuanDiaz1992/BOOCIC")}
              isIconOnly
              color="primary"
            >
              <FaGithub />
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
