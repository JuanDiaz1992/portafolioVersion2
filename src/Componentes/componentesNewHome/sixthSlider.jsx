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
            <h4>Otros</h4>
            <h3>Otros proyectos</h3>
            <p>
              Esta es la lista de otros proyectos más <br />
              que e desarrollado, cada uno representa <br />
              una oportunidad para aprender y crecer.
              <br />
              Explora esta colección que abarca <br />
              diversos desafíos en mi trayectoria de <br />
              desarrollo. ¡Disfruta explorando!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sixth_slider_container--item2">
          <div className="header_card_slider sixth_slider_container-header_card-item2 ">
            <h4>WineSur</h4>
            <h3>Landing tienda Vinos</h3>
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
            <h4>Gesthor</h4>
            <h3>Ingeniería eléctrica</h3>
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
            <h4>Imanku Solutions</h4>
            <h3>Contador de votos</h3>
            <p>
              Se ha creado un software para el conteo de <br />
              votos de elecciones en los ultimos años para Estados <br />
              Unidos. Procesa datos de Excel o JSON, realiza conteos y <br />
              estadísticas específicas para el cliente. Permite ingresar <br />
              votos individuales. para el ingreso el usuario debe estar <br />
              registrado.
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
            <h4>BOOCIC</h4>
            <h3>Bienestar personal</h3>
            <p>
              Landinpage cuya finalidad es ser una plataforma <br />
              que ofrece recursos y herramientas para mejorar <br />
              el bienestar personal y ayudar a los usuarios a <br />
              alcanzar sus objetivos.
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
