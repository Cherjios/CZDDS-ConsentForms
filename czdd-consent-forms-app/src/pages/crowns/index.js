import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import Proceets from "../../components/proceets";
import { Link } from "react-router-dom";


function Crowns (){
    return(

        <div className="container">
           <div className="row">
               <div className="col"> <Navbar /></div>
           </div>
            <br/>
            
            <div classNam="row">
                <div className="col"> <Jumbotron /></div>
            </div>

            <div className="textlink1">
            <Link to ="/CZDDS-ConsentForms/crownsSp" className="textlink2">Spanish </Link>
            </div>

            <div className="row">
                <div className="col"> <h1 className="title">INFORMED CONSENT FOR CROWNS</h1></div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>FACTS  FOR CONSIDERATION </h3></div>
            </div>
            <div className="row">
                <div className="col">
                    <ol>
                        <li>Restoration of a tooth with a crown requires two phases:
                            <ol>
                                <li>Preparation of the tooth, an impression to send to the lab, and construction and temporary cementation of a temporary crown; and later,</li>
                                <li>Removal of the temporary crown, adjustment and cementation of the completed crown when esthetics and function have been verified. </li>
                            </ol>
                        </li>
                    </ol>
                </div>
            </div>
            <br />


        </div>
    )
}

export default Crowns; 