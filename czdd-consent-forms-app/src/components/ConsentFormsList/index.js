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
                        <li class="list-group-item">Deep Cleaning</li>
                        <li class="list-group-item">Root Canal</li>
                        <li class="list-group-item">Crown</li>
                        <li class="list-group-item">Bridge</li>
                        <li class="list-group-item">Denture</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Spanish</h1>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <Link to="/CZDDS-ConsentForms/extractions-sp">Estracciones</Link></li>
                        <li class="list-group-item">Limpieza Profunda</li>
                        <li class="list-group-item">Root Canal</li>
                        <li class="list-group-item">Coronas</li>
                        <li class="list-group-item">Puente</li>
                        <li class="list-group-item">Dentadura</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Content;