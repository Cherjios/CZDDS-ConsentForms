import React from "react";
import { Link } from "react-router-dom";

function Content() {
    return (
        <div classNameName="container">
            <div classNameName="row">
                <div classNameName="col">
                    <h1>English</h1>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to="/extractions" >Extraction</Link></li>
                        <li className="list-group-item">
                            <Link to="/deep-cleaning">Deep Cleaning</Link></li>
                        <li className="list-group-item">
                        <Link to="/root-canal">Root Canal</Link></li>
                        <li className="list-group-item">
                        <Link to="/crowns"> Crown</Link></li>
                        <li className="list-group-item">
                        <Link to="/bridge"> Bridge</Link></li>
                        <li className="list-group-item">
                        <Link to="/dentures">Dentures</Link></li>
                        <li className="list-group-item">
                        <Link to="/whitening">Whitening</Link></li>
                        <li className="list-group-item">
                        <Link to="/implant">Implants</Link></li>
                    </ul>
                </div>
                <div classNameName="col">
                    <h1>Spanish</h1>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to="/extractions-sp">Extracciones</Link></li>
                        <li className="list-group-item">
                            <Link to ="/deep-cleaning-sp">Limpieza Profunda</Link></li>
                        <li className="list-group-item">
                        <Link to="/root-canal-sp">Endodoncia </Link></li>
                        <li className="list-group-item">
                        <Link to="/crownsSp">Coronas</Link></li>
                        <li className="list-group-item">
                        <Link to="/bridgeSp">Puentes</Link></li>
                        <li className="list-group-item">
                        <Link to="/denturesSp">Dentaduras</Link></li>
                        <li className="list-group-item">
                        <Link to="/whiteningSp">Blanqueamiento</Link></li>
                        <li className="list-group-item">
                        <Link to="/implantSp">Implantes</Link></li>
                        
                    </ul>
                </div>

                
            </div>
        </div>
    )
}

export default Content;