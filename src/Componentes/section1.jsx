import React, { useEffect, useState } from "react";
import "../stylesheets/section1.css";
import {
  Tooltip,
  Button,
  Card,
  CardBody,
  Image,
  Link,
  CardFooter,
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
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import logo from "../img/newHome/section1/Logo-JuanDiaz-4.webp";
import logoFondo from "../img/newHome/section1/LogofondoClaro.webp";
import logo1 from "../img/newHome/section1/logos/logo1.webp";
import logo2 from "../img/newHome/section1/logos/logo2.webp";
import logo3 from "../img/newHome/section1/logos/logo3.webp";
import logo4 from "../img/newHome/section1/logos/logo4.webp";
import logo5 from "../img/newHome/section1/logos/logo5.webp";
import logo6 from "../img/newHome/section1/logos/logo6.webp";
import logo7 from "../img/newHome/section1/logos/logo7.webp";
import Slider from "./componentesNewHome/Firstslider";

function Section1(props) {
  const navigateTo = useNavigate();
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
  const logosFull = [
    [logo1, 0.3, "Haddy"],
    [logo2, 0.4, "Palacios"],
    [logo3, 0.5, "Paola Leon"],
    [logo4, 0.6, "Gesthor", "https://gesthor.com.co/"],
    [logo6, 0.8, "Dani", "https://gesthor.com.co/spa/"],
    [logo5, 0.7, "Astracol"],
    [logo3, 0.9, "Paola Leon"],
    [logo1, 0.1, "Haddy"],
    [logo7, 0.12, "Corma"],
  ];

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  useEffect(() => {
    if (inView) {
      // Realizar la acción que deseas ejecutar
      setIsVisible(true); // Marcar que la acción se ha ejecutado
    }
  }, [inView]);

  const [changePage, setChangePage] = useState(false);
  const openNewPage = () => {
    setChangePage(true);
    setTimeout(() => {
      navigateTo("/ImgCorporativa");
    }, 1000);
  };
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
        animate={changePage === true ? "initial" : "animate"}
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
          <h1>Hola 👋</h1>
          <p>
            Soy Juan Díaz, construyo experiencias digitales, excepcionales y accesibles para la web.
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

          <div className="section_container-div4--principalContainer" ref={ref}>
            <div className="section_container-div4--cards_container">
              {logosFull.map((logo) => (
                <motion.div
                  className="logoCards"
                  key={logo}
                  initial={isVisible ? {} : { opacity: 0, y: 5, size: 0.1 }}
                  animate={isVisible ? { opacity: 1, y: 0, size: 1 } : {}}
                  exit={{ opacity: 0 }}
                  transition={{
                    delay: logo[1],
                    duration: 0.5,
                    type: "spring",
                  }}
                >
                  {inView}
                  <Card className="py-4 cardlogo" color="primary">
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl logosImg"
                        src={logo[0]}
                        width={270}
                      />
                    </CardBody>
                    <CardFooter className="buttom_logo_container">
                      <Button
                        onClick={() => {
                          props.visiteWeb(logo[3]);
                        }}
                        radius="small"
                        size="sm"
                      >
                        {logo[2]}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="section_container-div5">
          <Slider />
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
      </motion.section>
    </>
  );
}
export default Section1;
