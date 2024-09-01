import Balao from "../../components/balao";
import Cabecalho from "../../components/cabecalho";
import Titulos from "../../components/titulosExercicios";
import "./index.scss";




export default function Exercicio2(props) {

    return (


        <div className="container-e2">

            <Cabecalho />
            <Titulos titulo="Exercício 02 - Converter Kg/gramas"/>
            <Balao descricao="Implementar um programa em Javascript para converter kilos em gramas."/>

            <div className="menu">
                <div className="secao">
                  
                        <h3>Valor em Kilos</h3>
                        <input type="text" />
                        <button>Executar</button>
                   
                </div>
            </div>
        </div>
    )


}