import React from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import "./style.css";


function RootCanal() {

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
            <Link to ="/CZDDS-ConsentForms/root-canal-sp" className="textlink2">Spanish </Link>
            </div>

            <br/>
            <div className="row">
                <div className="col"> <h1 className="title">INFORMED CONSENT FOR ROOT CANAL</h1></div>
            </div>
            
        </div>

    )
}

export default RootCanal;