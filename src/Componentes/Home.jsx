import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import SectionWordpress from "./sectionWordpress";

function Home() {
  const navigateTo = useNavigate();
  const [changePage, setChangePage] = useState(false);

  const openNewPage = () => {
    setChangePage(true);
    setTimeout(() => {
      window.scrollTo(0, 0);
      navigateTo("/ImgCorporativa");
    }, 700);
  };
  const visiteWeb = (url) => {
    if (url) {
      setTimeout(() => {
        window.open(url, "_blank");
      }, 600);
    }
  };
  const exitVariants = {
    initial: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <motion.div
        initial="initial"
        animate={changePage ? "exit" : "initial"}
        variants={exitVariants}
        transition={{
          duration: 0.7,
          ease: "linear",
          type: "spring",
        }}
    >
      <Section1 visiteWeb={visiteWeb} openNewPage={openNewPage} />
      <Section2 visiteWeb={visiteWeb} />
      <SectionWordpress visiteWeb={visiteWeb} />
      <Section3 visiteWeb={visiteWeb} />
    </motion.div>
  );
}

export default Home;
