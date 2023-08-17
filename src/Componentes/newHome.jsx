import "../stylesheets/newHome.css"
import logo from "../img/Imginicio/Logo-JuanDiaz-4.png"
import logoFondo from "../img/Imginicio/LogofondoClaro.png"

import { FaPython, FaJs, FaReact, FaPhp, FaFigma, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiAdobeillustrator, SiAdobephotoshop, SiDjango, SiCinema4D, SiGmail, SiWhatsapp } from 'react-icons/si';
import {Tooltip, Button} from "@nextui-org/react";
import { motion } from "framer-motion";


function NewHome(){

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
                            <div className="iconoc">
                                <Tooltip content="JavaScript" color="default">
                                    <Button color="foreground" variant="flat">
                                        <FaJs />
                                    </Button>
                                </Tooltip>
                            </div>
                            <div className="iconoc">
                                <Tooltip content="React Js" color="default">
                                    <Button color="foreground" variant="flat">
                                        <FaReact />
                                    </Button>
                                </Tooltip>
                            </div>
                            <div className="iconoc">
                                <Tooltip content="PHP" color="default">
                                    <Button color="foreground" variant="flat">
                                        <FaPhp />
                                    </Button>
                                </Tooltip>
                            </div>
                            <div className="iconoc">
                                <Tooltip content="Python" color="default">
                                    <Button color="foreground" variant="flat">
                                        <FaPython  />
                                    </Button>
                                </Tooltip>
                            </div>
                            <div className="iconoc">
                                <Tooltip content="Django" color="default">
                                    <Button color="foreground" variant="flat">
                                        <SiDjango />
                                    </Button>
                                </Tooltip>
                            </div>
                            <div className="iconoc">
                                <Tooltip content="Cinema 4D" color="default">
                                    <Button color="foreground" variant="flat">
                                    <SiCinema4D />
                                    </Button>
                                </Tooltip>
                            </div>
                            <div className="iconoc">
                                <Tooltip content="Figma" color="default">
                                    <Button color="foreground" variant="flat">
                                        <FaFigma />
                                    </Button>
                                </Tooltip>
                            </div>
                            <div className="iconoc">
                                <Tooltip content="Photo Shop" color="default">
                                    <Button color="foreground" variant="flat">
                                        <SiAdobephotoshop />
                                    </Button>
                                </Tooltip>
                            </div>
                            <div className="iconoc">
                                <Tooltip content="Illustrator" color="default">
                                    <Button color="foreground" variant="flat">
                                        <SiAdobeillustrator />
                                    </Button>
                                </Tooltip>
                            </div>
                        </div>                     
                    </div>
                </div>
                <div className="section_container-div4"></div>
                <div className="section_container-div5"></div>

                <div className="section_container-div6">
                    <div className="section_container-div6-icons_container">
                        <div className="contact_icons">
                            <FaLinkedin  />
                        </div>
                        <div className="contact_icons">
                            <a href="mailto:juannavegante2010@gmail.com?subject=Greetings"  ><SiGmail /></a>
                            
                            {/* <a href="mailto:juannavegante2010@gmail.com?subject=Greetings">correo</a> */}
                        </div>
                        <div className="contact_icons">
                            <SiWhatsapp />
                        </div>
                        <div className="contact_icons">
                            <FaGithub />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default NewHome