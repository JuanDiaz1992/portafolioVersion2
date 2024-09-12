import "../stylesheets/section3.css";
import FifthSlider from "./componentesNewHome/fifthSlider";
import SixthSlider from "./componentesNewHome/sixthSlider";
import SeventhSlider from "./componentesNewHome/seventhSlider";
import EighthSlider from "./componentesNewHome/eighthSlider";

function Section2(props) {
  return (
    <>
      <section className="section3_container">
        <div className="section3_container--div1">
          <SeventhSlider />
        </div>
        <div className="section3_container--div2">
          <FifthSlider />
        </div>
        <div className="section3_container--div3">
          <SixthSlider />
        </div>
        <div className="section3_container--div4">
          <EighthSlider />
        </div>
      </section>
    </>
  );
}
export default Section2;
