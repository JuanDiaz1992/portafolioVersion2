import React from "react";


import "../../stylesheets/Portafolio/papelria.css"

function PapeleriaPlantilla ({titulo,img1,p2,imgOvideo,claseContenedor}){
    return(
        <>
            <article className="papeleria--container">
                <div className="papeleria__title--containter">
                    {titulo}
                </div>
                <picture>
                    {img1}
                </picture>

            <div className="papeleria__div2">
                <div className="papeleria__div2--textAnimg">
                    <p className="textPapeleria">{p2}
                    </p>
                    <picture className="papeleria__imgContainer">
                    {imgOvideo}
                    </picture>
                </div>
            </div>
            </article>
        </>
    )
}

export default PapeleriaPlantilla