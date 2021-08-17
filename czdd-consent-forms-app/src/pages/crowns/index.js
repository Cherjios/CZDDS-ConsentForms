import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import Proceets from "../../components/proceets";
import { Link } from "react-router-dom";


function Crowns() {
    return (

        <div className="container">
            <div className="row">
                <div className="col"> <Navbar /></div>
            </div>
            <br />

            <div classNam="row">
                <div className="col"> <Jumbotron /></div>
            </div>

            <div className="textlink1">
                <Link to="/CZDDS-ConsentForms/crownsSp" className="textlink2">Spanish </Link>
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

            <div className="row">
                <div className="col"> <h3>BENEFITS OF CROWNS (Not limited to the following)</h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>A crown is typically used to strengthen a tooth damaged by decay, fracture, or previous restorations. It can also serve to protect a tooth that has had a root canal treatment or improve the way your other teeth fit together.  </li>
                        <li>Crown will be used for the purpose of improving the appearance of damaged, discolored, misshapen, misaligned, or poorly spaced teeth.</li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>RISKS OF CROWNS (Not limited to the following)</h3></div>
            </div>
            <div className="row">
                <div className="col">
                    <ol>
                        <li>I understand that preparing a damaged tooth may further irritate the nerve tissue (called the pulp) in the center of the tooth, leaving my tooth feeling sensitive to heat, cold or pressure. Such sensitive teeth may require additional treatment including endodontic or root canal treatment. </li>
                        <li>I understand that holding my mouth open during treatment may temporarily leave my jaw feeling stiff and sore and may make it difficult for me to open wide for several days. This can occasionally be an indication of a further problem. I must notify your office if this or other concerns arise. </li>
                        <li> I understand that a crown may alter the way my teeth fit together and make my jaw joint feel sore. This may require adjusting my bite by altering the biting surface of the crown or adjacent teeth. </li>
                        <li> I understand that the edge of a crown is usually near the gum line, which is an area prone to gum irritation, infection or decay. Proper brushing and flossing at home, a healthy diet, and regular professional cleaning are some preventative measures essential to helping control these problems. </li>
                        <li> I understand that I may receive a local anesthetic and/or other medication. In rare instances patient may have a reaction to the anesthetic, which could require emergency medical attention, or find that it reduces their ability to control swallowing. This increases the normal chance of swallowing foreign objects during treatment. Rarely, temporary or permanent nerve injury can result from an injection. </li>
                        <li> I understand that all medications have the potential for accompanying risk, side effects, and drug interactions. Therefore, it is critical that I tell my dentist of all medications I am currently taking. </li>
                    </ol>
                </div>
            </div>


        </div>
    )
}

export default Crowns;