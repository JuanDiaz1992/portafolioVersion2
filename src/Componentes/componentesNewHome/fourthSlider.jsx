import { Button, Tooltip } from "@nextui-org/react";
import { DiDjango } from "react-icons/di";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import video from "../../img/newHome/section2/sliders/slider9.mp4";
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
        className="mySwiper fourth_slider_container"
      >
        <SwiperSlide className="fourth_slider_container--item1">
          <div className="header_fourth_slider--item1">
            <h4>CIAF</h4>
            <h3>Gestor materias</h3>
            <p className="max-w-[310px] w-[100%] mb-[15px]">
              Software creado en Django que permite a los estudiantes de CIAF
              matricular materias de la universidad.
              <br />
            </p>
            <Tooltip content={"Django"} color="default">
              <Button
                onClick={() =>
                  navigate(
                    "https://github.com/JuanDiaz1992/Gestor-de-materias-CIAF"
                  )
                }
                isIconOnly
                color="warning"
              >
                <DiDjango />
              </Button>
            </Tooltip>
          </div>
        </SwiperSlide>
        <SwiperSlide className="fourth_slider_container--item2"></SwiperSlide>
        <SwiperSlide className="fourth_slider_container--item3">
          <video loop autoPlay muted className="fillWidth visible-lg">
            <source src={video} type="video/mp4"></source>
          </video>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
