import video from "../../img/newHome/sliders/slider9.mp4";
import { Button } from "@nextui-org/react"
import {  FaGithub } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

function Slider (){


    const navigate = (url) => {
        setTimeout(() => {
          window.open(url, "_blank");
        }, 600);
      };
    return(
        <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper fourth_slider_container">
                    <SwiperSlide className="fourth_slider_container--item1">
                      <div className="header_fourth_slider--item1">
                          <h4>CIAF</h4>
                          <h3>Administrador de materias</h3>
                          <p>
                            Software creado en Django que permite a los estudiantes de CIAF matricular materas de la universidad.<br/>
                          </p>
                          <Button onClick={()=>navigate("https://github.com/JuanDiaz1992/Gestor-de-materias-CIAF")} isIconOnly  color="warning" ><FaGithub/></Button>

                      </div>

                    </SwiperSlide>
                    <SwiperSlide className="fourth_slider_container--item2">

                    </SwiperSlide>
                    <SwiperSlide className="fourth_slider_container--item3">
                      <video loop autoPlay muted className="fillWidth visible-lg" >
                        <source src={video} type="video/mp4" ></source>
                      </video>
                    </SwiperSlide>
                </Swiper>

        </>
    )
}
export default Slider