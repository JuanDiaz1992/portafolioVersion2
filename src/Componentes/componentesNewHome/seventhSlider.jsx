import video from "../../img/newHome/section3/crediartV.mp4";
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
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper seventh_slider_container">
                    <SwiperSlide className="seventh_slider_container--item1">
                      <div className="header_fourth_slider--item1">
                          <h4>Crediart</h4>
                          <h3>Cooperativa</h3>
                          <p>
                          Un diseño desactualizado y poco intuitivo <br/>
                          se fusionó en un lenguaje de diseño coherente que resulta moderno, flexible y elegante.
                          </p>
                          <Button onClick={()=>navigate("https://crediar.com.co/")} color="primary" >Visitar web</Button>

                      </div>

                    </SwiperSlide>
                    <SwiperSlide className="seventh_slider_container--item2"></SwiperSlide>
                    <SwiperSlide className="seventh_slider_container--item3"></SwiperSlide>
                </Swiper>

        </>
    )
}
export default Slider