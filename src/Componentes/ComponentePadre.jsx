import React from "react";

import { Outlet } from 'react-router-dom';


function ComponentePadre(){
    return(
        <>
        <Outlet/>

        </>
    )
}

export default ComponentePadre