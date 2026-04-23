import "../stylesheets/section3.css";
import { lazy, Suspense } from "react";
const FifthSlider = lazy(() => import("./componentesNewHome/fifthSlider"));
const SixthSlider = lazy(() => import("./componentesNewHome/sixthSlider"));
const SeventhSlider = lazy(() => import("./componentesNewHome/seventhSlider"));
const EighthSlider = lazy(() => import("./componentesNewHome/eighthSlider"));

function Section2({visiteWeb}) {
  return (
    <>
      <section className="section3_container">
        <div className="section3_container--div1">
          <Suspense fallback={null}>
            <SeventhSlider visiteWeb={visiteWeb} />
          </Suspense>
        </div>
        <div className="section3_container--div2">
          <Suspense fallback={null}>
            <FifthSlider visiteWeb={visiteWeb} />
          </Suspense>
        </div>
        <div className="section3_container--div3">
          <Suspense fallback={null}>
            <SixthSlider visiteWeb={visiteWeb} />
          </Suspense>
        </div>
        <div className="section3_container--div4">
          <Suspense fallback={null}>
            <EighthSlider visiteWeb={visiteWeb} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
export default Section2;
