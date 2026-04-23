// removed unused `useState`
import "../stylesheets/section1.css";
import {
  Tooltip,
  Button,
  Link,
} from "@nextui-org/react";
import {
  FaPython,
  FaJs,
  FaReact,
  FaPhp,
  FaFigma,
  FaLinkedin,
  FaGithub,
  FaWordpress,
  FaCss3,
  FaHtml5,
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiDjango,
  SiGmail,
  SiWhatsapp,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const logo = "/img/newHome/section1/Logo-JuanDiaz-4.webp";
const logoFondo = "/img/newHome/section1/LogofondoClaro.webp";
const logo1 = "/img/newHome/section1/logosFlotantes/1.webp";
const logo2 = "/img/newHome/section1/logosFlotantes/2.webp";
const logo3 = "/img/newHome/section1/logosFlotantes/3.webp";
const logo4 = "/img/newHome/section1/logosFlotantes/4.webp";
const logo5 = "/img/newHome/section1/logosFlotantes/5.webp";
const logo6 = "/img/newHome/section1/logosFlotantes/6.webp";
const logo7 = "/img/newHome/section1/logosFlotantes/7.webp";
import Slider from "./componentesNewHome/Firstslider";

function Section1({visiteWeb, openNewPage}) {
  const logos = [
    logo1,logo2,logo3,logo4,logo5,logo6,logo7
  ]
  const skills = [
    [<FaJs />, "JavaScript"],
    [<FaReact />, "React JS"],
    [<FaPhp />, "PHP"],
    [<FaPython />, "Python"],
    [<SiDjango />, "Django"],
    [<FaHtml5 />, "HTML 5"],
    [<FaCss3 />, "CSS3"],
    [<FaWordpress />, "Wordpress"],
    [<FaGithub />, "GitHub"],
    [<FaFigma />, "Figma"],
    [<SiAdobephotoshop />, "Photoshop"],
    [<SiAdobeillustrator />, "Illustrator"],
  ];

  const { ref } = useInView({
    threshold: 0.1,
  });


  const animationVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <>
      <motion.section
        className="section_container"
        initial="initial"
        animate="animate"
        variants={animationVariants}
        transition={{
          duration: 0.7,
          ease: "linear",
          type: "spring",
        }}
      >
        <motion.div
          className="section_container-div1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: "linear",
          }}
        >
          <motion.img
            className="logo"
            src={logo}
            alt="logo"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{
              delay: 1,
              duration: 0.4,
              ease: "linear",
            }}
          />
          <motion.img
            className="logoFondo"
            src={logoFondo}
            alt="logoFondo"
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -150, opacity: 0 }}
            transition={{
              delay: 1,
              duration: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          />
        </motion.div>
        <div className="section_container-div2">
          <h1 className="text-2xl">Desarrollador de software</h1>
          <p>
            ¡Hola👋! Bienvenido a mi portafolio. Soy <strong>Juan Díaz</strong>, un desarrollador de software especializado en crear experiencias digitales excepcionales y accesibles.
          </p>
        </div>
        <div className="section_container-div3">
          <div className="div__container-div3--icons">
            <h2 className="div__container-div3--icons--h3">Tecnologías</h2>
            <div className="div__container__icons--container">
              {skills.map((skill) => (
                <div className="iconoc" key={skill[1]}>
                  <Tooltip content={skill[1]} color="default" >
                    <Button color="foreground" variant="flat" aria-label={skill[1]}>
                      {skill[0]}
                    </Button>
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="section_container-div4">
          <div className="section_container-div4--principalContainer" ref={ref}>
              {logos.map((logo,index)=>
                <img src={logo} alt="logo1" className={"logo_design"+index} key={index}/>
              )}
          </div>
          <div className="section_container-div4--text_container">
            <div className="text_container--title_container">
              <h3>Diseño</h3>
              <h4>Gráfico</h4>
            </div>
            <p>
              Aquí encontrarás una colección de proyectos en los que e
              participado como diseñador gráfico.
            </p>

            <Link
              onClick={() => {
                openNewPage();
              }}
              isBlock
              showAnchorIcon
              color="success"
            >
              Ver más
            </Link>
          </div>
        </div>
        <div className="section_container-div5">
          <Slider visiteWeb={visiteWeb} />
        </div>

        <div className="section_container-div6">
          <div className="section_container-div6-icons_container">
            <div className="contact_icons">
              <a
                href="https://www.linkedin.com/in/juan-camilo-diaz-valencia-020840141"
                target="blank"
                aria-label="linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="contact_icons">
              <a href="mailto:juannavegante2010@gmail.com?subject=Greetings" aria-label="E-mail">
                <SiGmail />
              </a>
            </div>
            <div className="contact_icons">
              <a
                href="https://api.whatsapp.com/send?phone=573008080525&text=Hola%20Juan%20D%C3%ADaz%2C%20vi%20tu%20web"
                target="blank"
                aria-label="whatsapp"
              >
                <SiWhatsapp />
              </a>
            </div>
            <div className="contact_icons">
              <a href="https://github.com/JuanDiaz1992" target="blank" aria-label="github">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
export default Section1;
