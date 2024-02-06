import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import SPproceets from "../../components/SPproceets";
import Footer from "../../components/Footer";




function RootCanalSp() {

    return (
        <div className="container">
            <div className="row">
                <div className="col"> <Navbar /></div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <Jumbotron /></div>
            </div>

            <div className="textlink1">
            <button type="button" className="btn btn-outline-danger" fdprocessedid="t7kb4"><Link to ="/root-canal" className="alink">English </Link></button>
            </div>

            <br />
            <div className="row">
                <div className="col"> <h1 className="title">CONSENTIMIENTO INFORMADO PARA ENDODONCIA</h1></div>
            </div>
            <br/>

            <div className="row">
                <div className="col"> <h3>CONOCIMIENTO DEL PACIENTE </h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>El objetivo del tratamiento de endodoncia es salvar un diente que, de otro modo, podría requerir extracción.</li>
                        <li>El tratamiento de endodoncia tiene una tasa de éxito muy alta, como ocurre con todos los procedimientos médicos y dentales, es un procedimiento cuyos resultados no se pueden garantizar.</li>
                        <li>El tratamiento del endodoncia se realiza para corregir un problema aparente y, en ocasiones, surge un problema oculto, no diagnosticado o no aparente.</li>
                        <li>Este procedimiento no evitará futuras caries, fracturas o enfermedades de las encías y, ocasionalmente, un diente que ha tenido un tratamiento de endodoncia puede requerir un nuevo re-tratamiento, una cirugía de endodoncia o una extracción dental.</li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>RIESGOS DEL TRATAMIENTO DE ENDODONCIA (No se limitan a los siguientes) Son poco probables pero pueden ocurrir.</h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>Separación de instrumentos en el canal.</li>
                        <li>Perforaciones (aberturas adicionales) del canal con instrumentos.</li>
                        <li>Conductos radiculares bloqueados que no se pueden completar idealmente.</li>
                        <li>Curación incompleta.</li>
                        <li>Infección postoperatoria que requiere tratamiento adicional o el uso de antibióticos. </li>
                        <li>Fractura de diente y / o raíz que puede requerir extracción.</li>
                        <li>Fractura, astillado o aflojamiento de un diente o corona existente.</li>
                        <li>Molestias posteriores al tratamiento. </li>
                        <li>Entumecimiento temporal o permanente</li>
                        <li>Cambio en la mordida o dificultad en la articulación de la mandíbula (problemas de ATM o TMD)</li>
                        <li>Pueden ocurrir problemas médicos si no se completan el tratamiento de endodoncia.</li>
                        <li>Reacción a la anestesia</li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"><h3> TRATAMIENTO ALTERNATIVOS (No limitado a los siguientes)</h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>Ningún tratamiento en absoluto. </li>
                        <li>Esperando un desarrollo más definitivo de los síntomas. </li>
                        <li> Extracción: para ser reemplazado con una dentadura postiza, un puente o un implante.</li>
            </ol>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col"><h5>Después de completar el procedimiento de root canal, lo remitirán nuevamente a su dentista para una restauración permanente (relleno y/o corona). La falta de restauración adecuada del diente de manera oportuna (generalmente dentro de los 30 días) aumenta significativamente la posibilidad de falla del procedimiento de conducto radicular o fractura del diente</h5></div>
            </div>
            <br/>

            <div className="row">
                <div className="col"> <h3>CONSECUENCIAS SI NO SE ADMINISTRA TRATAMIENTO (No limitado a lo siguiente)</h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>Entiendo que si no se realiza ningún tratamiento, es posible que continúe experimentando síntomas, que podrían incluir dolor y / o infección, deterioro del hueso que rodea mis dientes, cambios en la mordida, malestar en la articulación de la mandíbula y posiblemente la pérdida prematura de otros dientes.</li>
                        <li>Nadie me ha dado ninguna garantía o seguridad de que el tratamiento o la cirugía propuesta curarán o mejorarán los sintomas enumeradas anteriormente.
</li>
                        <li>Al firmar este documento, <b>doy mi consentimiento para el tratamiento de endodoncia</b>, según lo descrito anteriormente por el médico, Cesar E. Zamora Perez D.D.S. Doy fe de que he hablado con el médico sobre los riesgos, los beneficios, las consecuencias y las alternativas al tratamiento de conducto. Tuve la oportunidad de hacer preguntas y comprendo lo que se ha explicado. </li>
            </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col">
                    <SPproceets />
                    <Footer />

                </div>
            </div>

        </div>


    )
}

export default RootCanalSp;