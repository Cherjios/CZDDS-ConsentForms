import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";


function RootCanalSp() {

    return (


        <div className="container">

            <h1>Root canal</h1>

            <div className="row">
                <div className="col"> <Navbar /></div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <Jumbotron /></div>
            </div>

            <div className="textlink1">
            <Link to ="/CZDDS-ConsentForms/root-canal" className="textlink2">English </Link>
            
            </div>

        </div>


    )
}

export default RootCanalSp;