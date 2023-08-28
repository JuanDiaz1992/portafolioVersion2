import React from "react";
import { Outlet } from 'react-router-dom';
import Footer from "./footer"
function ComponentePadre(){
    return(
        <>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default ComponentePadre