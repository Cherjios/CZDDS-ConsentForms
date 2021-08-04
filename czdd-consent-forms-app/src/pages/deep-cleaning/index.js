import React from "react";
import "./style.css"
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import Proceets from "../../components/proceets";



function Deepcleaning() {

    return (
        <div className="container">

            <div className="row">
                <div className="col"> <Navbar /> </div>
            </div>
            <br />

            <div className="row">
                <div className="col"><Jumbotron /></div>
            </div>

            <div className="textlink1">
                <Link to="/CZDDS-ConsentForms/deep-cleaning-sp" className="textlink2">Español</Link>
            </div>

            <div className="row">
                <div className="col"> <h1 className="title">INFORMED CONSENT FOR DEEP CLEANING</h1></div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h2 className="title">PATIENT KNOWLEDGE</h2></div>
                <ol>
                    <li>I understand that I have periodontal (gum and bone) disease. This disease process has been explained to me and I understand it is caused by bacterial toxins cause. I realize that this disease may be painless and asymptomatic, but that usually symptoms such as bleeding, swelling or recession of gum tissue, loosened teeth, elongated teeth, bad breath, sensitivity and soreness may be noticed.</li>
                    <li>I understand that treatment of periodontal disease may include periodontal scaling and root planning, either as a therapeutic procedure or preliminary to more extensive treatment. Periodontal scaling and root planning is the removal calculus, bacterial plaque, bacterial toxins, diseased cementum, and diseased tissue from the inner lining crevice surrounding the teeth.</li>
                    <li>I understand that my own efforts with home care are just as important as my professional treatment.</li>
                    <li>I understand that some of the conditions caused by periodontal disease are irreversible.</li>
                    <li>I understand that maintaining regular periodontal cleanings is essential.</li>
                    <li>I understand that future re-treatment of scaling and root planning may be necessary</li>
                </ol>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h2 className="title">BENEFITS OF PERIODONTAL TREATMENT (Not limited to the following)</h2></div>
                <ol>
                    <li>The purpose and benefit of this procedure is to reduce some of the causes of periodontal disease to a level more manageable by my own individual immune system.</li>
                </ol>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h2 className="title">RISKS OF PERIODONTAL TREATMENT (Not limited to the following)</h2></div>
                <ol>
                    <li>Increased recession of the gum tissue and exposure of root surfaces as the tissue heals, and swelling decreases.</li>
                    <li>Some pain, swelling or bruising may be experienced after treatment.</li>
                    <li>Increased sensitivity during future cleanings as well as to hot, cold or sweets</li>
                    <ol type="a">
                        <li>This may require further treatment, may fade with time or may persist no matter what is done</li>
                    </ol>
                </ol>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h2 className="title">CONSEQUENCES IF NO TREATMENT ADMINISTERED (Not limited to the following)</h2></div>
                <ol>
                    <li>Worsen of the disease causing increased bone loss, which may lead to the need for teeth to be extracted in the future.</li>
                    <li> Increased infection, bleeding, pain and soreness.</li>
                    <li>Possible systemic problems: Heart Disease, Stroke, Diabetes, Respiratory Disease, etc.</li>
                </ol>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h2 className="title">ALTERNATIVES TO PERIODONTAL TREATMENT (Not limited to the following)</h2></div>
                <ol>
                    <li> I understand that depending on my diagnosis, alternatives to Periodontal disease may exist which involves other disciplines in dentistry. I asked my dentist about them and their respective costs. My questions have been answered to my satisfaction regarding the procedures, their risks, benefits and cost.</li>
                    <li> No guarantee or assurance has been given to me by anyone that the prosed treatment or surgery will cure or improve the condition(s) listed above. </li>
                    <li>
                        By signing this document, I consent to the periodontal treatment described above by the doctor, Cesar E. Zamora Perez D.D.S. I attest that I have discussed the risk, benefits, consequences, and alternatives to periodontal treatment with the doctor. I had the opportunity to ask questions, and I understand what has been explained.
                    </li>
                </ol>

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
export default Deepcleaning;