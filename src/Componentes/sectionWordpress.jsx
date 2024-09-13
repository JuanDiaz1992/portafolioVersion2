import "../stylesheets/sectionWordpress.css";
import { Button, Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaWordpress } from "react-icons/fa";
import hc from "../img/newHome/wordpressSection/hc.webp";
import bma from "../img/newHome/wordpressSection/bma.webp";
import cepheus from "../img/newHome/wordpressSection/cepheus.webp";
import kbFineArt from "../img/newHome/wordpressSection/kb_fine_art.webp";
import kb1 from "../img/newHome/wordpressSection/eryi_6.webp";
import kb2 from "../img/newHome/wordpressSection/Banner2.webp";
import kb3 from "../img/newHome/wordpressSection/suzanne_howes_k_b_fine_art_5.webp";
import kb4 from "../img/newHome/wordpressSection/suzanne_howes_k_b_fine_art_1.webp";
function SectionWordpress({visiteWeb}){
    const createVariants = (x, rotate,rotate_final) => ({
        offscreen: {
            x: x,
            rotate: rotate,
        },
        onscreen: {
            x: 0,
            rotate:rotate_final,
            transition: {
            type: "tween",
            ease: "easeOut",
            duration:.8
            },
        },
    });
    return(
        <section className="sectionWordpress_container">
            <div className="sectionWordpress_container--div1 flex lg:justify-between justify-center items-end flex-wrap">
                <div className="flex flex-col gap-2 pb-8 w-[100%] lg:w-[fit-content]">
                    <h4 className="h4_title text-black bg-white">H&C</h4>
                    <h3 className="h3_small_title text-white">Cocinas y baños</h3>
                    <p className="max-w-xs text-white mb-[15px]">
                        Desarrollo web para la empresa H&C, donde se exhiben todos sus productos. Además, se trabajó minuciosamente en el posicionamiento SEO para mejorar su visibilidad en los motores de búsqueda.
                    </p>
                    <Tooltip content={"Visitar la web"} color="default">
                        <Button className="svg_tecnology_container" aria-label="hc page"
                            onClick={() =>
                                visiteWeb(
                                "https://hckitchenandbathllc.com/"
                                )
                            }
                            isIconOnly
                            color="default"
                            >
                            <FaWordpress />
                        </Button>
                    </Tooltip>
                </div>
                <img src={hc} alt="hc" width="550" height="220" loading="lazy"/>
            </div>


            <div className="sectionWordpress_container--div2 flex  flex-col justify-between">
                <div className="flex flex-col gap-2 pb-8">
                        <h4 className="h4_title text-white">CEPHEUS</h4>
                        <h3 className="h3_hiper_small_title text-black">Inmoviliaria</h3>
                        <p className="max-w-xs text-black mb-[15px]">
                            Desarrollo web para inmoviliaria en Whasintong, donde enseñan algunos de sus departamentos disponibles.                    </p>
                        <Tooltip content={"Visitar la web"} color="default" >
                            <Button className="svg_tecnology_container"
                                onClick={() =>
                                    visiteWeb(
                                    "https://alfonsoq172.sg-host.com/"
                                    )
                                }
                                isIconOnly
                                color="default"
                                aria-label="cepheus page"
                                >
                                <FaWordpress />
                            </Button>
                        </Tooltip>
                </div>
                <img src={cepheus} alt="cepheus" loading="lazy" />
            </div>


            <div className="sectionWordpress_container--div3">
                <div className="flex flex-col gap-2 pb-8 w-full z-[4]">
                    <h4 className="h4_title text-white">KB FINE ART</h4>
                    <h3 className="h3_small_title text-black">Galería de Arte</h3>
                    <p className="max-w-xs text-black mb-[15px]">
                    Desarrollo web para una tienda de arte, diseñada para exhibir una amplia y variada colección de obras de arte originales y únicas.
                    </p>
                    <Tooltip content={"Visitar la web"} color="default">
                        <Button className="svg_tecnology_container" aria-label="kb fine art page"
                            onClick={() =>
                                visiteWeb(
                                "https://kbfineartgallery.com/"
                                )
                            }
                            isIconOnly
                            color="default"
                            >
                            <FaWordpress />
                        </Button>
                    </Tooltip>
                </div>
                <img src={kbFineArt} alt="kbFineArt" className="z-[2]" loading="lazy"/>
                <motion.img
                    src={kb1}
                    alt=""
                    className="absolute z-[3] top-[180px] md:top-[140px]"
                    variants={createVariants(30, -18.67, -25)}
                    initial="offscreen"
                    whileInView="onscreen"
                    loading="lazy"
                    />

                    <motion.img
                    src={kb3}
                    alt=""
                    className="absolute top-[250px] md:top-[220px] right-[195px]"
                    variants={createVariants(50, 10, 15)}
                    initial="offscreen"
                    whileInView="onscreen"
                    loading="lazy"
                    />

                    <motion.img
                    src={kb2}
                    alt=""
                    className="absolute bottom-[250px] right-[350px] md:right-[380px] z-[3]"
                    variants={createVariants(20, 30, 20)}
                    initial="offscreen"
                    whileInView="onscreen"
                    loading="lazy"
                    />

                    <motion.img
                    src={kb4}
                    alt=""
                    className="absolute bottom-[150px] md:bottom-[120px] right-[300px] md:right-[400px] z-[1]"
                    variants={createVariants(40, -10, -8)} // Personaliza más valores
                    initial="offscreen"
                    whileInView="onscreen"
                    loading="lazy"
                    />

            </div>


            <div className="sectionWordpress_container--div4 flex  flex-col justify-between">
                <div className="flex flex-col gap-2 pb-8">
                    <h4 className="h4_title text-black bg-white">BMA</h4>
                    <h3 className="h3_small_title text-white">Patios y piscinas</h3>
                    <p className="max-w-xs text-white mb-[15px]">
                        Desarrollo de una página web para mostrar los productos de la empresa, con un enfoque especial en su servicio destacado, la creación de piscinas.                    
                    </p>
                    <Tooltip content={"Visitar la web"} color="default">
                        <Button className="svg_tecnology_container"
                            onClick={() =>
                                visiteWeb(
                                "https://bmalandscaping.com/"
                                )
                            }
                            isIconOnly
                            color="default"
                            aria-label="BMA page"
                            >
                            <FaWordpress />
                        </Button>
                    </Tooltip>
                </div>
                <img src={bma} alt="bma" loading="lazy"/>
            </div>

        </section>
    )
}

export default SectionWordpress;

