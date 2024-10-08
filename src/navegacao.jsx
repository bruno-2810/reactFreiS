import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";
import Exercicio1 from "./pages/exercicio1";
import Exercicio2 from "./pages/exercicio2";
import Exerci3 from "./pages/exercicio3";
import Exercicio4 from "./pages/exercicio4";
import Exercicio5 from "./pages/exercicio5";
import Exercicio10 from "./pages/exercicio10";
import Exercicio11 from "./pages/exercicio11";
import Exercicio6 from "./pages/exercicio6";
import Exercicio7 from "./pages/exercicio7";
import Exercicio9 from "./pages/exercicio9";

export default function Navegacao () {
    return(

        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Inicio/>}/>
                <Route path='/sobre' element = {<Sobre/>}/>
                <Route path='/exercicio1' element = {<Exercicio1/>}/>
                <Route path='/exercicio2' element = {<Exercicio2/>}/>
                <Route path='/exercicio3' element = {<Exerci3/>}/>
                <Route path='/exercicio4' element = {<Exercicio4/>}/>
                <Route path='/exercicio5' element = {<Exercicio5/>}/>
                <Route path='/exercicio10' element = {<Exercicio10/>}/>
                <Route path='/exercicio11' element = {<Exercicio11/>}/>
                <Route path='/exercicio6' element = {<Exercicio6/>}/>
                <Route path='/exercicio7' element = {<Exercicio7/>}/>
                <Route path='/exercicio9' element = {<Exercicio9/>}/>
            </Routes>
        </BrowserRouter>


    )
}