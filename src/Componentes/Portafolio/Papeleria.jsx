import React from "react";


import "../../stylesheets/Portafolio/papelria.css"

function PapeleriaPlantilla({ titulo, img1, p2, imgOvideo, claseContenedor }) {
    return (
        <article className={`premium_card_container ${claseContenedor || ""}`}>
            <div className="premium_card_text_side">
                <div className="premium_card_title">{titulo}</div>
                <p className="premium_card_desc">{p2}</p>
            </div>
            <div className="premium_card_visuals">
                <div className="premium_img_primary">{img1}</div>
                {imgOvideo && <div className="premium_img_secondary">{imgOvideo}</div>}
            </div>
        </article>
    );
}

export default PapeleriaPlantilla