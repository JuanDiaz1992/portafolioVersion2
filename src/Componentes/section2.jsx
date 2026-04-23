import { useState } from "react";
import "../stylesheets/section2.css";
import { Button, Tooltip } from "@nextui-org/react";
const cvJuanDiaz = "/Documentos/Juan Camilo Diaz Valencia HV.pdf";
import SecondSlider from "./componentesNewHome/SecondSlider";
import FourthSlider from "./componentesNewHome/fourthSlider";
import NineSlider from "./componentesNewHome/nineSlider";
import { TbBrandNextjs } from "react-icons/tb";
const invisualSign = "/img/newHome/section2/invisualSign.webp";
const invisualSignM = "/img/newHome/section2/invisualSign-m.webp";

function Section2({ visiteWeb }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <>
      <section className="section2_container">
        <div className="section2_container--div1">
          <NineSlider visiteWeb={visiteWeb} />
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
                  aria-label="Download CV"
                >
                  Descargar CV
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="section2_container--div3">
          <FourthSlider visiteWeb={visiteWeb} />
        </div>
        <div className="section2_container--div4">
          <SecondSlider visiteWeb={visiteWeb} />
        </div>
        <div
          className="section2_container--div5"
          style={{ borderRadius: '20px', overflow: 'hidden', position: 'relative' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="hidden md:block"
            style={{
              backgroundImage: `url(${invisualSign})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              top: '-10%', left: '-10%',
              width: '120%', height: '120%',
              transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px)`,
              transition: 'transform 0.15s ease-out'
            }}
          />
          <div
            className="block md:hidden"
            style={{
              backgroundImage: `url(${invisualSignM})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              top: '-10%', left: '-10%',
              width: '120%', height: '120%',
              transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px)`,
              transition: 'transform 0.15s ease-out'
            }}
          />
          <div className="relative z-10 flex items-start p-[24px] md:pt-[40px] md:ps-[32px] w-full h-full pointer-events-none">
            <div style={{ pointerEvents: 'auto' }}>
              <h2 className="h4_title bg-black text-white px-2 py-1 inline-block">Invisual Signs</h2>
              <h3 className="h3_small_title font-bold mt-2 mb-2 text-white">Vehicle Wrap Services</h3>
              <p className="max-w-[400px] w-[100%] mb-[25px] text-white">
                Construí la plataforma web para InVisual Signs, enfocada en la presentación de sus servicios de branding y rotulación. Desarrollada con Next.js, la web combina un diseño de alto impacto visual con una navegación fluida. Mi objetivo fue crear una experiencia que reflejara la calidad del servicio del cliente, facilitando la conversión de visitantes en clientes potenciales a través de una arquitectura web rápida y moderna.
              </p>
              <div className="flex gap-2">
                <Button color="success" aria-label="gesthordesign code" onClick={() => visiteWeb("https://invisualsign.com")}>
                  Visita la web
                </Button>
                <Tooltip content={"Next Js"} color="default">
                  <Button isIconOnly color="primary" aria-label="gesthordesign" className="cursor-default">
                    <TbBrandNextjs size={30} />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Section2;
