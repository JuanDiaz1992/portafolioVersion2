import { Button } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Slider({ visiteWeb }) {

  return (
    <>
      <div
        className="seventh_slider_container"
      >
        <div className="seventh_slider_container--item1">
          <div className="header_fourth_slider--item1">
            <h2>Crediart</h2>
            <h3>Cooperativa</h3>
            <p className="max-w-[300px] mb-[15px]">
              Un diseño desactualizado y poco intuitivo se fusionó en un lenguaje de diseño coherente que resulta moderno, flexible y elegante.
            </p>
            <Button
              onClick={() => visiteWeb("https://crediar.com.co/")}
              color="primary"
              aria-label="crediar"
            >
              Visitar web
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
