import React from "react";
import "../../stylesheets/Portafolio/Plantilla1.css"

function Planilla1 ({titulo,img1,p2,links,imgOvideo}){
    return(
        <>
            <section className="section1">

                <div className="section1__div1">
                    {titulo}
                    <picture>
                        <img src={img1} alt="" />
                    </picture>
                </div>

                <div className="section1__div2">
                    <div className="section1__div2--textAndIcons">
                        <p>{p2}
                        </p>
                        <div className="section1__div2--textAndIcons--icons">
                        {links}
                        </div>

                    </div>

                    <picture className="section1__imgContainer">
                    {imgOvideo}
                    </picture>
    
                </div>
                


            </section>

        </>
    )
}

export default Planilla1