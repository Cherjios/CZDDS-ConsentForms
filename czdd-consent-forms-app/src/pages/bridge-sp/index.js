import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom"


function BridgeSp() {
    return (

        <div className="container">
            <div className="row">
                <div className="col"><Navbar /></div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <Jumbotron />
                </div>
            </div>

            <div className="textlink1">
                <Link to="/CZDDS-ConsentForms/bridge" className="textlink2">English </Link>
            </div>

            <div className="row">
                <div className="col"> <h1 className="title">CONSENTIMIENTO INFORMATIVO PARA PUENTES</h1></div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>CONOCIMIENTO DEL PACIENTE </h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>El tratamiento involucra la restauración de áreas dañadas del diente, arriba y debajo de la línea de las encías con un puente.</li>
                        <li> La restauración del diente con un puente tiene dos fases:</li>
                        <ol>
                            <li>Preparación del diente, una impresión para enviar al laboratorio, una construcción y cementación temporal de un puente temporal; y luego,</li>
                            <li>Retiro del puente temporal, ajuste y cementación completado cuando la estética y función han sido verificados. </li>
                        </ol>
                        <li>Una vez que se colocó un puente temporal, es necesario volver para que se coloque el puente nuevo, tan pronto esté listo, porque el puente temporal no fue preparado para funcionar tan bien como el puente permanente. Fallar en reemplazar el puente temporal por el puente permanente, podría llevar al deterioro del diente, enfermedad de encías, infecciones, problemas para masticar y/o hasta la pérdida del diente.</li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>BENEFICIOS DE LOS PUENTES (No limitado a lo siguiente)</h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>Los puentes dentales cubren literalmente los espacios creados por uno o más dientes faltantes.</li>
                        <li>Un puente se usa típicamente para fortalecer un diente dañado por el deterioro, fractura o restauraciones previas. También sirve para proteger un diente que ha tenido un tratamiento de conducto de raíz o mejorar la manera en que sus dientes encajan.  </li>
                        <li>Los puentes se usarán con el propósito de mejorar la apariencia de dientes dañados, decolorados, mal formados, desalineados o pobremente espaciados.</li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>RIESGOS DE LOS PUENTES (No limitado a lo siguiente)</h3></div>
            </div>



        </div>

    )
}

export default BridgeSp;