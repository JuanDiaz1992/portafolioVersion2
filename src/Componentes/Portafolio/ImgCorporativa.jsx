import React from "react";
import "../../stylesheets/Portafolio/ImgCorp.css"
import { useNavigate } from "react-router-dom";
import GoToTop from "../funciones/OnTop.js"



import PapeleriaPlantilla from "./Papeleria"

import img1 from "../../img/Portafolio/Diseño de imagen/img1.webp"
import palacios from "../../img/Portafolio/Diseño de imagen/palacios.jpg"
import PaolaLeon from "../../img/Portafolio/Diseño de imagen/PaolaLeon.jpg"
import Corma from "../../img/Portafolio/Diseño de imagen/Corma.jpg"
import pae from "../../img/Portafolio/Diseño de imagen/PAE.jpg"
import astracol from "../../img/Portafolio/Diseño de imagen/Astracol.jpg"
import Dani from "../../img/Portafolio/Diseño de imagen/Dani.jpg"
import gesthor from "../../img/Portafolio/Diseño de imagen/gesthor.jpg"
import haddy from "../../img/Portafolio/Diseño de imagen/haddy.jpg"
import videoNoel from "../../img/Portafolio/Diseño de imagen/noel.1.mp4"
import img_1 from "../../img/Portafolio/Diseño de imagen/img3.1.jpg"
import img2 from "../../img/Portafolio/Diseño de imagen/img3.jpg"
import img3 from "../../img/Portafolio/Diseño de imagen/img3.2.jpg"
import img4 from "../../img/Portafolio/Diseño de imagen/img4.jpg"
import img4_3 from "../../img/Portafolio/Diseño de imagen/img4.3.jpg"
import img5 from "../../img/Portafolio/Diseño de imagen/img4.2.jpg"

function ImgCorporativa(){
    const navigate = useNavigate(); 

    return(
        <>
        
        <div className="imgCorporativa__container">
            <button className="nav_toggle fixed" onClick={() => navigate(-1)}>
                    <div className="icon nav-icon-5 open">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                    </div>            
                </button>

            

            <section className="title">
                <div className="title__div--container">
                    <h2>Diseño Gráfico</h2>
                    <p className="corpo">Esta es una colección de diseños que he realizado durante los últimos años. <br/>
                    Aquí es donde cobran vida con la magia de los vectores. <br/>
                    Una gran parte del trabajo a continuación fue realizado a mano y hecho a medida para adaptarse adecuadamente a las necesidades estéticas del cliente.</p>
                </div>
            </section>
            
            <picture className="Banner1">
                <img src={img1} alt="" />
            </picture>
            <div className="imgCorporativa__title--containter">
            <h3 className="">Logos</h3>
            <p className="textIntros--p">En esta sección, presento una selección de mis diseños de logotipos. Cada logotipo ha sido diseñado para reflejar la personalidad y los valores de la empresa o marca correspondiente. He utilizado mi experiencia en diseño gráfico y mi creatividad para crear logotipos únicos y memorables que destacan en el mercado y atraen a su público objetivo. Espero que disfrutes viendo mis diseños de logotipos y encuentres inspiración para tu próximo proyecto de branding.</p>
            </div>

            <section className="section2__logos">
                <div className="logo_containerItem">
                    <picture className="LogoItem">
                        <img src={palacios} alt="" />
                    </picture>
                    <picture className="LogoItem">
                        <img src={PaolaLeon} alt="" />
                    </picture>
                </div>
                <div className="logo_containerItem">
                    <picture className="LogoItem">
                        <img src={pae} alt="" />
                    </picture>
                    <picture className="LogoItem">
                        <img src={Corma} alt="" />
                    </picture>
                </div>
                <div className="logo_containerItem">
                    <picture className="LogoItem">
                        <img src={astracol} alt="" />
                    </picture>
                    <picture className="LogoItem">
                        <img src={Dani} alt="" />
                    </picture>
                </div>
                <div className="logo_containerItem">
                    <picture className="LogoItem">
                        <img src={gesthor} alt="" />
                    </picture>
                    <picture className="LogoItem">
                        <img src={haddy} alt="" />
                    </picture>
                </div>                
            </section>






            <section className="sectionPaleria">
                <div className="imgCorporativa__title--containter">
                    <h3 className="">Papeleria</h3>
                </div>
            <div className="textIntroPaleleria--container">
                <p className="textIntros--p">
                    Esta sección muestra mis diseños de papelería a lo largo de mi carrera. Cada proyecto ha sido creado para reflejar la identidad de la marca y comunicarse efectivamente con su público objetivo. Espero que disfrutes viendo mi trabajo y te inspire para tu próximo proyecto de diseño de papelería.
                </p>
            </div>

            <PapeleriaPlantilla
                titulo ={<h3>Brochure Noel</h3>}
                img1 = {<img className="imgPapeleria" src={img_1} alt="img" />}
                imgOvideo={<video className="videoNoel" src={videoNoel} autoPlay={true} muted={true} loop={true}></video>}
                p2 = {<>Uno de mis primeros trabajos fue crear un brochure para la empresa <strong>Noel</strong>. Mi objetivo era mostrar los productos de la empresa de forma clara y atractiva. Trabajé en colaboración con el equipo de marketing de Noel para asegurarme de que el contenido fuera relevante para el público objetivo. Esta experiencia me permitió desarrollar mis habilidades en diseño gráfico y trabajar en equipo.</>}
            />




            <PapeleriaPlantilla
            titulo ={<h3>Catálogo Romance</h3>}
            img1 = {<img className="imgPapeleria" src={img2} alt="img" />}
            imgOvideo={<img src={img3} alt="" />}
            p2 = {<>El diseño del catálogo <strong>Romance</strong> es moderno y atractivo, con colores vibrantes y estilos frescos para hombres y mujeres. Cada página cuenta una historia y muestra a los modelos vistiendo la ropa en situaciones cotidianas. El catálogo es una herramienta efectiva de marketing para atraer a los jóvenes y mostrarles la amplia gama de opciones de ropa que ofrece la marca.</>}
            claseContenedor="left_flex"
            
            />
            <PapeleriaPlantilla
            titulo ={<h3>Imagen corporativa Gesthor</h3>}
            img1 = {<img className="imgPapeleria" src={img4} alt="img" />}
            imgOvideo={<img src={img4_3} alt="" />}
            p2 = {<>Aquí presento una selección de mis diseños de logotipo, papelería corporativa, tarjetas de presentación y otros elementos de identidad visual que he creado para la empres <strong>Gesthor</strong>. Cada diseño ha sido cuidadosamente diseñado para representar la marca de Gesthor y transmitir su mensaje a su público objetivo. Me enorgullece haber trabajado en la creación de una imagen corporativa coherente y efectiva para esta empresa y espero que disfrutes viendo mis diseños.</>}

            />
            <img className="papeleria__gesthor"  src={img5} alt="" />

            </section>


            <h3>Aun faltan más proyectos por subir, pagina en construcción</h3>


        </div>
        <GoToTop/>
        </>
    )
}

export default ImgCorporativa