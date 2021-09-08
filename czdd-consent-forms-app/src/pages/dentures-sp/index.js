import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import { Llink } from "react-router-dom"
import SPproceets from "../../components/SPproceets";

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








        </div>
    )
}
export default DenturesSp;
