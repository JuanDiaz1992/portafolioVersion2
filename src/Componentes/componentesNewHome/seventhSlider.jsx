import { Button } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Slider({visiteWeb}) {

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
            <p className="max-w-[300px] mb-[15px]">
              Un diseño desactualizado y poco intuitivo se fusionó en un lenguaje de diseño coherente que resulta moderno, flexible y elegante.
            </p>
            <Button
              onClick={() => visiteWeb("https://crediar.com.co/")}
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
