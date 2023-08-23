import React from 'react';
import { HashRouter, Routes, Route, Navigate,} from 'react-router-dom';
import ComponentePadre from './Componentes/ComponentePadre';
import Home from './Componentes/newHome';
import ImgCorporativa from "./Componentes/Portafolio/ImgCorporativa"
import Renders3d from "./Componentes/Portafolio/Renders3d"
import DisenoWeb from "./Componentes/Portafolio/DisenoWeb"

function Router(){
    return(
            <HashRouter>
                <Routes>
                <Route exact path='/' element={        
                <React.Suspense fallback={<div>cargando...</div>}>
                    <ComponentePadre />
                    </React.Suspense>}> 

                    <Route index element={
                    <React.Suspense fallback={<div>cargando...</div>}>
                    <Home />
                    </React.Suspense>
                }/>
                

                <Route element={
                    <React.Suspense fallback={<div>cargando...</div>}>
                    <Home/>
                    </React.Suspense>
                }/>

                <Route path='DisenoWeb' element={
                    <React.Suspense fallback={<div>cargando...</div>}>
                    <DisenoWeb/>
                    </React.Suspense>
                    }/>

                <Route path='ImgCorporativa' element={
                    <React.Suspense fallback={<div>cargando...</div>}>
                    <ImgCorporativa/>
                    </React.Suspense>
                    }/>

                <Route path='Renders3d' element={
                    <React.Suspense fallback={<div>cargando...</div>}>
                    <Renders3d/>
                    </React.Suspense>
                    }/>



                    <Route path='*' element={<Navigate to="/"/>}/>
                </Route>   

                </Routes>

            </HashRouter>
    )
}
export default Router