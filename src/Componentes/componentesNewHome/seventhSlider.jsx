import { Button, Tooltip } from "@nextui-org/react";
import { FaWordpress } from "react-icons/fa";


function Slider({ visiteWeb }) {

  return (
    <>
      <div
        className="seventh_slider_container "
      >
        <div className="seventh_slider_container--item1 rounded-xl h-[600px] md:h-[400px]">
          <div className="header_fourth_slider--item1 py-[40px] px-[24px] pb-[600px]">
            <h2 className="h4_title bg-black text-white">Crediart</h2>
            <h3>Cooperativa</h3>
            <p className="max-w-[400px] mb-[15px]">
              Modernización de la plataforma Crediart. Simplifiqué la interfaz para agilizar la solicitud de créditos, mejorando la usabilidad y la confianza del usuario.            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => visiteWeb("https://crediar.com/")}
                color="primary"
                aria-label="Ir a BMA"
              >
                Ir a Crediart
              </Button>
              <Tooltip content={"Wordpress / Elementor"} color="default">
                <Button className="svg_tecnology_container cursor-default" aria-label="hc page"
                  isIconOnly
                  color="default"
                >
                  <FaWordpress />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
