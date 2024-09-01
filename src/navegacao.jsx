import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";
import Exercicio1 from "./pages/exercicio1";
import Exercicio2 from "./pages/exercicio2";
import Exercicio4 from "./pages/exercicio4";

export default function Navegacao () {
    return(

        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Inicio/>}/>
                <Route path='/sobre' element = {<Sobre/>}/>
                <Route path='/exercicio1' element = {<Exercicio1/>}/>
                <Route path='/exercicio2' element = {<Exercicio2/>}/>
                <Route path='/exercicio4' element = {<Exercicio4/>}/>
            </Routes>
        </BrowserRouter>


    )
}