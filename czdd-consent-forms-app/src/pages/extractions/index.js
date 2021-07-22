import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import Proceets from "../../components/proceets";

function Extractions() {

    return (

        <div className="container">

            <div className="row">
                <div className="col"> <Navbar /></div>
            </div>
            <br/>
            <div className="row">
                <div className="col"> <Jumbotron /></div>
            </div>

            <div className="row">
                <div className="col"> <h1>INFORMED CONSENT FOR EXTRACTION</h1></div>
            </div>
            <br />
            <div className="row">
                <div className="col"> <h3>FACTS  FOR CONSIDERATION </h3></div>
            </div>
            <div className="row">
                <div className="col">
                    <ol>
                        <li>An extraction involves removing one or more teeth. Depending on their condition, this may require sectioning the teeth or trimming the gum or bone tissue. In any unexpected difficulties occur during treatment; I may refer you to an oral surgeon, who is a specialist in dental surgery.</li>
                        <li>Once the tooth is extracted, you will have a space that you may want to fill with a fixed or removable appliance.</li>
                        <li>Replacement of missing teeth may be necessary to prevent the drifting of adjacent and/or opposing teeth to maintain function, or for cosmetic appearances. The options of a removable appliance will be explained to you.</li>
                        <li>As in all surgical procedures, extractions may no be perfectly safe. Since each person is unique and responds differently to surgery, the healing process may vary; no guarantees can be made. </li>
                    </ol>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col"> <h3>BENEFITS OF EXTRACTION (Not limited to the following)</h3></div>
            </div>
            <div className="row">
                <div className="col">
                    <ol>
                        <li>The proposed treatment should help to relieve you symptoms and may also enable you to proceed with further proposed treatment.  </li>
                    </ol>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col"> <h3>RISKS OF EXTRACTION (Not limited to the following)</h3></div>
            </div>
            <div className="row">
                <div className="col">
                    <ol>
                        <li>I understand that following treatment I may experience bleeding, pain, swelling, and discomfort for several days, which may be treated with pain medication. It is possible infection can follow extraction and must be treated with antibiotics or other procedures. I will contact the office immediately if symptoms persist or worsen.</li>
                        <li>I understand that I will receive a local anesthetic and/or other medication. In rare instances patients have a reaction to the anesthetic, which may require emergency medical attention, or find that it reduces their ability to control swallowing. This increases the chance of swallowing foreign objects during treatment. Depending on the anesthesia and medications administered, I may need a designated driver to take me home. Rarely, temporary or permanent nerve injury can result from an injection. </li>
                        <li>I understand that all medications have the potential for accompanying risk, side effects, and drug interactions. Therefore, it is critical that I tell my dentist of all medications I am currently taking. </li>
                        <li>I understand that holding my mouth open during treatment may temporarily leave my jaw feeling stiff and sore and may make it difficult for me to open wide for several days. However, this can occasionally be an indication of further problem. I must notify your office if this or other concerns arise. </li>
                        <li>I understand that the necessary blood clot that forms in the socket may disintegrate or dislodge. This painful condition called dry socket lasts a week or more and is treated by placing a medicated dressing in the tooth socket to aid healing. To protect against developing dry socket I must not smoke, drink through a straw, rinse with a water or mouthwash, chew food in the area, or disturb the socket in any way for 24 to 48 hours</li>
                        <li>I understand that the instruments used in extracting a tooth may unavoidably chip or damage adjacent teeth, which could require further treatment to restore their appearance or function.</li>
                        <li>I understand that upper teeth have roots that may extend close to the sinuses. Removing these teeth may temporarily leave a small opening into the sinuses. Antibiotics and additional treatment may be needed to prevent a sinus infection and help this opening to close.</li>
                        <li>I understand that an extraction may cause a fracture in the surrounding bone. Occasionally, the tooth to be extracted may be fused to the surrounding bone. In both situations, additional treatment is necessary. Bone fragment called “spicules” may arise at the site following extraction and are generally easily remove.</li>
                        <li> I understand that some tooth fragments might be left behind at the extraction sites depending on the condition and position of the tooth/teeth. In general, this causes no problems, but in rare occasions, the fragment(s) might cause infections and need to be removed.</li>
                        <li>I understand that the nerves that control sensations in my teeth, gums, tongue, lips and chin run through my jaw. Depending on the tooth to be extracted (particularly lower teeth or third molars), occasionally it may be impossible to avoid touching, moving, stretching, brushing, cutting or severing a nerve. This could change the normal sensations in any of these areas, causing itching, tingling or burning, or the loss of all sensation. These changes could last from several weeks to several months or in some cases, indefinitely.</li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3>CONSEQUENCES IF NO TREATMENT ADMINISTERED (Not limited to the following)</h3>
                    <ol>
                        <li>
                            I understand that if no treatment is performed, I may continue to experience symptoms, which could include pain and/or infection, deterioration of the bone surrounding my teeth, changes to my bite, discomfort in my jaw joint, and possibly the premature loss of other teeth.
                        </li>
                    </ol>

                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h3>ALTERNATIVE TREATMENTS IF EXTRACTION NOT THE ONLY SOLUTION  (Not limited to the following)</h3>
                    <ol>
                        <li>I understand that depending on my diagnosis, alternatives to extraction may exist which involves other disciplines in dentistry. I asked my dentist about them and their respective costs. My questions have been answered to my satisfaction regarding the procedures, their risks, benefits and cost.</li>
                        <li>No guarantee or assurance has been given to me by anyone that the prosed treatment or surgery will cure or improve the condition(s) listed above.</li>
                        <li>By signing this document, I consent to the crown preparation and placement as described above by the doctor, Cesar E. Zamora Perez D.D.S. I attest that I have discussed the risk, benefits, consequences, and alternatives to Crowns treatment with the doctor. I had the opportunity to ask questions, and I understand what has been explained.
                        </li>
                    </ol>

                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Proceets/>

                </div>
            </div>



        </div>
    )
}

export default Extractions;