import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import Proceets from "../../components/proceets";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "./style.css";

function FixedOrtho (){
    
    return(
      <div className="container bg-warning-subtle">
        <div className="row">
            <div className="col"><Navbar /></div>
        </div>
        <br/>
        <div className="row">
            <div className="col"> <Jumbotron /></div>
        </div>
        <div className="textlink1">
            <button type="button" className="btn btn-outline-danger" fdprocessedid="t7kb4"><Link to ="/fixedOrthoSp" className="alink">Español</Link></button>
        </div>

        <br/>
        <div className="row">
            <div className="col"> <h1 className="title">INFORMED CONSENT FOR FIXED ORTHO </h1></div>
        </div>
        <br />
        <div className="row">
            <div className="col"><h3> FACTS FOR CONSIDERATION </h3></div>
        </div>
        <div className="row">
            <div className="col">

                <h3>INFORMED CONSENT FOR ORTHODONTIC TREATMENT</h3>
                <ol>
                    <li>
                    Orthodontic treatment remains an elective procedure. It, like other treatments of the body, has some inherent risks and limitations. These seldom prevent treatment but should be considered in making the decision to undergo treatment. 

                    </li>
                </ol>
                <br/>
                <h3>
                    PREDICTABLE FACTORS THAT CAN AFFECT THE OUTCOME OF ORTHODONTIC TREATMENT:
                </h3>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <ol>
                    <li>
                        <b>Cooperation:</b> In most orthodontic cases, significant improvement can be achieved with the patient’s cooperation. 
                    </li>
                    <li>
                        <b>Caring for Appliances:</b> Poor brushing increases the risk of decay when wearing braces. Excellent oral hygiene Routine visits every 3-6 months to your dentist for cleaning and cavity checks are vital during treatment!!!
                        ,reduction in sugar, being selective in diet, and reporting any loose bands as soon as noticed, will help minimize decay, white spots, (decalcification), and gum disease/problems.
                    </li>
                    <br/>
                    <h4> Routine visits every 3-6 months to your dentist for cleaning and cavity checks are vital during treatment!!!</h4>
                    <li>
                        <b>Wearing Headgear and/or Elastics:</b>These are forces placed on teeth so they will move into their proper positions. The amount of time spent affects results. MUST WEAR AS INSTRUCTED! If headgear is detached from the tubes or arch wire while the elastic force is engaged, it can snap back and cause injury.
                    </li>
                    <li>
                        <b>Appointments Must be Kept:</b> Missed appointments create many scheduling problems and lengthen treatment time. 
                    </li>    
                </ol>

            </div>
        </div>
        <br/>
        <div className="row">
            <div className="col">
                <h3>UNPREDICTABLE FACTORS THAT CAN AFFECT THE OUTCOME OF ORTHODONTIC TREATMENT: </h3>
            <ol>
                <li>
                    Muscle Habits: Mouth breathing, thumb, finger, or lip sucking, tongue thrusting, (abnormal swallowing), and other unusual habits can prevent teeth from moving to their corrected positions or cause relapse after braces are removed. 
                </li>
                <li>
                Facial Growth Patterns: Unusual skeletal patterns and insufficient or undesirable facial growth can compromise the dental results, affect a facial change and cause shifting of teeth during retention. Surgical assistance may be recommended in these situations.
                </li>
                <li>
                Post Treatment Tooth Movement: Teeth tend to shift or settle after treatment as well as after retention. Some changes are desirable; others are not. Rotations and crowding of the lower front teeth or slight space in the extraction site are common examples.
                </li>
                <li>
                Temporomandibular Problems, (TMJ): Possible TMJ or jaw joint problems may develop before, during, or after orthodontic treatment. Tooth positions, bite, or pre-existing TMJ problems can be a factor in this condition. 
                </li>
                <li>
                Impacted Teeth: To attempt to move impacted teeth, (teeth unable to erupt normally), especially cuspids and third molars, (wisdom teeth), various problems are sometimes encountered which may lead to periodontal problems, relapse, or loss of teeth. 
                </li>
                <li>
                Root Resorption: Shortening of root ends can occur when teeth are moved during orthodontic treatment. Under healthy conditions the shortened roots are usually no problem. Trauma, impaction, endocrine disorders, or idiopathic, (unknown), reasons also cause this problem. Severe resorption can increase the possibility of premature tooth loss. 
                </li>
                <li>
                Non-vital or Dead Tooth: A tooth traumatized, or other causes can die over a long period of time or without orthodontic treatment. This tooth may discolor or flare up during orthodontic treatment. It could deteriorate during treatment causing loss of bone around the teeth. Excellent oral hygiene and frequent cleanings by your dentist can help control this situation. 
                </li>
                <li>
                Unusual Occurrences: Swallowing appliances, chipped teeth, dislodging restorations. 
                </li>
            </ol>
            <br/>
            <h3>
                $50.00 will be added to your account for every bracket lost or re-bonding.
            </h3>
            <br/>
            <ol>
                <li>
                I consent to the taking of photographs and x-rays before, during and after treatment and to the use of same by the doctor in scientific papers or demonstrations. I certify that I have read or had read to me the contents of this form and do realize the risks and limitations involved and do consent to orthodontic treatment. 
                </li>
                <li>
                By signing this document, <b>I consent to the orthodontic treatment described by doctor, Cesar E. Zamora Perez D.D.S. </b> I attest that I have discussed the risk, benefits, consequences, and alternatives to orthodontic treatment with the doctor. I had the opportunity to ask questions, and I understood what has been explained.
                </li>
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

export default FixedOrtho;