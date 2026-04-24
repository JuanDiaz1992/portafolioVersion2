import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { BiStore } from "react-icons/bi";


const woman = "/img/newHome/section3/dani.webp";
const plants = "/img/newHome/section3/daniPlants.webp";
function Slider({ visiteWeb }) {
  const objects = {
    offscreen: {
      scale: 0.9,
    },
    onscreen: {
      scale: 1,
      transition: { duration: 0.9 },
    },
  };

  return (
    <>
      <div
        className=" fifth_slider_container"
      >
        <div className="fifth_slider_container--item1">
          <div className="header_card_slider fifth_slider_container-header_card ">
            <h2 className="h4_title bg-black text-white">Mango Biche Mía</h2>
            <h3 className="h3_small_title">Franquicia</h3>
            <p className="max-w-[400px] w-[100%] mb-[15px]">
              Desarrollé una web para la franquicia
              Mango Biche Mía, con la finalizad de dar a
              conocer los servicios que presta la misma
              e invitar al visitante a ser parte de la franquicia.
            </p>
            <Button
              onClick={() => visiteWeb("https://www.mangobichemia.com/")}
              color="warning"
              aria-label="Mango Biche Mía"
              endContent={<BiStore />}
            >
              Ir a Mango Biche Mía
            </Button>
          </div>
          <img className="w-[350px] md:w-[500px]" src={woman} alt="" draggable={false} onDragStart={(e) => e.preventDefault()} />
          <motion.img
            src={plants}
            alt=""
            variants={objects}
            initial="offscreen"
            whileInView="onscreen"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </>
  );
}
export default Slider;
