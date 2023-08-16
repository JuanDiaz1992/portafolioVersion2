import React, {useState} from "react";
import "../stylesheets/layout.css";

import { Link } from 'react-scroll'









function Layaout(){

    const [clicked, setClicked] = useState(null)
    const handleClick = () =>{
        setClicked(!clicked)

    }





	return(
		<>                
        <header className="header">

            <div className="div__contenedor" >


            <div className="div__menuAndLogo">	



                    <button className="nav_toggle" 
                    aria-label="Abrir Menú"
                    /*click={clicked} handleClick={handleClick}*/
                    onClick={handleClick}>
                            <div className={`icon nav-icon-5 ${clicked? "open" : ""}`}
                            onClick={handleClick}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>            
                </button>
            </div>	






            </div>
                    
                <nav className={`nav-menu ${clicked? "nav-menu_visible" : ""}`}>
                <div className="logoContainer">
                    <p className="Desing">Juan Desing</p>
                    
                </div>	
                    <ul>	
                        <li className="nav-item"
                        >
                            <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="a" onClick={handleClick}>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item"
                            >
                            <Link className="a" to="about" spy={true} smooth={true} offset={0} duration={500} onClick={handleClick}>
                                Sobre Mí
                            </Link>
                        </li>



                        <li className="nav-item"
                            >
                            <Link  className="a" to="Portafolio" spy={true} smooth={true} offset={0} duration={500} onClick={handleClick}>
                            Portafolio
                            </Link>
                        </li>			


                        <li className="nav-item"
                            >
                            <Link  className="a" to="Contacto" spy={true} smooth={true} offset={0} duration={500} onClick={handleClick}>
                            Contacto
                            </Link>
                        </li>			
                    </ul>
                </nav>

        </header>









		</>
	)



}






export default Layaout

