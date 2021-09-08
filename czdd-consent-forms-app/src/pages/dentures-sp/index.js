import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import {Llink } from "react-router-dom"
import SPproceets from "../../components/SPproceets";

function DenturesSp (){
    return(

        <div className="container">
            <div className="row">
                <div className="col"><Navbar /></div>
            </div>
            <br/>

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

        </div>
    )
}
export default DenturesSp;
