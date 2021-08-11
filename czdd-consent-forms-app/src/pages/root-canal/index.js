import React from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import Proceets from "../../components/proceets";
import { Link } from "react-router-dom";

import "./style.css";


function RootCanal() {

    return (
        <div className="container">
            <div className="row">
                <div className="col"> <Navbar /></div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <Jumbotron /></div>
            </div>

            <div className="textlink1">
                <Link to="/CZDDS-ConsentForms/root-canal-sp" className="textlink2">Spanish </Link>
            </div>

            <br />
            <div className="row">
                <div className="col"> <h1 className="title">INFORMED CONSENT FOR ROOT CANAL</h1></div>
            </div>

            <br />
            <div className="row">
                <div className="col"> <h3>FACTS  FOR CONSIDERATION </h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>The goal of root canal treatment is to save   a tooth that might otherwise require extraction.</li>
                        <li>Root canal treatment has a very high success rate, as with all medical and dental procedures, it is a procedure whose results cannot be guaranteed.</li>
                        <li>Root canal treatment is performed to correct an apparent problem and occasionally an unapparent, undiagnosed or hidden problem arises.</li>
                        <li>This procedure will not prevent future tooth decay,  tooth fracture or gum disease, and occasionally  a tooth that has had root canal treatment may require re-treatment, endodontic surgery or tooth extraction.</li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>RISKS OF ROOT CANAL (Not limited to the following) Are unlikely, but may occur.</h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>Instrument separation in the canal.</li>
                        <li>Perforations (extra openings) if the canal with instruments.</li>
                        <li>Blocked root canals that cannot be ideally completed.</li>
                        <li>Incomplete healing.</li>
                        <li>Post-operative infection requiring additional treatment or the use of antibiotics.</li>
                        <li>Tooth and/or root fracture that may require extraction.</li>
                        <li>Fracture, chipping or loosening of existing tooth or crown. </li>
                        <li>Post-treatment discomfort.</li>
                        <li>Temporary or permanent numbness </li>
                        <li>Change in the bite or jaw joint difficulty (TMJ problems or TMD)</li>
                        <li>Medical problems may occur if I do not have the root canal completed.</li>
                        <li>Reaction to anesthetics chemicals or medications.</li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>ALTERNATIVE TREATMENTS (Not limited to the following)</h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li> No treatment at all.</li>
                        <li>Waiting for more definitive development of symptoms. </li>
                        <li>Extraction: to be replaced with nothing, a denture, a bridge or an implant. </li>
            </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"><h5>After the completion of the root canal procedure, you will be referred back to your restorative dentist for the permanent restoration (filling, crown, and cap). Failure to have the tooth properly restored in a timely manner (generally within 30 days) significantly increases the possibility of failure of the root canal procedure or tooth fracture</h5></div>
            </div>
            <br/>
            <div className="row">
                <div className="col"> <h3>CONSEQUENCES IF NO TREATMENT ADMINISTEED (Not limited to the following)
</h3></div>
            </div>
         

            <div className="row">
                <div className="col">
                    <ol>
                        <li>I understand that if no treatment is performed, I may continue to experience symptoms, which could include pain and/or infection, deterioration of the bone surrounding my teeth, changes to my bite, discomfort in my jaw joint, and possibly the premature loss of other teeth.
 </li>
                        <li> No guarantee or assurance has been given to me by anyone that the prosed treatment or surgery will cure or improve the condition(s) listed above.
</li>
                        <li>By signing this document, I consent to the root canal preparation and placement as described above by the doctor, Cesar E. Zamora Perez D.D.S. I attest that I have discussed the risk, benefits, consequences, and alternatives to root canal treatment with the doctor. I had the opportunity to ask questions, and I understand what has been explained.
 </li>
            </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col">
                    <Proceets />

                </div>
            </div>







        </div>

    )
}

export default RootCanal;