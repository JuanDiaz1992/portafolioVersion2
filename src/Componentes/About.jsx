import React from "react";
import "../stylesheets/about.css"
import { AiOutlineFileText } from "react-icons/ai";
import hv from "../Documentos/Juan Camilo Diaz Valencia HV .pdf"



import Illustrator from "../img/AboutMe/Illustrator.webp"
import Photoshop from "../img/AboutMe/PhotoShop.webp"
import AdobeXD from "../img/AboutMe/AdobeXd.webp"
import Figma from "../img/AboutMe/Figma.webp"
import django from "../img/AboutMe/django.png"
import Cinema4D from "../img/AboutMe/Cinema4D.webp"
import ReactJS from "../img/AboutMe/React.webp"
import Python from "../img/AboutMe/Python.webp"
import javascript from "../img/AboutMe/javascript.png"
import php from "../img/AboutMe/php.png"



function About({handleClickPortf, ClickedPort}){

    return(
        <>




            <section className={`about ${ClickedPort? "desplazado" : ""}`} id="about">
                <h2 className="sobremi">Sobre mí</h2>
                <div className="about__div--container" >

                    <div className="div__container--info">                    
                        
                        <h3 className="disenador">Soy Progamador</h3>
                        <p className="experiencia"><br/>Trabajo para crear soluciones innovadoras que inspiren y fomenten relaciones memorables entre las marcas y sus clientes. <br /> Me esfuerzo por crear productos utilizables y pulidos a través de un diseño apasionado y deliberado.
                        </p>                

                        <div className="contenedor-boton">                            
                            <a className="boton" href={hv} download="Juan Díaz CV" target="_blank" rel="noopener noreferrer" >
                                <span>
                                    <AiOutlineFileText className="documentDownload"/>    
                                    <h4>Download CV</h4>                            
                                </span>            
                            </a>
                        </div>
                    </div>

                    <div className="div__container--icons">  
                        <h3 className="conocimiento">Habilidades</h3>  

                        <ul className="div__container__icons--ul">                            
                            
                            <li className="iconoc">
                                <img src={javascript} alt="css"/>
                                <p>Javascript</p>
                            </li>
                            <li className="PHOTOSHOP iconoc">
                                <img src={ReactJS} alt="html5"/>
                                <p>React JS</p>
                            </li>
                            <li className="AdobeXd iconoc">
                                <img src={php} alt="corel"/>
                                <p>Php</p>
                            </li>
                            <li className="Figma iconoc">
                                <img src={Python} alt="css"/>
                                <p>Python</p>
                            </li>
                            <li className="COREL-DRAW iconoc">
                                <img src={django} alt="css"/>
                                <p>Django</p>
                            </li>
                            <li className="CINEMA-4D iconoc">
                                <img src={Cinema4D} alt="cinema4d"/>
                                <p>Cinema 4D</p>
                            </li>
                            <li className="React iconoc">
                                <img src={Figma} alt="css"/>
                                <p>Figma</p>
                            </li>
                            <li className="Python iconoc">
                                <img src={Photoshop} alt="photshop"/>
                                <p>Photoshop</p>     
                            </li>
                            <li className="Python iconoc">
                                <img src={Illustrator} alt="illustrator"/>
                                <p>Illustrator</p>

                            </li>
                        </ul>                     
                    </div>

                </div>



            </section>
        </>

    )
}

export default About