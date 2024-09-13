import "../stylesheets/section2.css";
import { Button } from "@nextui-org/react";
import cvJuanDiaz from "../Documentos/Juan Camilo Diaz Valencia HV.pdf";
import SecondSlider from "./componentesNewHome/SecondSlider";
import ThirtySlider from "./componentesNewHome/thirdSlider";
import FourthSlider from "./componentesNewHome/fourthSlider";
import NineSlider from "./componentesNewHome/nineSlider";

function Section2({visiteWeb}) {
  return (
    <>
      <section className="section2_container">
        <div className="section2_container--div1">
          <NineSlider />
        </div>
        <div className="section2_container--div2">
          <div
            className="section2_container--div2--container flex justify-end">
            <div className="about_container">
              <div className="about_container--div--container pb-[20px]">
                <div className="about_container--div--title--container">
                  <h3 className="about_container--h3">SOY JUAN </h3>
                  <h4 className="lastname">DIAZ.</h4>
                </div>
                <p>
                  Soy un desarrollador apasionado por crear soluciones innovadoras y eficientes, me encanta transformar ideas en proyectos funcionales que no solo resuelvan problemas reales, sino que también ofrezcan experiencias únicas y memorables. Mi enfoque se basa en combinar la lógica del código con la creatividad, para lograr productos que destacan tanto por su rendimiento como por su estética. <br />
                </p>
                <Button
                  onClick={() => visiteWeb(cvJuanDiaz)}
                  color="primary"
                >
                  Descargar CV
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="section2_container--div3">
          <SecondSlider visiteWeb={visiteWeb} />
        </div>
        <div className="section2_container--div4">
          <FourthSlider visiteWeb={visiteWeb}/>
        </div>
        <div className="section2_container--div5">
          <ThirtySlider visiteWeb={visiteWeb}/>
        </div>
      </section>
    </>
  );
}
export default Section2;
