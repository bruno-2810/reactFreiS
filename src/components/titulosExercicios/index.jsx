import { Link } from "react-router-dom";
import "./index.scss";

export default function Titulos(props) {

    return (
        <div className="container">
            <div className="conteudo">
                <Link to="/" className="link"><img src="./seta.png" alt="" className="img"/></Link>
                <h2>{props.titulo}</h2>
            </div>
            <div className="faixa"></div>
        </div>
    )

}