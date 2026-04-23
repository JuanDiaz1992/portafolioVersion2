import { useState, useEffect } from "react";
import { Button, Tooltip } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { TbBrandReactNative } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiSpring } from "react-icons/si";

const img2 = "/img/newHome/section2/button1.webp";
const img3 = "/img/newHome/section2/button2.webp";
const img4 = "/img/newHome/section2/icon3.webp";
const img5 = "/img/newHome/section2/aquamovil-2-m.webp";
const img6 = "/img/newHome/section2/aquamovil-3-m.webp";

function Slider({ visiteWeb }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // 768px es el breakpoint 'md' de Tailwind
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Ejecutar al montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper nine_slider_container"
      >
        {/* Slide 1 */}
        <SwiperSlide className="nine_slider_container--item1">
          <div className="header_FoodEasy_container">
            <h2 className="h4_title bg-black text-white px-2 py-1 inline-block">
              AquaMovil
            </h2>
            <h3>App Movil Servicios Públicos</h3>
            <p className="mb-[15px] w-full max-w-[500px]">
              Desarrollo de un ecosistema compuesto por una App móvil en React
              Native (captura de lecturas medidores) y un dashboard
              administrativo web en React JS + Spring Boot para la gestión y
              análisis de la información recolectada.
            </p>
            <div>
              <Button
                color="success"
                aria-label="gesthordesign code"
                onClick={() => visiteWeb("https://aquamovildesk.com/")}
              >
                Visita la web
              </Button>
              <Tooltip content={"React Native"} color="default">
                <Button
                  isIconOnly
                  color="danger"
                  aria-label="gesthordesign"
                  className="cursor-default"
                >
                  <TbBrandReactNative size={30} />
                </Button>
              </Tooltip>
              <Tooltip content={"React Js"} color="default">
                <Button
                  isIconOnly
                  color="warning"
                  aria-label="gesthordesign"
                  className="cursor-default"
                >
                  <FaReact size={30} />
                </Button>
              </Tooltip>
              <Tooltip content={"Spring Boot"} color="default">
                <Button
                  isIconOnly
                  color="primary"
                  aria-label="gesthordesign"
                  className="cursor-default"
                >
                  <SiSpring size={30} />
                </Button>
              </Tooltip>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="nine_slider_container--item2 p-[20px] md:p-[60px] ">
          <div className="w-full h-full flex items-center md:items-end">
            <div className="group bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-3xl p-8 md:p-10 max-w-[550px] relative z-10 transition-transform hover:-translate-y-2 duration-300">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#0f172a]">
                Diseño UX/UI
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[#334155] w-full">
                Diseñé una interfaz enfocada en la eficiencia operativa,
                reduciendo la fricción en la captura de datos de campo. Prioricé
                una jerarquía visual limpia y botones de acción claros para que
                los operarios registren información rápidamente bajo cualquier
                condición. La consistencia visual entre la App móvil y el
                Dashboard administrativo asegura un flujo de trabajo intuitivo,
                minimizando errores y acelerando la toma de decisiones basada en
                datos.
              </p>
              <img
                src={img2}
                alt=""
                className="hidden md:block absolute right-[-151px] bottom-[104px] transition-transform duration-300 group-hover:translate-y-5"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide Móvil 1 (Solo aparece si es móvil) */}
        {isMobile && (
          <SwiperSlide className="p-[20px]">
            <div className="h-full w-full flex justify-end">
              <div className="flex flex-col gap-3 justify-center">
                <img
                  src={img5}
                  alt=""
                  className="w-full object-contain"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </SwiperSlide>
        )}

        {/* Slide 3 */}
        <SwiperSlide className="nine_slider_container--item3 p-[20px] md:p-[50px] ">
          <div className="w-full h-full flex justify-end">
            <div className="group bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-3xl p-8 md:p-10 max-w-[550px] relative z-10 transition-transform hover:-translate-y-2 duration-300">
              <img
                src={img4}
                alt=""
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className="w-[90px] md:w-[141px] absolute left-[-144px] top-[-10px] transition-transform duration-300 group-hover:translate-y-[-30px]"
              />
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#0f172a]">
                Características del Ecosistema
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[#334155] w-full">
                El sistema fue diseñado bajo una arquitectura offline-first,
                garantizando que la operación no dependa de una conexión
                constante a internet. Los operarios pueden descargar sus rutas,
                realizar lecturas y gestionar datos en zonas de baja cobertura,
                sincronizando la información automáticamente en cuanto detectan
                señal. Además, integramos un módulo de validación inteligente
                (Crítica), que detecta consumos atípicos en tiempo real y asigna
                visitas de verificación al operario, convirtiendo el sistema en
                una herramienta proactiva que mejora la precisión de la
                facturación y la experiencia del usuario final.
              </p>
              <img
                src={img3}
                alt=""
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className="absolute hidden md:block left-[-237px] bottom-[-57px] transition-transform duration-300 group-hover:translate-y-5"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide Móvil 2 (Solo aparece si es móvil) */}
        {isMobile && (
          <SwiperSlide className="p-[20px] ">
            <div className="h-full w-full flex justify-end">
              <div className="flex flex-col gap-3 justify-center">
                <img
                  src={img6}
                  alt=""
                  className="w-full object-contain"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}

export default Slider;
