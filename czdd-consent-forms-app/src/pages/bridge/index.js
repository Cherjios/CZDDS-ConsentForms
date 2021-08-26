import React from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom"

function Bridge() {

    return (

        <div className="container">
            <div className="row">
                <div className="col"><Navbar /></div>
            </div>
            <br />

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

            <div className="row">
                <div className="col"> <h3>FACTS  FOR CONSIDERATION </h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>Treatment involves restoring damaged areas of the tooth above and below the gum line with a Bridge.</li>
                        <li>Restoration of a tooth with a Bridge requires two phases:</li>
                            <lo>
                                <li>Preparation of the tooth, an impression to send to the lab, and construction and temporary cementation of a temporary Bridge: and later,</li>
                                <li>Removal of the temporary Bridge, adjustment and cementation of the completed Bridge when esthetics and function have been verified. </li>
                                </lo>
                              <li>Once a Temporary Bridge has been placed, it is essential to return to have the new Bridge placed as soon as it is ready because the temporary Bridge is not intended to function as well as the permanent Bridge. Failing to replace the temporary Bridge with a completed one could lead to decay, gym disease, infections, problems with your bite, and even loss of the tooth.</li>
                    </ol>
                </div>
            </div>
            <br />

        </div>
    )

}
export default Bridge;
