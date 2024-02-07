import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import SPproceets from "../../components/SPproceets";
import Footer from "../../components/Footer";

function DenturesSp() {
    return (

        <div className="container">
            <div className="row">
                <div className="col"><Navbar /></div>
            </div>
            <br />

            <div className="row">
                <div className="col"><Jumbotron />
                </div>
            </div>

            <div className="textlink1">
<button type="button" className="btn btn-outline-danger" fdprocessedid="t7kb4"><Link to ="/dentures" className="alink">English </Link></button>
</div>
<br />

            <div className="row">
                <div className="col">
                    <h1 className="title"> CONSENTIMIENTO INFORMATIVO PARA DENTADURAS COMPLETAS/PARCIALES</h1>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>CONOCIMIENTO DEL PACIENTE </h3></div>
            </div>
            <div className="row">
                <div className="col">
                    <ol>

                        <li>Las dentaduras completas/parciales, también llamadas Prostodoncia, es reemplazar la falta de dientes con dientes artificiales. El tratamiento involucra tomar impresiones de la boca para poder fabricar la dentadura en un laboratorio dental.</li>
                        <li>Las dentaduras completas están enteramente soportadas por los tejidos (membrana mucosas, tejidos conectivos y hueso subyacentes).</li>
                        <li>Las dentaduras parciales removibles podrían estar soportadas enteramente por los dientes, o podrían estar soportadas por dientes y tejidos del borde residual.</li>
                        <li>Las dentaduras completas/parciales requieren un mínimo de cinco vistas y podrían requerir varios ajustes después de la inserción. Estos ajustes no tendrán costo por un periodo de seis meses después de la inserción.</li>

                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>BENEFICIOS DE LAS DENTADURAS (No limitado a lo siguiente)</h3></div>
            </div>
            <div className="row">
                <div className="col">
                    <ol>
                        <li> La fabricación de dentaduras completas/parciales tiene la intención de permitirle restaurar la función de masticar, y mejorar su estética, que a su vez, ayudarán a mantener su mordida natural y preservar las estructuras orales remanentes. </li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>RIESGOS DE LAS DENTADURAS (No limitado a lo siguiente)</h3></div>
            </div>
            <div className="row">
                <div className="col">
                    <ol>
                        <li>Entiendo que después el tratamiento podría experimentar dificultad para hablar por varios días o semanas, lo cual eventualmente mejorará.</li>
                        <li>Entiendo que podría experimentar dificultad para masticar. Se necesita un cierto periodo de adaptación antes que al comer sea cómodo.</li>
                        <li>Entiendo que las dentaduras completas/parciales podrían tener problemas de retención que pueden necesitar el uso de adhesivos.</li>
                        <li>Entiendo que podría ocurrir irritación mucosa y requerir ajustes. Entiendo que debo de informar a mi dentista si se presenta dolor.</li>
                        <li>Entiendo que ocasionalmente no se eliminarán totalmente dobleces y arrugas alrededor de la boca con las dentaduras completas/parciales.</li>
                        <li>Entiendo que ocasionalmente podría ocurrir lo siguiente: dificultad para tragar, alimentos bajo de las dentaduras completas/parciales, saliva debajo de las dentaduras completas/parciales, pérdida de la sensación de sabor, dislocación de la dentadura completa/parcial al estornudo o beber agua, mordida de mejillas, labios o lengua y/o atragantamiento. La mayoría de estos son raros y pueden manejarse con adaptación al uso de dentaduras completas/parciales.</li>

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
                        <li> Entiendo que si no recibo dentaduras/tratamiento parcial, mi borde de soporte y estructuras orales podrían cambiar y podría tener dificultad al masticar. Cualquier diente remanente podría moverse y hacer imposible aplicar un tratamiento más tarde.</li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col">
                    <h3>TRATAMIENTOS ALTERNATIVOS PARA LAS DENTADURAS (No se limita a lo siguiente)</h3>
                    <ol>

                        <li>Entiendo que según mi diagnóstico, podrían existir alternativas a dentaduras completas/parciales que podrían involucrar otras disciplinas en odontología. Dentaduras parciales fijas, puentes fijos o implantes son las alternativas de tratamiento más comunes. Podrían requerir el reemplazo de los dientes faltantes con un puente fijo o removible, un diente artificial llamado implante. He preguntado a mi dentista sobre alternativas y gastos asociados. Mis preguntas fueron respondidas a mi satisfacción sobre los procedimientos, sus riesgos, beneficios y costos.</li>
                        <li>Nadie me otorgó garantía ni seguridad de que el tratamiento o cirugía propuesta curarán la(s) condición(es) previamente listada(s) arriba.</li>
                        <li>Al firmar este documento, <b>doy consentimiento para las dentaduras completas/parciales </b>que  describió previamente el doctor, Cesar E. Zamora Pérez D.D.S.  Atestiguo que he discutido los riesgos, beneficios, consecuencias y alternativas del tratamiento de dentaduras con el doctor. He tenido la oportunidad de hacer preguntas y entiendo lo que fue explicado</li>
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
export default DenturesSp;
