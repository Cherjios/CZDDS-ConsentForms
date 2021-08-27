import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import {Link} from "react-router-dom"


function BridgeSp (){
    return(
        
        <div className="container">
            <div className="row"> 
                <div className="col"><Navbar/></div>
            </div>
            <br/>

            <div className="row">
                <div className="col"> <Jumbotron />
                </div>
            </div>

            <div className="textlink1">
                <Link to="/CZDDS-ConsentForms/bridge" className="textlink2">English </Link>
            </div>





        </div>

    )
}

export default BridgeSp;