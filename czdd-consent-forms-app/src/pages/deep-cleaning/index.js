import React from "react";
import "./style.css"
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import Proceets from "../../components/proceets";



function Deepcleaning() {

    return (
        <div className="container">

            <div className="row">
                <div className="col"> <Navbar /> </div>
            </div>
            <br />

            <div className="row">
                <div className="col"><Jumbotron /></div>
            </div>

            <div className="textlink1">
                <Link to="/CZDDS-ConsentForms/deep-cleaning-sp" className="textlink2">Español</Link>
            </div>

            <div className="row">
                <div className="col"> <h1 className="title">INFORMED CONSENT FOR DEEP CLEANING</h1></div>
            </div>
            <br />


            <div className="row">
                <div className="col">
                    <Proceets />
                </div>


            </div>
        </div>
    )
}
export default Deepcleaning;