import React from "react";
import { Link } from "react-router-dom";


function Content() {
    return (
        <div classNameName="container">
            <div classNameName="row">
                <div classNameName="col">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to="/bridge"> Bridge</Link> / <Link to="/bridgeSp">Puentes</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/crowns"> Crown</Link> / <Link to="/crownsSp">Coronas</Link></li>
                        <li className="list-group-item">
                            <Link to="/deep-cleaning">Deep Cleaning</Link> / <Link to ="/deep-cleaning-sp">Limpieza Profunda</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/dentures">Dentures</Link> / <Link to="/denturesSp">Dentaduras</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/extractions" >Extraction</Link> / <Link to="/extractions-sp">Extracciones</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/implant">Implants</Link> / <Link to="/implantSp">Implantes</Link>
                        </li>
                        <li className="list-group-item">                        
                            <Link to="/root-canal">Root Canal</Link> / <Link to="/root-canal-sp">Endodoncia </Link>
                        </li>                                           
                        <li className="list-group-item">
                            <Link to="/whitening">Whitening</Link> / <Link to="/whiteningSp">Blanqueamiento</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/fixedortho">Fixed ortho</Link> / <Link to="/fixedorthoSp">Ortodoncia braquets</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Content;