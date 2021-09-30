import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import SPproceets from "../../components/SPproceets";
import {Link}   from "react-router-dom";
import Footer from "../../components/Footer";


function Implantsp (){
    return(
        <div className="container">
            <div className="row">
                <div className="col"><Navbar /></div>
            </div>
            <br/>

            <div className="row">
                <div className="col"> <Jumbotron /></div>
            </div>

            <div className="textlink1">
                <Link to="/CZDSS-ConsentForms/implant" className="textlink2">English </Link>
            </div>

        </div>
    )
}

export default Implantsp