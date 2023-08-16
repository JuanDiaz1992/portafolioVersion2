import "../stylesheets/home.css"

import fotoBanner from "../img/Imginicio/Banner.webp"
import { AiOutlineArrowDown } from "react-icons/ai";



import About from './About';
import NavHome from './NavHome';
import Portafolio from './Portafolio';
import Contacto from './Contacto';


function Home(){


  


    return(


        <>

            <NavHome/>

            <div className="home" id="home">
          
                <main>
                    <div className="main-content">
                        <div className="title-content">
                            <span className="first-title">¡Bienvenido a mi portafolio!</span>
                            <h1 className="titulo1">Soy <span className="Juan">Juan Díaz</span> </h1>
                            <p className="second-title">Programador y Diseñador web <span className="cursor">|</span></p>
                        </div>
                        <picture id="banner">
                            <img src={fotoBanner} alt="bannerJC" className="Bannerjpg"/>
                        </picture>
                    </div>

                    <div className="scrollDown">
                        <p>scroll down</p>
                        <AiOutlineArrowDown/>                        
                    </div>

                </main>


            </div>

            <About/>
            <Portafolio/>
            <Contacto/>







        </>

    )
}

export default Home