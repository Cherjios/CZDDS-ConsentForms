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


        </div>
    )
}

export default Crowns; 