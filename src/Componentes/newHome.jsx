import "../stylesheets/newHome.css";
import logo from "../img/Imginicio/Logo-JuanDiaz-4.png";
import logoFondo from "../img/Imginicio/LogofondoClaro.png";
import { Tooltip, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import estiloDani from "../img/newHome/stiloDani.jpg"
import logo1 from "../img/newHome/cardsLogos/logo1.png"
import logo2 from "../img/newHome/cardsLogos/logo2.png"
import logo3 from "../img/newHome/cardsLogos/logo3.png"
import logo4 from "../img/newHome/cardsLogos/logo4.png"
import logo5 from "../img/newHome/cardsLogos/logo5.png"
import logo6 from "../img/newHome/cardsLogos/logo6.png"
import logo7 from "../img/newHome/cardsLogos/logo7.png"
import {
  FaPython,
  FaJs,
  FaReact,
  FaPhp,
  FaFigma,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiDjango,
  SiCinema4D,
  SiGmail,
  SiWhatsapp,
} from "react-icons/si";


function NewHome() {
  const skills = [
    [<FaJs />, "JavaScript"],
    [<FaReact />, "React JS"],
    [<FaPhp />, "PHP"],
    [<FaPython />, "Python"],
    [<SiDjango />, "Django"],
    [<SiCinema4D />, "Cinema 4D"],
    [<FaFigma />, "Figma"],
    [<SiAdobephotoshop />, "Photoshop"],
    [<SiAdobeillustrator />, "Illustrator"],
  ];
  const logosFull = [
    [logo1,.3],
    [logo2,.4],
    [logo3,.5],
    [logo4,.6],
    [logo5,.7],
    [logo6,.8],
    [logo3,.9],
    [logo1,.1],
    [logo7,.12],

  ]

  return (
    <>
      <section className="section_container">
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
          <h1>Hola 👋</h1>
          <p>
            En Juan Design, se crean soluciones innovadoras que inspiran y
            fomentan relaciones memorables entre las marcas y sus clientes.
          </p>
        </div>
        <div className="section_container-div3">
          <div className="div__container-div3--icons">
            <h3 className="div__container-div3--icons--h3">Tecnologías</h3>

            <div className="div__container__icons--container">
              {skills.map((skill) => (
                <div className="iconoc" key={skill}>
                  <Tooltip content={skill[1]} color="default">
                    <Button color="foreground" variant="flat">
                      {skill[0]}
                    </Button>
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="section_container-div4">
          <div className="section_container-div4--text_container">
            <p>
              Aquí encontrarás una colección de logos y otros tabajos que eh relizado a lo largo de mi carrera.
            </p>
          </div>
          
          <div className="section_container-div4--principalContainer">
            <div className="section_container-div4--cards_container">
              {logosFull.map((logo)=>(
                <motion.img className="logoCards" src={logo[0]} alt=""
                initial={{ opacity: 0, y: 8, size:0.5}}
                animate={{ opacity: 1, y: 0, size:1}}
                exit={{ opacity: 0 }}
                transition={{
                  delay: logo[1],
                  duration: .5,
                  ease: "linear",
                }}/>
              ))}
            </div>

          </div>

        </div>
        <div className="section_container-div5">
          <img className="imgStiloDani" src={estiloDani} alt="EstiloDani" />
        </div>

        <div className="section_container-div6">
          <div className="section_container-div6-icons_container">
            <div className="contact_icons">
              <a
                href="https://www.linkedin.com/in/juan-camilo-diaz-valencia-020840141"
                target="blank"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="contact_icons">
              <a href="mailto:juannavegante2010@gmail.com?subject=Greetings">
                <SiGmail />
              </a>
            </div>
            <div className="contact_icons">
              <a
                href="https://api.whatsapp.com/send?phone=573008080525&text=Hola%20Juan%20D%C3%ADaz%2C%20vi%20tu%20web"
                target="blank"
              >
                <SiWhatsapp />
              </a>
            </div>
            <div className="contact_icons">
              <a href="https://github.com/JuanDiaz1992" target="blank">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default NewHome;
