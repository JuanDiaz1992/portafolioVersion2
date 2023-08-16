import React from "react";
import { useNavigate } from "react-router-dom";


function Renders3d(){
    const navigate = useNavigate(); 

    return(
        <>
        
        <button onClick={() => navigate(-1)}>Go back</button>
        <h2>Página en construcción</h2>
        
        </>
    )
}

export default Renders3d