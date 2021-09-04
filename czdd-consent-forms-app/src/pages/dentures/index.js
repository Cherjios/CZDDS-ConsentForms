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
            <h3>Dentures</h3>

        </div>
    )
}

export default Dentures;