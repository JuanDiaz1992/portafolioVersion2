import "../stylesheets/section3.css";
import FifthSlider from "./componentesNewHome/fifthSlider";
import SixthSlider from "./componentesNewHome/sixthSlider"


function Section2(props){
    
    return(
        <>
            <section className="section3_container">
                <div className="section3_container--div1">
 
                </div>
                <div className="section3_container--div2" >
                    <FifthSlider/>
                </div>
                <div className="section3_container--div3">
                    <SixthSlider/>
                </div>
                <div className="section3_container--div4">

                </div>
            </section>
        </>
    )
}
export default Section2