import React from "react";
import "./style.css"
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import Proceets from "../../components/proceets";

function Deepcleaningsp (){

    return(
        <div>
            <h1>Limpieza profunda</h1>

            <div className="container">

            <div className="row">
                <div className="col"> <Navbar /> </div>
            </div>
            <br />

            <div className="row">
                <div className="col"><Jumbotron /></div>
            </div>

            <div className="textlink1">
                <Link to="/CZDDS-ConsentForms/deep-cleaning" className="textlink2">English</Link>
            </div>

            <div className="row">
                <div className="col"> <h1 className="title">CONSENTIMIENTO INFORMATIVO PARA LIMPIEZA PROFUNDA</h1></div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h2 className="title">CONOCIMIENTO DEL PACIENTE</h2></div>
                <ol>
                <li> Entiendo que tengo una enfermedad periodontal (de las encías y los huesos). El desarrollo de la enfermedad me ha sido explicado y entiendo que es causada por las toxinas bacterianas. Me doy cuenta de que esta enfermedad puede ser indolora y asintomática, pero que por lo general se pueden notar síntomas como sangrado, hinchazón o recesión del tejido de las encías, dientes flojos, dientes alargados, mal aliento, sensibilidad y dolor. </li>
                    <li> Entiendo que el tratamiento de la enfermedad periodontal puede incluir raspado periodontal y alisado radicular, ya sea como un procedimiento terapéutico o preliminar a un tratamiento más extenso. El raspado periodontal y el alisado radicular son la eliminación de sarro, placa bacteriana, toxinas bacterianas, cemento enfermo y tejido enfermo del revestimiento interno que rodea los dientes. </li>
                    <li> Entiendo que mis propios esfuerzos con la atención domiciliaria son tan importantes como mi tratamiento profesional. </li>
                    <li> Entiendo que algunas de las afecciones causadas por la enfermedad periodontal son irreversibles. </li>
                    <li> Entiendo que mantener limpiezas periodontales regulares es esencial. </li>
                    <li> Entiendo que en el futuro podría ser necesario un re-tratamiento de limpieza profunda</li>
                </ol>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h2 className="title">BENEFICIOS DEL TRATAMIENTO PERIODONTAL (No limitado a lo siguiente)</h2></div>
                <ol>
                    <li>El propósito y el beneficio de este procedimiento es reducir algunas de las causas de la enfermedad periodontal a un nivel más manejable para mi propio sistema inmunológico.</li>
                </ol>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h2 className="title">RIESGOS DEL TRATAMIENTO PERIODONTAL (No limitado a lo siguiente)</h2></div>
                <ol>
                    <li>El aumento de la recesión del tejido de las encías y la exposición de las superficies de las raíces a medida que el tejido cicatriza y la hinchazón disminuye.</li>
                    <li>Es posible que experimente algo de dolor, hinchazón o hematomas después del tratamiento..</li>
                    <li>Mayor sensibilidad en las limpiezas futuras, así como al calor, el frío o lo dulce (Esto puede requerir un tratamiento adicional, puede desaparecer con el tiempo o puede persistir sin importar lo que se haga.)</li>
                </ol>
            </div>
            <br />

            <div className="row">
                <div className="col"> <h2 className="title">CONSECUENCIAS SI NO SE ADMINISTRA TRATAMIENTO (No limitado a lo siguiente)</h2></div>
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

            
        </div>
        </div>


    )
}

export default Deepcleaningsp;