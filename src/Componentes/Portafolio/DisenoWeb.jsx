import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillGithub,AiOutlineDatabase,AiOutlineDesktop } from "react-icons/ai";

import Planilla1 from "./Planilla1"
import GoToTop from "../funciones/OnTop.js"

import gesthorLogo from "../../img/Portafolio/Web/iconoGesthor.webp"
import figma from "../../img/Portafolio/Web/figma.png"
import img1 from "../../img/Portafolio/Web/img1.jpg"

import img2 from "../../img/Portafolio/Web/img2.jpg"
import img3 from "../../img/Portafolio/Web/img3.jpg"
import img3_1 from "../../img/Portafolio/Web/img3.1.jpg"
import img3_2 from "../../img/Portafolio/Web/img3.2.jpg"
import img1_3 from "../../img/Portafolio/Web/img3.3.jpg"
import video1 from "../../img/Portafolio/Web/video1.2.1.mp4"
import video1_3 from "../../img/Portafolio/Web/video1.3.mp4"
import video1_4 from "../../img/Portafolio/Web/video1.4.mp4"
import video1_5 from "../../img/Portafolio/Web/video1.5.mp4"
import img4 from "../../img/Portafolio/Web/img4.jpg"
import video2 from "../../img/Portafolio/Web/video2.1.mp4"
import img5 from "../../img/Portafolio/Web/img5.1.jpg"
import img6 from "../../img/Portafolio/Web/img6.jpg"
import img7 from "../../img/Portafolio/Web/img7.jpg"
import img8 from "../../img/Portafolio/Web/img8.jpg"
import img9 from "../../img/Portafolio/Web/img9.jpg"
import img10 from "../../img/Portafolio/Web/img10.jpg"
import img11 from "../../img/Portafolio/Web/img11.jpg"
import video3 from "../../img/Portafolio/Web/video3.mp4"
import video4 from "../../img/Portafolio/Web/video4.mp4"
import video5 from "../../img/Portafolio/Web/video5.mp4"
import video6 from "../../img/Portafolio/Web/video6.mp4"
import video7 from "../../img/Portafolio/Web/video7.mp4"
import video8 from "../../img/Portafolio/Web/video8.mp4"
import video9 from "../../img/Portafolio/Web/video9.mp4"

import "../../stylesheets/Portafolio/DisenoWeb.css"

