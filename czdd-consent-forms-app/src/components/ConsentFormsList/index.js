import React from "react";

function Content() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>English</h1>
                    <ul class="list-group">
                        <li class="list-group-item">Extraction</li>
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
                        <li class="list-group-item">Estracciones</li>
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