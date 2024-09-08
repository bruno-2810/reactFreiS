import Balao from '../../components/balao';
import Cabecalho from '../../components/cabecalho';
import Titulos from '../../components/titulosExercicios';
import { useState } from 'react';
import './index.scss';



export default function Exercicio10() {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [informacoes, setInformacoes] = useState([]);

    function adicionar() {
        setInformacoes([...setInformacoes, altura]);
    }

    //`Peso: {peso} | Altura: {altura}`

    return (



        <div container>
            <Cabecalho />
            <Titulos titulo="Exercício 10 - Calculo de IMC com histórico" cor="#B75333" />
            <Balao descricao="Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação" />

            <div className='menue10'>
                <div className='secao'>

                    <div className='entradas'>
                        <div className='entrada'>

                            <h3 className='h3'>Altura</h3>
                            <input type="text" className='input' value={altura} onChange={e => setAltura(e.target.value)} />
                        </div>

                        <div className='entrada'>

                            <h3 className='h3'>Peso</h3>
                            <input type="text" className='input' value={peso} onChange={e => setPeso(e.target.value)} />
                        </div>

                    </div>

                    <button className='button' onClick={adicionar}>Executar</button>
                </div>

                <div className='resposta'>
                    {informacoes}
                </div>

            </div>

        </div>
    )

}