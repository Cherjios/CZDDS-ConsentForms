import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import Proceets from "../../components/proceets";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function Dentures() {
    return (
        <div className="container">
            <div className="row">
                <div className="col"><Navbar /></div>
            </div>

            <div className="row">
                <div className="col"> <Jumbotron />
                </div>
            </div>

            <div className="textlink1">
                <Link to="/CZDDS-ConsentForms/denturesSp" className="textlink2">Spanish </Link>
            </div>

            <div className="row">
                <div className="col"> <h1 className="title">INFORMED CONSENT FOR COMPLETE OR PARTIAL DENTURES</h1></div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>FACTS  FOR CONSIDERATION </h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>Complete/partial dentures, also called Prosthodontics, are replacing missing teeth with artificial teeth. Treatment involves taking impressions of the mouth to have the denture fabricated by a dental laboratory.</li>
                        <li>Complete dentures are entirely supported by the tissues (mucous membrane, connective tissues, and underlying bone.)</li>
                        <li>Removable partial dentures may be either entirely tooth supported or may derive its support from both teeth and the tissues of the residual ridge.</li>
                        <li>Complete/partial dentures require a minimum of five visits and may require multiple adjustments after insertion. This adjustment will be at no cost for a period of six months after insertion.</li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>BENEFITS OF DENTURES (Not limited to the following)</h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>Fabrication of complete/partial dentures is intended to allow you to restore mastication function and esthetics, which will help maintain your natural bite and preserve remaining oral structures. </li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>RISKS OF DENTURES (Not limited to the following)</h3></div>
            </div>
            <div className="row">
                <div className="col">
                    <ol>
                        <li>I understand that following treatment I may experience difficulty with speech for several days or weeks, which will eventually improve.</li>
                        <li>I understand that I may have trouble masticating (chewing). A certain period of adaptation is necessary before eating will be comfortable.</li>
                        <li>I understand that dentures/partials may have retention problems that may require use of adhesive.</li>
                        <li>I understand that mucosal irritation may occur and require adjustments. I understand that I must inform my dentist if soreness is present.</li>
                        <li>I understand that occasionally folds and creases about the mouth will not be eliminated with complete/partial dentures.</li>
                        <li>I understand that occasionally the following may occur difficulty swallowing, food under the complete/partial dentures, saliva under the complete/partial dentures, loss of taste sensation, dislodgement of complete/partial dentures on sneezing or drinking water, cheek, lip or tongue biting, gagging. Most of these are rare and can be handle by adaptation to wearing complete/partial dentures.</li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col">
                    <h3>CONSEQUENCES IF NO TREATMENT IS ADMINISTERED (Not limited to the following) </h3>
                    <ol>
                        <li>I understand that if I do not have denture/partial treatment, my supporting ridge and oral structures may change and that I may have difficulty masticating. Any remaining teeth may shift and make it impossible for treatment later. </li>
                    </ol>
                </div>
            </div>

            <br />
            <div className="row">
                <div className="col">
                    <h3> ALTERNATIVE TO DENTURES (Not limited to the following)</h3>
                    <ol>
                        <li>I understand that depending on my diagnosis, alternatives to complete/partial dentures treatment may exist which involves other disciplines in dentistry. Fixed partial denture or fixed bridges or implants are the most common alternative treatment. It may require replacing the missing teeth with a removable or fixed bridge or an artificial tooth called an implant. I have asked my dentist about the alternatives and associated expenses.  My questions have been answered to my satisfaction regarding the procedures, their risks, benefits, and cost.</li>
                        <li>No guarantee or assurance has been given to me by anyone that the prosed treatment or surgery will cure or improve the condition(s) listed above. </li>
                        <li>By signing this document, <b>I consent to complete/partial dentures</b> as described by the doctor, Cesar E. Zamora Perez D.D.S. I attest that I have discussed the risk, benefits, consequences, and alternatives to complete/partial dentures with the doctor. I had the opportunity to ask questions, and I understand what has been explained. </li>
                    </ol>
                </div>
            </div>

            <br/>

        <div className="row">
            <div className="col">
                <Proceets />
                <Footer />
            </div>
        </div>


        </div>
    )
}

export default Dentures;