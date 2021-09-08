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








        </div>
    )
}
export default DenturesSp;
