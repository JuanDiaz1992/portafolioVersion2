import "../stylesheets/section2.css";
import { Button } from "@nextui-org/react";
import me from "../img/newHome/Banner.webp"


function Section2(){
    return(
        <>
            <section className="section2_container">
                <div className="section2_container--div1">
                    <div className="header_FoodEasy_container">
                            <h4>FoodEasy</h4>
                            <h3>Restaurante</h3>
                            <p> 
                                Este software se está implementando como  <br/>
                                una solución para restaurantes en donde se <br/> 
                                desea llevar un control de inventarios, <br/>
                                empleados, gastos y ventas <br/> 
                                manejando una interfaz sencilla, fácil de <br/> 
                                entender.

                            </p>
                            <Button color="warning" >Próximamente</Button>
                    </div>
                </div>
                <div className="section2_container--div2">
                    <h4 className="big_about_me">ABOUT ME.</h4>
                    <div className="picture_me_container">
                        <img src={me} alt="" />
                    </div>
                    <div className="about_container">
                       <div>
                            <h3>Sobre mí</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi repudiandae culpa cupiditate unde suscipit odio rerum eum quia, labore omnis consequuntur laudantium nobis asperiores quasi amet molestias excepturi itaque!</p>
                       </div>
                    </div>
                </div>
                <div className="section2_container--div3"></div>
                <div className="section2_container--div4"></div>
                <div className="section2_container--div5"></div>
            </section>
        </>
    )
}
export default Section2