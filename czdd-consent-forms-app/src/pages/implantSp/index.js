import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import SPproceets from "../../components/SPproceets";
import {Link}   from "react-router-dom";
import Footer from "../../components/Footer";


function Implantsp (){
    return(
        <div className="container">
            <div className="row">
                <div className="col"><Navbar /></div>
            </div>
            <br/>

            <div className="row">
                <div className="col"> <Jumbotron /></div>
            </div>

            <div className="textlink1">
                <Link to="/CZDSS-ConsentForms/implant" className="textlink2">English </Link>
            </div>

            <div className="row">
                <div className="col"> <h1 className="title">CONSENTIMIENTO INFORMATIVO PARA IMPLANTES</h1></div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h3> CONOCIMIENTO DEL PACIENTE</h3></div>
            </div>

            <div className="row">
                <div className="col">
                    <ol>
                        <li><b>¿Qué son los implantes?</b>Los implantes se diferencian de otros tratamientos dentales  en que estos son anclados y soportados por la mandíbula. Si bien existen diferencias importantes, funcionan más como sus dientes naturales. Se pueden utilizar como reemplazo de un solo diente o para reemplazo de múltiples dientes, asi  como anclajes para puentes fijos, para dentaduras postizas parciales y completas removibles.</li>
                        <li><b>Los implantes se colocan quirúrgicamente </b>. Por lo general, bajo anestesia local, el tejido de la encía se refleja, se realizan perforaciones precisas en la mandíbula para acomodar los implantes (postes metálicos cilíndricos) que se colocan inmediatamente en ellos. Luego se cierra el sitio quirúrgico. El segundo procedimiento quirúrgico ocurre de tres a ocho meses después. A continuación, se evalúa la cicatrización y la integración satisfactoria de los implantes con el hueso. Es posible que deban realizarse algunas revisiones en este momento. Si el implante no se pudo integrar, será necesario retirarlo y considerar tratamientos alternativos, como un cambio del sitio o del implante. </li>
                        <li><b>Si el implante se ha integrado con éxito</b>, se coloca un poste en el implante, que se extiende a través del tejido de las encías hasta la boca. En la fase protésica final, se enrosca un manguito metálico en el implante para anclar la corona, el puente o la dentadura. La tarifa de la prótesis (reemplazo de corona, puente o dentadura) es independiente de la tarifa quirúrgica.</li>
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

export default Implantsp