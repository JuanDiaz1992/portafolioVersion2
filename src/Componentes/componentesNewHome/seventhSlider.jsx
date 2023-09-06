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
        className="mySwiper seventh_slider_container"
      >
        <SwiperSlide className="seventh_slider_container--item1">
          <div className="header_fourth_slider--item1">
            <h4>Crediart</h4>
            <h3>Cooperativa</h3>
            <p>
              Un diseño desactualizado y poco intuitivo <br />
              se fusionó en un lenguaje de diseño <br />
              coherente que resulta moderno,<br />
              flexible y elegante.
            </p>
            <Button
              onClick={() => navigate("https://crediar.com.co/")}
              color="primary"
            >
              Visitar web
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="seventh_slider_container--item2"></SwiperSlide>
        <SwiperSlide className="seventh_slider_container--item3"></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
