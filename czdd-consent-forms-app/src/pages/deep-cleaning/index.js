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
                <div className="col">
                    <Proceets />
                </div>


            </div>
        </div>
    )
}
export default Deepcleaning;