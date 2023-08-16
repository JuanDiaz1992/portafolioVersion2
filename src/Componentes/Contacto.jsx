import React from "react"
import "../stylesheets/Contacto.css"
import FormularioContacto from "./FormularioContacto"
import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";


function Contacto ({ClickedPort}){
    return(
        <>

        <div className={`footer ${ClickedPort? "desplazado" : ""}`}  id="Contacto">

            <div className="footer__container" >
                <h2>¡Hagamos algo genial!</h2>

                <div className="footer__formContainer">
                    <div><p className="enviame">Completa el fomulario a continuación <br/>o enviame un correo  a juannavegante2010@gmail.com</p></div>
                    <div className="form">
                    <FormularioContacto/>
                    </div>

                    <div className="logo">
                        <p className="DesingFooter">Juan Desing</p>    
                    </div>	
                    <div className="links">
                        <a href="https://www.linkedin.com/in/juan-camilo-diaz-valencia-020840141" target="blank" className="link__item"><AiFillLinkedin/></a>
                        <a href="https://github.com/JuanDiaz1992" target="blank" className="link__item"><AiFillGithub/></a>
                    </div>
                    <div className="footer__end">
                        <p>©Hecho a mano por mi en React JS</p>
                    </div>
                </div>
            </div>       
            
        </div>





        </>
    )
}

export default Contacto