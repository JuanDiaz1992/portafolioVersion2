import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import SectionWordpress from "./sectionWordpress";

function Home() {
  const visiteWeb = (url) => {
    if (url) {
      setTimeout(() => {
        window.open(url, "_blank");
      }, 600);
    }
  };
  return (
    <>
      <Section1 visiteWeb={visiteWeb} />
      <Section2 visiteWeb={visiteWeb} />
      <SectionWordpress visiteWeb={visiteWeb} />
      <Section3 visiteWeb={visiteWeb} />
    </>
  );
}

export default Home;
