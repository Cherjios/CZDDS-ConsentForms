import React from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import Proceets from "../../components/proceets";

function Whitening() {
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
                <Link to="/CZDSS-ConsentForms/whiteningSp" className="textlink2">Spanish </Link>
            </div>


            <div className="row">
                <div className="col"> <h1 className="title">INFORMED CONSENT FOR WHITENING</h1></div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>FACTS  FOR CONSIDERATION </h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>Teeth whitening is designed to lighten the color of your teeth. Significant lightening can be achieved in the vast majority of cases, but the results cannot be guaranteed. When done properly the whitening will not harm your teeth or gums. However, like any other treatment, it has some inherent risks and limitations. These are seldom serious enough to discourage you form having your teeth bleached, but should be considered when deciding to have the treatment.</li>
                        <li>Just about anyone is a candidate for teeth whitening. However, people with dark yellow or yellow-brown teeth tend to white better than people with gray or blush-gray teeth. Multi-colored teeth, especially if stained due to tetracycline, do not whiten very well. Teeth with many fillings, cavities, chips, etc., are usually best treat by bonding, porcelain veneer or porcelain crowns.</li>
                        <li>Take-home whitening can be done anywhere and anytime, involves wearing a custom-made blenching tray (looks like a thin, transparent night guard) filled with a mild bleaching agent. You must wear the gel-filled tray ½-2 hours per day for about two to four weeks.</li>
                    </ol>
                </div>
            </div>





        </div>
    )
}

export default Whitening;