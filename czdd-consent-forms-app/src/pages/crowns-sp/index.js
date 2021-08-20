import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";


function CrownsSp() {
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
                <Link to="/CZDDS-ConsentForms/crowns" className="textlink2">English </Link>
            </div>

            <div className="row">
                <div className="col"> <h1 className="title">CONSENTIMIENTO INFORMATIVO PARA CORONAS</h1></div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>CONOCIMIENTO DEL PACIENTE </h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>El tratamiento involucra la restauración de áreas dañadas del diente, arriba y debajo de la línea de las encías con una corona.</li>
                        <li>La restauración del diente con una corona tiene dos fases:</li>
                        <ol>
                            <li>Preparación del diente, una impresión para enviar al laboratorio, una construcción y cementación temporal de una corona temporal; y luego,</li>
                            <li>Retiro de la corona temporal, ajuste y cementación completado cuando la estética y función han sido verificados.</li>
                        </ol>
                        <li>Una vez que se colocó una corona temporal, es necesario volver para que se coloque la nueva corona tan pronto este lista, ya que la corona temporal no fue preparado para funcionar tan bien como la corona permanente. Fallar en reemplazar la corona temporal por la corona permanente, podría llevar al deterioro del diente, enfermedad de encías, infecciones, problemas para masticar y/o hasta la pérdida del diente.</li>
                    </ol>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col"> <h3>BENEFICIOS DE LAS CORONAS (No limitado a lo siguiente)</h3></div>
            </div>
            <div className="row">
                <div className="col">
                    <ol>
                        <li>Una corona se usa típicamente para fortalecer un diente dañado por el deterioro, fractura o restauraciones previas. También sirve para proteger un diente que ha tenido un tratamiento de conducto de raíz o mejorar la manera en que sus dientes encajan. </li>
                        <li>Las coronas se usarán con el propósito de mejorar la apariencia de dientes dañados, decolorados, mal formados, desalineados o pobremente espaciados.</li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>RIESGOS DE LAS CORONAS (No limitado a lo siguiente)</h3></div>
            </div>
            <div className="row">
                <div className="col">
                    <ol>
                        <li>Entiendo que preparar a un diente dañado podría irritar aún más el tejido nervioso (llamado pulpa) en el centro del diente, dejando a mi diente sensible al calor, frío o presión. Dicha sensibilidad en el diente podría requerir tratamiento adicional incluyendo un tratamiento endodóntico o de conducto de raíz.</li>
                        <li>Entiendo que al mantener abierta mi boca durante el tratamiento podría dejar mi mandíbula tiesa y dolorida y podría generar dificultad para abrir mi boca ampliamente por varios días. Esto podría ser ocasionalmente una indicación de un problema más profundo. Debo notificar a su oficina si se presenta este u otro problema. </li>
                        <li>Entiendo que una corona puede alterar la manera en que mis dientes encajan entre si, y hacer que mi mandíbula duela. Esto podría requerir de un ajuste en mi mordida al alterar la superficie de mordida de la corona o de los dientes adyacentes. </li>
                        <li>Entiendo que el borde de una corona esta por lo general cerca de la línea de encías, la cual es un área propensa a irritar las encías, generar infecciones o deterioro. El uso adecuado del cepillo e hilo dental en el hogar, una dieta saludable y limpiezas profesionales regulares son algunas de las medidas preventivas  esenciales para ayudar a controlar estos problemas.  </li>
                        <li>Entiendo que podría recibir anestesia local y/u otro medicamento. En raras ocasiones, los pacientes podrían tener una reacción a la anestesia, lo cual podría requerir atención médica de emergencia o ver que reduce su habilidad para tragar. Esto aumenta la probabilidad normal de tragar objetos extraños durante el tratamiento. Raramente por motivo de la inyección,  se puede presentar un daño temporal o permanente en el nervio.</li>
                        <li>Entiendo que todos los medicamentos tienen el potencial de riesgos, efectos secundarios o interacciones de fármacos. Por lo tanto, es suma importancia que informe a mi dentista de todos los medicamentos que estoy tomando actualmente.  </li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col">
                    <h3>
                        CONSECUENCIAS SI NO SE ADMINISTRA EL TRATAMIENTO (No limitado a lo siguiente)
                    </h3>
                    <ol>
                        <li>
                            Entiendo que si no se realiza ningún tratamiento, es posible que continúe experimentando síntomas, que podrían incluir dolor y/o infección, deterioro del hueso que rodea mis dientes, cambios en la mordida, malestar en la articulación de la mandíbula y posiblemente la pérdida prematura de otros dientes.
                        </li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col">
                    <h3>TRATAMIENTOS ALTERNATIVOS PARA LAS CORONAS (No se limita a lo siguiente)</h3>
                    <ol>
                       <li> Entiendo la razón por la que se colocará la corona, podrían existir alternativas. He preguntado a mi dentista sobre éstas y sus respectivos costos. Mis preguntas han sido respondidas a mi satisfacción sobre los procedimientos, sus riesgos, beneficios y costos.</li>
                        <li> Nadie me otorgó garantía ni seguridad de que el tratamiento o cirugía propuesta curarán la(s) condición(es) previamente listada(s) arriba.</li>
                        <li> Al firmar este documento, doy consentimiento para la preparación y colocación de la corona como describió previamente el doctor, Cesar E. Zamora Pérez D.D.S.  Atestiguo que he discutido los riesgos, beneficios, consecuencias y alternativas del tratamiento de Corona con el doctor. He tenido la oportunidad de hacer preguntas y entiendo lo que fue explicado</li>
                    </ol>

                </div>
            </div>
            <br />




        </div>
    )
}

export default CrownsSp;