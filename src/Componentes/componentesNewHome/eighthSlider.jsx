import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const img1 = "/img/newHome/section3/3dimg1.webp";
function Slider() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper eighth_slider_container"
      >
        <SwiperSlide className="eighth_slider_container--item1">
          <div
            className="my-atropos"
          >
            <div className="header_fourth_slider--item1 py-[40px] px-[24px]">
              <h2 className="h4_title bg-black text-white">Interfaces</h2>
              <h3>Diseño web</h3>
              <p className="max-w-[290px] w-[100%] text-black mb-[15px]">
                Selección de proyectos de UI Design desarrollados en Figma.
              </p>
            </div>
            <div
              className="eighth_slider_container--item1--img_container"
            >
              <img src={img1} alt="" draggable={false} onDragStart={(e)=>e.preventDefault()} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="eighth_slider_container--item2"></SwiperSlide>
        <SwiperSlide className="eighth_slider_container--item3"></SwiperSlide>
        <SwiperSlide className="eighth_slider_container--item4"></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
