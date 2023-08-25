import video from "../../img/newHome/Web/video1.2.1.mp4";
import slider2 from "../../img/newHome/sliders/slider2.webp";
import slider3 from "../../img/newHome/sliders/slider3.webp";
import slider4 from "../../img/newHome/sliders/slider4.webp";
import { Button } from "@nextui-org/react"
import { motion } from "framer-motion";
import { BiStore } from "react-icons/bi";
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
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper second_slider_container">
                    <SwiperSlide className="second_slider_container--item"></SwiperSlide>
                    <SwiperSlide className="">
                        <div className="header_card_slider header_second_slider">
                            <h4>Romofyi</h4>
                            <h3>Tienda de ropa</h3>
                            <p>
                              Se desarrollo una tienda en línea utilizando el 
                              framework Django y JavaScript. Incluye funcionalidades como 
                              gestión de usuarios, combinaciones de productos según tallas y 
                              colores, así como una pasarela de pagos y un historial de compras. 
                              Para ponerlo a prueba, lo desplegamos en el servicio AWS. Te invito a 
                              explorar el código fuente y el proyecto en los siguientes enlaces.
                            </p>
                            <div>
                              <Button onClick={()=>navigate("http://18.228.3.242/")} color="danger" endContent={<BiStore/>}>Visita la tienda</Button>
                              <Button onClick={()=>navigate("https://github.com/JuanDiaz1992/eccomerce")} isIconOnly  color="primary" ><FaGithub/></Button>
                            </div>
                            
                        </div>
                    </SwiperSlide>
                      
                    <SwiperSlide className="video-container">
                      <video loop autoPlay muted className="fillWidth visible-lg" >
                        <source src={video} type="video/mp4" ></source>
                      </video>
                    </SwiperSlide>
                </Swiper>

        </>
    )
}
export default Slider