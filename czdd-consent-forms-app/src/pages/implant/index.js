import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import {Link} from "react-router-dom"



function Implant (){
    return(
        <div className="container">

            <div className="row">
                <div className="col"><Navbar /></div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <Jumbotron /> </div>
            </div>

            <div className="textlink1">
            <Link to ="/CZDSS-ConsentForms/implantSp" className="textlink2">Spanish </Link>
            </div>
            
            <br />
            <div className="row">
                <div className="col"> <h1 className="title">INFORMED CONSENT FOR IMPLANTS</h1></div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>FACTS  FOR CONSIDERATION </h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li><b>What Are Implants?</b> Implants differ from other replacements in that they are anchored in and supported by the jawbone. While there are important differences, they function more like your natural teeth. They may be used as a single tooth replacement or for multiple tooth replacement as anchors for fixed bridges, for removable partial and full dentures. </li>
                        <li><b>The implants are placed surgically</b>. Usually under local anesthetic, the gum tissue is reflected, precise drilling of holes in the jawbone is performed to accommodate the implants (cylindrical metal posts) which are immediately placed in them. The surgical site is then closed. The second surgical procedure occurs three to eight months later. The implants are then evaluated for healing and successful integration with the bone. Some revisions may have to be made at this time. If the implant failed to integrate, it will have to be removed and alternative treatments considered, such as a change of the site or implant.</li>
                        <li><b>If the implant has successfully integrated</b>, a post is placed into the implant, extending through the gum tissue into the mouth. In the final prosthetic phase, a metal sleeve is threaded into the implant to anchor the crown, bridge or denture. The prosthetic (replacement crown, bridge or denture) fee is separate from the surgical fee.  </li>
                        <li><b>Alternatives to Implants</b> as implied above, alternatives to implant replacement may be fixed bridgework, removable partial and complete dentures. Non-replacement of missing teeth will usually cause movement of teeth, resulting in a collapsed bite, the correction of which may be difficult and costly. </li>
                        <li><b>Surgical risks include</b>, but are not limited to: post-surgical infection; bleeding; swelling; pain; facial discoloration; sinus or nasal perforation; Temporomandibular joint injuries; spasms; bone fracture; poor healing; numbness (paresthesia) of the lip, chin and tongue, which is usually temporary, but, on occasion, may be permanent. The prosthetic risks include, but are not limited to: unsuccessful integration of the implant to the bone; fracture of the implant components. If a separate surgical procedure is necessary to remove a failed implant or if a replacement is necessary due to changed prosthetic requirements, an additional fee may be charged. Unanticipated Conditions During the course of treatment, unknown oral conditions may modify or change the original treatment plan. This possibility necessitates consent for the treating doctor, in consultation with the patient, if possible, to use the best judgment in consideration of the new found conditions.</li>
                        <li><b>Summary</b> You have been provided a general overview of implants. Implants have about an 85% success rate with various factors influencing the outcome. The benefits, as well as the risks, have been discussed. The alternatives to implant replacement have also been discussed, as well as the consequence of non-replacement. No discussion or form can be all inclusive and you are encouraged to ask questions regarding any concerns or needed clarifications, to enable you to make an informed decision. Dentistry is not an exact science. Every individual is unique and guarantees of success cannot be made.</li>
                        <li><b>By signing this document</b>, I consent to implant surgery preparation and placement as described above by the doctor, Cesar E. Zamora Pérez D.D.S. I attest that I have discussed the risk, benefits, consequences, and alternatives to implants treatment with the doctor. I had the opportunity to ask questions, and I understand what has been explained.</li>
                    </ol>
                </div>
            </div>
            <br />


        </div>


    )
}

export default Implant