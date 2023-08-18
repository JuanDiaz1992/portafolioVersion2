import "../stylesheets/newHome.css"
import logo from "../img/Imginicio/Logo-JuanDiaz-4.png"
import logoFondo from "../img/Imginicio/LogofondoClaro.png"

import { FaPython, FaJs, FaReact, FaPhp, FaFigma, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiAdobeillustrator, SiAdobephotoshop, SiDjango, SiCinema4D, SiGmail, SiWhatsapp } from 'react-icons/si';
import {Tooltip, Button} from "@nextui-org/react";
import { motion } from "framer-motion";


function NewHome(){
    const skills =[
        [<FaJs />,"JavaScript"],
        [<FaReact />,"React JS"],
        [<FaPhp />,"PHP"],
        [<FaPython />,"Python"],
        [<SiDjango />,"Django"],
        [<SiCinema4D />,"Cinema 4D"],
        [<FaFigma />,"Figma"],
        [<SiAdobephotoshop />,"Photoshop"],
        [<SiAdobeillustrator />,"Illustrator"],
    ]

    return(
        <>
            <section className="section_container">
                <motion.div className="section_container-div1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                        delay:.5,
                        duration: 1,
                        ease: "linear"
                }}>
                    <motion.img className="logo" src={logo} alt="logo"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ 
                        delay:1,
                        duration: 0.4,
                        ease: "linear", 
                    }} />
                    <motion.img className="logoFondo" src={logoFondo} alt="logoFondo"
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -150, opacity: 0 }}
                    transition={{ 
                    delay:1,
                    duration: 0.9,
                    ease: [0, 0.71, 0.2, 1.01], }}/>
                </motion.div>
                <div className="section_container-div2">
                    <h1>Hola 👋</h1>
                    <p>
                        Soy Juan Diaz, creo soluciones innovadoras que inspiran y fomentan relaciones memorables entre las marcas y sus clientes.
                    </p>
                </div>
                <div className="section_container-div3">
                    <div className="div__container-div3--icons">  
                        <h3 className="div__container-div3--icons--h3">Habilidades</h3>  

                        <div className="div__container__icons--container">    
                            {skills.map((skill)=>(
                                <div className="iconoc" key={skill} >
                                    <Tooltip  content={skill[1]} color="default">
                                        <Button color="foreground" variant="flat">
                                            {skill[0]}
                                        </Button>
                                    </Tooltip>
                                </div>
                            ))}
                        </div>                     
                    </div>
                </div>
                <div className="section_container-div4"></div>
                <div className="section_container-div5"></div>

                <div className="section_container-div6">
                    <div className="section_container-div6-icons_container">
                        <div className="contact_icons">
                            <a href="https://www.linkedin.com/in/juan-camilo-diaz-valencia-020840141" target="blank"><FaLinkedin  /></a>
                            
                        </div>
                        <div className="contact_icons">
                            <a href="mailto:juannavegante2010@gmail.com?subject=Greetings"  ><SiGmail /></a>
                        </div>
                        <div className="contact_icons">
                            <a href="https://api.whatsapp.com/send?phone=573008080525&text=Hola%20Juan%20D%C3%ADaz%2C%20vi%20tu%20web" target="blank"><SiWhatsapp /></a>
                            
                        </div>
                        <div className="contact_icons">
                            <a href="https://github.com/JuanDiaz1992" target="blank"><FaGithub /></a>
                            
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default NewHome