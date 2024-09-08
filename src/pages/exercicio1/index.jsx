import Balao from "../../components/balao";
import Cabecalho from "../../components/cabecalho";
import Titulos from "../../components/titulosExercicios";
import "./index.scss";

export default function Exercicio1() {
    return (
        <div>

            <Cabecalho />
            <Titulos titulo="Exercicio 01 - Cupom de desconto" cor="#FFCE37"/>
            <Balao descricao="Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto."/>

        </div>

    )

}