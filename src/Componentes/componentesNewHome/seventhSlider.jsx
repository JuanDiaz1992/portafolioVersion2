import { Button } from "@nextui-org/react";

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
            <Button
              onClick={() => visiteWeb("https://crediar.com.co/")}
              color="primary"
              aria-label="crediar"
            >
              Visitar web
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
