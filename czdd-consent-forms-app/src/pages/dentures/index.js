import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import Proceets from "../../components/proceets";
import { Link } from "react-router-dom";

function Dentures (){
    return(
        <div className="container">
            <div className="row">
                <div className="col"><Navbar/></div>
            </div>

            <div className="row">
                <div className="col"> <Jumbotron />
                </div>
            </div>

            <div className="textlink1">
                <Link to="/CZDDS-ConsentForms/denturesSp" className="textlink2">Spanish </Link>
            </div>
            

        </div>
    )
}

export default Dentures;