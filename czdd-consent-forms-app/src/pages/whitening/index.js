import React from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import {Link} from "react-router-dom";
import Proceets from "../../components/proceets";

function Whitening(){
    return (
        <div className="contianer">
            <div className="row">
                <div className="col"> <Navbar/></div>
            </div>
            <br/>

            <div className="row"> 
                <div className="col"> <Jumbotron/></div>
            </div>

            <div className="textlink1">
                <Link to="/CZDSS-ConsentForms/whiteningSp" className="textlink2">Spanish </Link>
            </div>


            <div className="row">
                <div className="col"> <h1 className="title">INFORMED CONSENT FOR WHITENING</h1></div>
            </div>
            <br />

        </div>
    )
}

export default Whitening;