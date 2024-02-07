import React from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import Proceets from "../../components/proceets";
import Footer from "../../components/Footer";

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
                <button type="button" className="btn btn-outline-danger" fdprocessedid="t7kb4"><Link to ="/whiteningSp" className="alink">Español</Link></button>
            </div>
            <br />

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
                        <li>Teeth whitening is designed to lighten the color of your teeth. Significant lightening can be achieved in the vast majority of cases, but the results cannot be guaranteed. When done properly the whitening will not harm your teeth or gums. However, like any other treatment, it has some inherent risks and limitations. These are seldom serious enough to discourage you from having your teeth bleached, but should be considered when deciding to have the treatment.</li>
                        <li>Just about anyone is a candidate for teeth whitening. However, people with dark yellow or yellow-brown teeth tend to white better than people with gray or blush-gray teeth. Multi-colored teeth, especially if stained due to tetracycline, do not whiten very well. Teeth with many fillings, cavities, chips, etc., are usually best treated by bonding, porcelain veneer or, porcelain crowns.</li>
                        <li>Take-home whitening can be done anywhere and anytime, involves wearing a custom-made bleaching tray (looks like a thin, transparent night guard) filled with a mild bleaching agent. You must wear the gel-filled tray for ½-2 hours per day for about two to four weeks.</li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>YOUR RESPONSIBILITIES </h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>Take-home whitening will only be effective if you conscientiously wear the tray for the prescribed number of hours per day.</li>
                        <li>If you experience any severe discomfort or other problems, stop bleaching immediately and contact us.</li>

                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3>RISKS OF TEETH WHITENING (Not limited to the following) </h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>I understand that during the first 24 hours following whitening, some patients experience transient sensitivity. This sensitivity is usually mild if my teeth are not normally sensitive. It may be necessary to reduce the number or hours I wear the bleaching tray or stop using it for a short time to resolve the sensitivity.</li>
                        <li>However, I understand that if my teeth are normally sensitive, whitening may make my teeth more sensitive for an extended period of time. Under these circumstances, I may choose to delay the whitening process until we are able to complete desensitization procedures.</li>
                        <li>I understand that if my teeth are sensitive after whitening, a mild analgesic such as Tylenol or Advil (Ibuprofen) will usually be effective in making me feel more comfortable until my teeth return to normal.</li>
                        <li>I understand that gum irritation can result from a small amount of solution leaking under the bleaching trays. A burning sensation on my gums may also occur. This will resolve by itself in a few hours or a couple of days.</li>
                        <li>I understand that irritation can result from using the tray for too many hours when I first start whitening. It may be necessary to reduce the number of hours I wear the tray or stop using it for a short time to resolve these gum problems.</li>
                        <li>I understand that tooth-colored fillings will not be white. If the filling matches my current color, bleaching will result in mismatched shades with my natural teeth and the filling may have to be replaced to match the bleached shade.</li>
                    </ol>
                </div>
            </div>
            <br />


            <div className="row">
                <div className="col"> <h3>COMPLETION OF TREATMENT</h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li>There is no totally reliable way to predict how light your teeth will whiten. Significant whitening may take two to four weeks or longer.</li>
                        <li>Following completion of whitening, pigments found in food and drinks will re-stain your teeth, commonly called “bleaching relapse”. To help prevent relapse, use daily over-the-counter whitening toothpaste. You may also wish to wear your trays once every few months filled with bleaching gel.</li>
                        <li>No guarantee or assurance has been given to me by anyone that the proposed treatment or surgery will cure or improve the conditions) listed above. </li>
                        <li> By signing this document, <b>I consent to teeth whitening </b> as described above by the doctor, Cesar E. Zamora Perez D.D.S. I attest that I have discussed the risk, benefits, consequences, and alternatives to teeth whitening with the doctor. I had the opportunity to ask questions, and I understand what has been explained.</li>
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

export default Whitening;