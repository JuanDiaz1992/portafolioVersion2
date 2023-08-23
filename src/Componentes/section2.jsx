import "../stylesheets/section2.css";
import { Button } from "@nextui-org/react"

function Section2(){
    return(
        <>
            <section className="section_container">
                <div className="section_container--div1">
                    <div className="header_FoodEasy_container">
                            <h4>FoodEasy</h4>
                            <h3>Restaurante</h3>
                            <p> 
                                Este software se está implementando como  <br/>
                                una solución para restaurantes en donde se <br/> 
                                desea llevar un control de inventarios, <br/>
                                empleados, gastos y ventas <br/> 
                                manejando una interfaz sencilla y fácil de <br/> 
                                entender.

                            </p>
                            <Button color="default" >Próximamente</Button>
                    </div>
                </div>
                <div className="section_container--div2"></div>
                <div className="section_container--div3"></div>
                <div className="section_container--div4"></div>
                <div className="section_container--div5"></div>
            </section>
        </>
    )
}
export default Section2