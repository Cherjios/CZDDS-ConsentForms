import React from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import Proceets from "../../components/proceets";
import Footer from "../../components/Footer";

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
                        <ol>
                            <li>Preparation of the tooth, an impression to send to the lab, and construction and temporary cementation of a temporary Bridge: and later,</li>
                            <li>Removal of the temporary Bridge, adjustment and cementation of the completed Bridge when esthetics and function have been verified. </li>
                        </ol>
                        <li>Once a Temporary Bridge has been placed, it is essential to return to have the new Bridge placed as soon as it is ready because the temporary Bridge is not intended to function as well as the permanent Bridge. Failing to replace the temporary Bridge with a completed one could lead to decay, gym disease, infections, problems with your bite, and even loss of the tooth.</li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>BENEFITS OF BRIDGES (Not limited to the following)</h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>
                            Dental bridges literally bridge the gap created by one or more missing teeth.</li>
                        <li>A Bridge is typically used to strengthen a tooth damaged by decay, fracture or previous restorations. It can also serve to protect a tooth that has had a rood canal treatment or improve the way your other teeth fit together.</li>
                        <li>Bridges will be used for the purpose of improving the appearance of damaged, discolored, misshapen, and misaligned or poorly spaced teeth.</li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>RISKS OF BRIDGES (Not limited to the following)</h3></div>
            </div>
            <div className="row">
                <div className="col">
                    <ol>
                        <li> I understand that preparing a damaged tooth may further irritate the nerve tissue (called the pulp) in the center of the tooth, leaving my tooth feeling sensitive to heat, cold or pressure. Such sensitive teeth may require additional treatment including endodontic or root canal treatment.</li>
                        <li> I understand that holding my mouth open during treatment may temporarily leave my jaw feeling stiff and sore and may make it difficult for me to open wide for several days. This can occasionally be an indication of a further problem. I must notify your office if this or other concerns arise.</li>
                        <li> I understand that Bridge may alter the way my teeth fit together and make my jaw joint feel sore. This may require adjusting my bite by altering the biting surface of the Bridge or adjacent teeth.</li>
                        <li> I understand that the edge of a Bridge is usually near the gum line, which is an area prone to gum irritation, infection or decay. Proper brushing and flossing at home, a healthy diet, and regular professional cleanings are some preventative measures essential to helping control these problems.</li>
                        <li> I understand that I may receive a local anesthetic and/or other medication. In rare instances patients may have a reaction to the anesthetic, which could require emergency medical attention, or find that it reduces their ability to control swallowing. This increases the normal chance of swallowing foreign objects during treatment. Rarely, temporary or permanent nerve injury can result from an injection.</li>
                        <li> I understand that all medications have the potential for accompanying risks, side effects, and drug interactions. Therefore, it is critical that I tell my dentist of all medications I am currently taking</li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col">
                    <h3>CONSEQUENCES IF NO BRIDGE IS ADMINISTERED (Not limited to the following)</h3>
                    <ol>
                        <li>I understand that if no treatment is performed, I may continue to experience symptoms, which may increase in severity, and the cosmetic appearance of my teeth may continue to deteriorate, sometimes to the extent that they are not restorable and require extraction. </li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col">
                    <h3>ALTERNATIVE TO BRIDGES  (Not limited to the following)</h3>
                    <ol>
                        <li>I understand that depending on the reason I have a Bridge placed, alternatives may exist. I have asked my dentist about them and their respective expenses. My questions have been answered to my satisfaction regarding the procedures, their risks, benefits and costs.</li>
                        <li>No guarantee or assurance has been given to me by anyone that the prosed treatment or surgery will cure or improve the condition(s) listed above.</li>
                        <li>By signing this document, I consent to the Bridge preparation and placement as described by the doctor, Cesar E. Zamora Perez D.D.S. I attest that I have discussed the risk, benefits, consequences, and alternatives to Bridges treatment with the doctor. I had the opportunity to ask questions, and I understand what has been explained.</li>
                    </ol>
                </div>
            </div>

            <br />
            <div className="row">
                <div className="col">
                    <Proceets />
                    <Footer />
                </div>
            </div>



        </div>
    )

}
export default Bridge;
