import Atropos from "atropos/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img1 from "../../img/newHome/section3/3dimg1.webp";
function Slider() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper eighth_slider_container"
      >
        <SwiperSlide className="eighth_slider_container--item1">
          <Atropos
            className="my-atropos"
            activeOffset={40}
            shadow={false}
            highlight={true}
            rotateXMax={3}
            rotateYMax={3}
          >
            <div className="header_fourth_slider--item1">
              <h4 data-atropos-offset="3">Interfaces</h4>
              <h3 data-atropos-offset="10">Diseño web</h3>
              <p data-atropos-offset="1" className="max-w-[290px] w-[100%] text-black mb-[15px]">
                Aquí están algunos proyectos en Figma donde me encargaron diseñar exclusivamente la interfaz gráfica.
              </p>
            </div>
            <div
              className="eighth_slider_container--item1--img_container"
              data-atropos-offset="0"
            >
              <img src={img1} alt="" />
            </div>
          </Atropos>
        </SwiperSlide>
        <SwiperSlide className="eighth_slider_container--item2"></SwiperSlide>
        <SwiperSlide className="eighth_slider_container--item3"></SwiperSlide>
        <SwiperSlide className="eighth_slider_container--item4"></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
