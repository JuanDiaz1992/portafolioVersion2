import Atropos from 'atropos/react';
import img1 from "../../img/newHome/section3/3dimg1.png"
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
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper eighth_slider_container">
                    <SwiperSlide className="eighth_slider_container--item1">
                      <Atropos  className='my-atropos'                              
                                activeOffset={40}
                                shadow={false}
                                highlight={true}
                                rotateXMax={3}
                                rotateYMax={3}>
                                <div className="header_fourth_slider--item1" >
                                    <h4 data-atropos-offset="3">Interfaces</h4>
                                    <h3 data-atropos-offset="10">Diseño web</h3>
                                    <p data-atropos-offset="1">
                                      Aquí están algunos proyectos en Figma donde<br/>
                                      me encargaron diseñar exclusivamente la interfaz gráfica.<br/><br/>
                                    </p>
                                </div>
                                <div className='eighth_slider_container--item1--img_container' data-atropos-offset="0">
                                  <img src={img1} alt="" />
                                </div>
                      </Atropos>
                    </SwiperSlide>
                    <SwiperSlide className="eighth_slider_container--item2"></SwiperSlide>
                    <SwiperSlide className="eighth_slider_container--item3"></SwiperSlide>
                </Swiper>

        </>
    )
}
export default Slider