import React from "react";
import { Link } from "react-router-dom";

function Content() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>English</h1>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <Link to="/CZDDS-ConsentForms/extractions" >Extraction</Link></li>
                        <li class="list-group-item">
                            <Link to="/CZDDS-ConsentForms/deep-cleaning">Deep Cleaning</Link></li>
                        <li class="list-group-item">
                        <Link to="/CZDDS-ConsentForms/root-canal">Root Canal</Link></li>
                        <li class="list-group-item">
                        <Link to="/CZDDS-ConsentForms/crowns"> Crown</Link></li>
                        <li class="list-group-item">
                        <Link to="/CZDDS-ConsentForms/bridge"> Bridge</Link></li>
                        <li class="list-group-item">
                        <Link to="/CZDDS-ConsentForms/dentures">Dentures</Link></li>
                        <li class="list-group-item">
                        <Link to="/CZDSS-ConsentForms/whitening">Whitening</Link></li>
                        <li class="list-group-item">
                        <Link to="/CZDSS-ConsentForms/implant">Implants</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Spanish</h1>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <Link to="/CZDDS-ConsentForms/extractions-sp">Extracciones</Link></li>
                        <li class="list-group-item">
                            <Link to ="/CZDDS-ConsentForms/deep-cleaning-sp">Limpieza Profunda</Link></li>
                        <li class="list-group-item">
                        <Link to="/CZDDS-ConsentForms/root-canal-sp">Endodoncia </Link></li>
                        <li class="list-group-item">
                        <Link to="/CZDDS-ConsentForms/crownsSp">Coronas</Link></li>
                        <li class="list-group-item">
                        <Link to="/CZDDS-ConsentForms/bridgeSp">Puentes</Link></li>
                        <li class="list-group-item">
                        <Link to="/CZDDS-ConsentForms/denturesSp">Dentaduras</Link></li>
                        <li class="list-group-item">
                        <Link to="/CZDSS-ConsentForms/whiteningSp">Blanqueamiento</Link></li>
                        <li class="list-group-item">
                        <Link to="/CZDSS-ConsentForms/implantSp">Implantes</Link></li>
                        
                    </ul>
                </div>

                
            </div>
        </div>
    )
}

export default Content;