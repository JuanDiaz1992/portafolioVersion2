import { useState } from "react";
import "../../stylesheets/Portafolio/ImgCorp.css"
import { useNavigate } from "react-router-dom";
import GoToTop from "../funciones/OnTop.js"
import { Image } from "@nextui-org/react"



import PapeleriaPlantilla from "./Papeleria"

const img1 = "/img/Portafolio/Diseño de imagen/img1.webp";
const palacios = "/img/Portafolio/Diseño de imagen/palacios.jpg";
const PaolaLeon = "/img/Portafolio/Diseño de imagen/PaolaLeon.jpg";
const Corma = "/img/Portafolio/Diseño de imagen/Corma.jpg";
const pae = "/img/Portafolio/Diseño de imagen/PAE.jpg";
const astracol = "/img/Portafolio/Diseño de imagen/Astracol.jpg";
const Dani = "/img/Portafolio/Diseño de imagen/Dani.jpg";
const gesthor = "/img/Portafolio/Diseño de imagen/gesthor.jpg";
const haddy = "/img/Portafolio/Diseño de imagen/haddy.jpg";
const videoNoel = "/img/Portafolio/Diseño de imagen/noel.1.mp4";
const img_1 = "/img/Portafolio/Diseño de imagen/img3.1.jpg";
const img2 = "/img/Portafolio/Diseño de imagen/img3.jpg";
const img3 = "/img/Portafolio/Diseño de imagen/img3.2.jpg";
const img4 = "/img/Portafolio/Diseño de imagen/img4.jpg";
const img4_3 = "/img/Portafolio/Diseño de imagen/img4.3.jpg";
const img5 = "/img/Portafolio/Diseño de imagen/img4.2.jpg";
import { motion } from "framer-motion";

function ImgCorporativa(){
    const [handleClick,setHandleClick] = useState(false)
    const navigate = useNavigate(); 
    const goToBack=()=>{
        setHandleClick(true)
        setTimeout(() => {
            navigate(-1)
          }, 1000);
        
    }
    const animationVariants = {
        initial: {
          opacity:0,
          y: 100,
        },
        animate: {
          opacity:1,
          y: 0,
        },
      };

    const logosArray = [ palacios, PaolaLeon, pae, Corma, astracol, Dani, gesthor, haddy ];
    
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };    

    return(
        <>
        
        <motion.div className="imgCorporativa__container "
                    initial="initial"
                    animate={handleClick === true ?  "initial" : "animate"}
                    variants={animationVariants}
                    transition={{ 
                      duration: 0.3,
                      ease: "linear", }}
        >
            <motion.div className="button_close_container"
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        transition={{
                        delay: 0.5,
                        duration: .5,
                        ease: "linear",
                        }}>
                <button className="nav_toggle open" onClick={() => goToBack()}>
                        <div className="icon nav-icon-5 open">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                        </div>            
                </button>
            </motion.div>


            

            <section className="designer_hero">
                <div className="designer_hero_bg">
                    <img src={img1} alt="Hero Banner" className="hero_image"/>
                    <div className="hero_overlay"></div>
                </div>
                <div className="designer_hero_content">
                    <motion.h2 initial={{ y: -50, opacity: 0 }} animate={{ y:0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>Diseño Gráfico</motion.h2>
                    <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y:0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="corpo">
                        Esta es una colección de diseños que he realizado durante los últimos años. <br/>
                        Aquí es donde cobran vida con la magia de los vectores. <br/>
                        Una gran parte del trabajo a continuación fue realizado a mano y hecho a medida para adaptarse adecuadamente a las necesidades estéticas del cliente.
                    </motion.p>
                </div>
            </section>
            <div className="imgCorporativa__title--containter">
            <h3 className="">Logos</h3>
            <p className="textIntros--p">En esta sección, presento una selección de mis diseños de logotipos. Cada logotipo ha sido diseñado para reflejar la personalidad y los valores de la empresa o marca correspondiente. He utilizado mi experiencia en diseño gráfico y mi creatividad para crear logotipos únicos y memorables que destacan en el mercado y atraen a su público objetivo. Espero que disfrutes viendo mis diseños de logotipos y encuentres inspiración para tu próximo proyecto de branding.</p>
            </div>

            <motion.section 
                className="section2__logos"
                variants={containerVariants} 
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true, amount: 0.1 }}
            >
                {logosArray.map((logo, index) => (
                    <motion.picture variants={itemVariants} className="LogoItem" key={index}>
                        <img src={logo} alt={`Logo ${index}`} />
                    </motion.picture>
                ))}
            </motion.section>






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
                img1={<video className="videoNoel" src={videoNoel} autoPlay={true} muted={true} loop={true}></video>}
                imgOvideo={<img className="imgPapeleria" src={img_1} alt="img" />}
                p2={<>Uno de mis primeros trabajos fue crear un brochure para la empresa <strong>Noel</strong>. Mi objetivo era mostrar los productos de la empresa de forma clara y atractiva. Trabajé en colaboración con el equipo de marketing de Noel para asegurarme de que el contenido fuera relevante para el público objetivo. Esta experiencia me permitió desarrollar mis habilidades en diseño gráfico y trabajar en equipo.</>}
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
        </motion.div>
        <GoToTop/>
        </>
    )
}

export default ImgCorporativa