function DisenoWeb(props){


    const navigate = useNavigate(); 

    return(
        <div className="disenoWeb__container">  
            <button className="nav_toggle fixed" onClick={() => navigate(-1)}>
                <div className="icon nav-icon-5 open">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                </div>            
            </button>

        <section className="title">
            <div className="title__div--container">
                <h2>Diseño Web</h2>
                <p>Esta es una selección de proyectos en los que he trabajado como diseñador y maquetador web.</p>
            </div>
        </section>


        <Planilla1

            titulo={<h3>Gesthor</h3>}
            img1={img1}
            p2={<><strong>Gesthor</strong> es una empresa que ofrece servicios de ingeniería eléctrica. Para mejorar su presencia en línea, se me encomendó la tarea de diseñar y desarrollar su sitio web, el cual se enfoca en mostrar los servicios que ofrecen. La página cuenta con diseño responsivo para garantizar su correcta visualización en dispositivos móviles y tablets. Para su creación, se utilizó la tecnología React Js. </>}
            links={<> <a href="http://gesthor.com.co/" target="blank" className=""><picture><img className="logoGesthor iconoLink" src={gesthorLogo} alt="" /></picture></a>
            <a href="https://github.com/JuanDiaz1992/gesthor" target="blank" className="iconoLink"><AiFillGithub/></a></>}
            imgOvideo={<img src={img2} alt="" />}
            />


        <Planilla1
            titulo={<h3>Romofyi</h3>}
            img1={img3}
            p2={<>Estoy trabajando en un proyecto de tienda virtual, el cual está siendo desarrollado con el framework Django. La plataforma cuenta con un carrito de compras funcional, gestión de usuarios, detalles de productos y un sistema de comentarios para que los usuarios puedan compartir su opinión sobre los productos. Si estás interesado en ver el proyecto en acción, puedes visitar el repositorio en línea o el servidor de pruebas.
                        </>}
            links={<><a href="https://github.com/JuanDiaz1992/eccomerce" target="blank" className="iconoLink"><AiFillGithub/></a>
            <a href="http://18.228.3.242/" target="blank" className="iconoLink"><AiOutlineDatabase/></a></>}
            imgOvideo={<video className="video1" src={video1} autoPlay={true} muted={true} loop={true}/>}
                />


        <Planilla1
            titulo={<h3>Wine Sur</h3>}
            img1={img3_1}
            p2={<>La página Wine Sur es una plataforma en línea que ofrece una amplia selección de vinos de alta calidad de todo el mundo. Con una interfaz fácil de usar, los visitantes pueden navegar por las diferentes categorías de vinos y leer descripciones detalladas de cada uno
                        </>}
            links={<><a href="https://github.com/JuanDiaz1992/WineSur" target="blank" className="iconoLink"><AiFillGithub/></a>
            </>}
            imgOvideo={<video className="video1" src={video1_3} autoPlay={true} muted={true} loop={true}/>}
                />


        <Planilla1
            titulo={<h3>BOOCIC</h3>}
            img1={img3_2}
            p2={<>Landinpage cuya finalidad es ser una plataforma que ofrece recursos y herramientas para mejorar el bienestar personal y ayudar a los usuarios a alcanzar sus objetivos.
                        </>}
            links={<><a href="https://github.com/JuanDiaz1992/BOOCIC" target="blank" className="iconoLink"><AiFillGithub/></a>
            </>}
            imgOvideo={<video className="video1" src={video1_4} autoPlay={true} muted={true} loop={true}/>}
                />


        <Planilla1
            titulo={<h3>Gestor de materias CIAF</h3>}
            img1={img1_3}
            p2={<>Esta aplicación ha sido diseñada para ayudar a los estudiantes universitarios a organizar su carga académica y planificar horarios de clases eficientemente. Agrega y elimina materias y registra el número de créditos de cada una. También visualiza el horario de clases para una planificación de estudio efectiva.
                        </>}
            links={<><a href="https://github.com/JuanDiaz1992/Gestor-de-materias-CIAF" target="blank" className="iconoLink"><AiFillGithub/></a>
            </>}
            imgOvideo={<video className="video1" src={video1_5} autoPlay={true} muted={true} loop={true}/>}
                />

        <div className="title title2">
            <div className="title__div--container">
                <h2>Wordpress</h2>
            </div>
        </div>

        <Planilla1
            titulo={<h3>Arte y Pintura</h3>}
            img1={img6}
            p2={<>En este proyecto, desarrollé una tienda en línea para una tienda de arte, proporcionando una experiencia de compra conveniente y segura. Utilicé mis habilidades de desarrollo web y diseño para crear una interfaz atractiva y funcional. Implementé un sistema de carrito de compras, funciones de favoritos y compartición en redes sociales. La tienda se optimizó para dispositivos y se aseguró una experiencia fluida.
                        </>}
            links={<><a href="https://gesthor.com.co/arte/" target="blank" className="iconoLink"><AiOutlineDesktop/></a></>}
            imgOvideo={<video className="video1" src={video4} autoPlay={true} muted={true} loop={true}/>}
        />

        <Planilla1
            titulo={<h3>Estilo Dani</h3>}
            img1={img7}
            p2={<>Desarrollé una web para un spa que ofrece servicios de uñas y arreglos de cabello para hombres y mujeres. Creé una interfaz atractiva con servicios de estilismo, reservas en línea y secciones informativas sobre productos y estilistas. Diseñé la página para adaptarse a diferentes dispositivos, garantizando una experiencia fluida.
                        </>}
            links={<><a href="https://gesthor.com.co/spa/" target="blank" className="iconoLink"><AiOutlineDesktop/></a></>}
            imgOvideo={<video className="video1" src={video5} autoPlay={true} muted={true} loop={true}/>}
        />

        <Planilla1
            titulo={<h3>Crediar</h3>}
            img1={img11}
            p2={<>Esta web se diseño con el fin de mostrar los servicios de la empresa y poder solicitar créditos por medio de la misma.
                        </>}
            links={<><a href="https://crediar.com.co/" target="blank" className="iconoLink"><AiOutlineDesktop/></a></>}
            imgOvideo={<video className="video1" src={video9} autoPlay={true} muted={true} loop={true}/>}
        />



        <div className="title title2">
            <div className="title__div--container">
                <h2>Diseño de interfaces</h2>
            </div>
        </div>

        <Planilla1
            titulo={<h3>Al Dia</h3>}
            img1={img4}
            p2={<><strong>Al Dia</strong> es una app que está en proceso de desarrollo
            lo que pretende es generar declaraciones de renta.<br/>
            En este proyecto se me solicitó generar la interfaz gráfica de la app la cuál pretende funcionar en IOS y Android.</>}
            links={<><a href="https://www.figma.com/proto/QAErgpikfQlE4TO7gfps5T/Al-D%C3%8DA?node-id=1%3A2&starting-point-node-id=1%3A2&scaling=scale-down" target="blank" className=""><img className="figmaLogo iconoLink" src={figma} alt="" /></a></>}
            imgOvideo={<video className="video1" src={video2} autoPlay={true} muted={true} loop={true}/>
            }
                    />



        <Planilla1
            titulo={<h3>Loco Jack</h3>}
            img1={img8}
            p2={<>Aquí se creo una interfaz móvil para una tienda de accesorios para hombre, se creo desde el logo y la paleta de colores.</>}
            links={<><a href="https://www.figma.com/proto/D7E75lmIJeP3BK1ZhJQhm6/Untitled?type=design&node-id=1-2&scaling=scale-down&page-id=0%3A1" target="blank" className="iconoLink"><img className="figmaLogo iconoLink" src={figma} alt="" /></a></>}
            imgOvideo={<video className="video1" src={video6} autoPlay={true} muted={true} loop={true}/>
            }
                    />

        <Planilla1
            titulo={<h3>NUEVAMUTUASANITARIA</h3>}
            img1={img9}
            p2={<>Se realizó la interfaz para la eps Nuevamutuasanitaria reflejando al maximo los colores corporativos</>}
            links={<><a href="https://www.figma.com/proto/DJwNO91ikrMxS7tLCAml33/Untitled?type=design&node-id=1-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2" target="blank" className="iconoLink"><img className="figmaLogo iconoLink" src={figma} alt="" /></a></>}
            imgOvideo={<video className="video1" src={video7} autoPlay={true} muted={true} loop={true}/>
            }
                    />

        <Planilla1
            titulo={<h3>My Economy</h3>}
            img1={img10}
            p2={<>Diseño de interfaz para correo para de My Economy</>}
            links={<><a href="https://www.figma.com/proto/ssZenTmu04LoAntiK67L6a/MyConomy?type=design&node-id=1-2&scaling=min-zoom&page-id=0%3A1" target="blank" className="iconoLink"><img className="figmaLogo iconoLink" src={figma} alt="" /></a></>}
            imgOvideo={<video className="video1" src={video8} autoPlay={true} muted={true} loop={true}/>
            }
                    />


        <Planilla1
            titulo={<h3>Biblioteca Ciaf</h3>}
            img1={img5}
            p2={<>Diseño de modulo para la biblioteca de la universidad CIAF, a solicitud del usuario requerían un diseño sencillo pero colorido respetando los colores de la universidad, querían iconos grandes y fáciles de ver y que todo se manejara desde la misma página, actualmente me encuentro finalizando este proyecto</>}
            links={<><a href="https://github.com/JuanDiaz1992/BibliotecaCiaf" target="blank" className="iconoLink"><AiFillGithub/></a></>}
            imgOvideo={<video className="video1" src={video3} autoPlay={true} muted={true} loop={true}/>
            }
                    />






            <h3 className="gracias">¡Gracias por llegar hasta aquí! 😁</h3>
            




<GoToTop/>



        
        </div>

    )
}

export default DisenoWeb

