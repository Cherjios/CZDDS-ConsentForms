import React from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import {Link} from "react-router-dom"

function Bridge () {

    return(

        <div className="container">
            <div className="row">
                <div className="col"><Navbar/></div>
            </div>
            <br/>

            <div classNam="row">
                <div className="col"> <Jumbotron /></div>
            </div>

            <div className="textlink1">
                <Link to="/CZDDS-ConsentForms/bridgeSp" className="textlink2">Spanish </Link>
            </div>
        
            <div className="row">
                <div className="col"> <h1 className="title">INFORMED CONSENT FOR BRIDGES</h1></div>
            </div>
            <br />
        
        </div>
    )

}
export default Bridge;
