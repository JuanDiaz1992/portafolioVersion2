import "../stylesheets/section2.css";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import cvJuanDiaz from "../Documentos/Juan Camilo Diaz Valencia HV .pdf";
import me from "../img/newHome/section2/Banner.png";
import SecondSlider from "./componentesNewHome/SecondSlider";
import ThirtySlider from "./componentesNewHome/thirdSlider";
import FourthSlider from "./componentesNewHome/fourthSlider";
import NineSlider from "./componentesNewHome/nineSlider";

function Section2(props) {
  const objects = {
    offscreen: {
      x: -30,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
      },
    },
  };

  return (
    <>
      <section className="section2_container">
        <div className="section2_container--div1">
          <NineSlider />
        </div>
        <div className="section2_container--div2">
          <h4 className="big_about_me">ABOUT ME.</h4>
          <div
            className="section2_container--div2--container"
            viewport={{ once: true, amount: 1 }}
          >
            <div className="picture_me_container">
              <motion.img
                src={me}
                variants={objects}
                initial="offscreen"
                whileInView="onscreen"
                alt="profilePhoto"
              />
            </div>
            <div className="about_container">
              <div>
                <h3>Un poco de Juan Díaz.</h3>
                <p>
                  Antes de adentrarme en el mundo de la programación era diseñador gráfico, pero en un momento de mi vida quise llevar mis diseños a algo más funcional, por lo que caí de cabeza a la madriguera de la programación y el desarrollo web. Ahora tengo la habilidad de dar solución a problemas de la vida real con código, pero siempre añadiendo ese toque único de estilos a cada proyecto. <br />
                  Siempre disfruto de un buen café en mi casa con mis mascotas y un buen videojuego.
                  <br />
                </p>
                <Button
                  onClick={() => props.visiteWeb(cvJuanDiaz)}
                  color="primary"
                >
                  Descargar CV
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="section2_container--div3">
          <SecondSlider />
        </div>
        <div className="section2_container--div4">
          <FourthSlider />
        </div>
        <div className="section2_container--div5">
          <ThirtySlider />
        </div>
      </section>
    </>
  );
}
export default Section2;
