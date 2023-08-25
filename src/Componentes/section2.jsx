import "../stylesheets/section2.css";
import { Button } from "@nextui-org/react";
import me from "../img/newHome/Banner.webp"
import {  FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import SecondSlider from "./componentesNewHome/SecondSlider"


function Section2(props){

    const objects = {
        offscreen: {
          y: 30
        },
        onscreen: {
          y: 0,
          transition: {
            type: "spring",

          }
        }
      };
      
    return(
        <>
            <section className="section2_container">
                <div className="section2_container--div1">
                    <div className="header_FoodEasy_container">
                            <h4>FoodEasy</h4>
                            <h3>Restaurante</h3>
                            <p> 
                                Este software creado en React JS y PHP <br/>
                                se está implementando como  una solución para <br/> 
                                restaurantes en donde se desea llevar <br/>
                                un control de inventarios, empleados, gastos y ventas <br/> 
                                manejando una interfaz sencilla, fácil de <br/> 
                                entender.

                            </p>
                            <div>
                                <Button color="warning" >Próximamente</Button>
                                <Button onClick={()=>props.visiteWeb("https://github.com/JuanDiaz1992/Gestor-Restaurante-Frontend")} isIconOnly  color="default" ><FaGithub/></Button>
                            </div>
                            
                    </div>
                </div>
                <div className="section2_container--div2" >
                    <h4 className="big_about_me">ABOUT ME.</h4>
                    <div className="section2_container--div2--container" viewport={{ once: true, amount: 1 }}>
                        <div className="picture_me_container">
                            <motion.img src={me}
                                        variants={objects}
                                        initial="offscreen"
                                        whileInView="onscreen" alt="profilePhoto" />
                        </div>
                        <div className="about_container">
                        <div>
                                <p>
                                    ¡Hola! Me llamo Juan Díaz y soy programador y desarrollador web.<br/>
                                    Actualmente, me encuentro estudiando una ingeniería en software en CIAF, lo que me ha permitido explorar varios lenguajes de programación.
                                    Cuento con bases sólidas en HTML, CSS y JavaScript. Me emocioné al descubrir cómo estas herramientas pueden dar vida a ideas creativas en forma de hermosas y funcionales interfaces.<br/>
                                    Además, cuento con experiencia en el desarrollo utilizando PHP y Python. Estos lenguajes me han permitido abordar desafíos desde diferentes ángulos y ampliar mis capacidades como desarrollador.<br/>
                                </p>
                        </div>
                        </div>
                    </div>

                </div>
                <div className="section2_container--div3">
                    <SecondSlider/>
                </div>
                <div className="section2_container--div4"></div>
                <div className="section2_container--div5"></div>
            </section>
        </>
    )
}
export default Section2