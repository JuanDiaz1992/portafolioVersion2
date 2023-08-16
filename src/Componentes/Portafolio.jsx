import "../stylesheets/portafolio.css"
import video1 from "../img/Portafolio/Hover/Romofyi2.mp4"
import img1 from "../img/Portafolio/Hover/Corporativo.jpg"
import img2 from "../img/Portafolio/Hover/Render11.png"
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';




function Portafolio(){

    const [isShown, setIsShown] = useState(false);
    const [isShownP, setIsShownP] = useState(false);
    const [isShownR, setIsShownR] = useState(false);


    

    return(
        <>
                <div className="container">
                </div>
            <section className={`Portafolio  ${isShown? "Noactivo" : "Activo"} ${isShownP? "Noactivo" : "Activo"} ${isShownR? "Noactivo" : "Activo"}`} id="Portafolio">
                <video className={` video ${isShown? "videoActive" : "videoNoActive"}`}  src={video1} autoPlay={true} muted={true} loop={true} />
                <img className={` img1 ${isShownP? "imgActive" : "imgNoActive"}`} src={img1} alt="" />
                <img className={` img1 ${isShownR? "imgActive" : "imgNoActive"}`} src={img2} alt="" />
            
                    <div className="portafolio__div__container">

                        <h2 className={`portafolio__div__container--h2 ${isShown? "textNoActive" : ""} ${isShownP? "textNoActive" : ""} ${isShownR? "textNoActive" : ""}`}>Portafolio</h2>
                        <ul>
                            <NavLink to="/DisenoWeb"> <li className={`listElementFull colortext1 ${isShown? "textActive" : ""} ${isShownP? "textNoActive" : ""} ${isShownR? "textNoActive" : ""}`}
                                    onMouseEnter={() => setIsShown(true)}
                                    onMouseLeave={() => setIsShown(false)}> Diseño web
                                </li>
                            </NavLink>


                                    
                            <NavLink to="/ImgCorporativa">
                                <li className={`listElementFull colortext2 ${isShown? "textNoActive" :     ""} ${isShownP? "textActive" : ""} ${isShownR? "textNoActive" : ""}`}
                                    onMouseEnter={() => setIsShownP(true)}
                                    onMouseLeave={() => setIsShownP(false)}>Diseño Gráfico
                                </li>
                            </NavLink>


                            {/* <NavLink to="/Renders3d">
                                <li className={`listElementFull colortext3 ${isShown? "textNoActive" : ""} ${isShownP? "textNoActive" : ""} ${isShownR? "textActive" : ""}`}
                                    onMouseEnter={() => setIsShownR(true)}
                                    onMouseLeave={() => setIsShownR(false)}>Renders 3D
                                </li>
                            </NavLink> */}
                        </ul>
                    </div>

                
            </section>

            

 

        </>

    )
}

export default Portafolio