import React from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";

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

        </div>
    )

}
export default Bridge;
