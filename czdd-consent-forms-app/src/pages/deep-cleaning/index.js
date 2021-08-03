import React from "react";
import "./style.css"
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";



function Deepcleaning (){

    return(
        <div className="container">
           
           <div className="row">
               <div className="col"> <Navbar/> </div>
           </div>
           <br/>

           <div className="row">
               <div className="col"><Jumbotron/></div>
           </div>




        </div>
    )
}
export default Deepcleaning;