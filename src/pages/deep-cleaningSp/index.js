import React from "react";
import "./style.css"
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import SPproceets from "../../components/SPproceets";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";


function Deepcleaningsp() {

    return (
        <div>
            <div className="container bg-warning-subtle">

                <div className="row">
                    <div className="col"> <Navbar /> </div>
                </div>
                <br />

                <div className="row">
                    <div className="col"><Jumbotron /></div>
                </div>

                <div className="textlink1">
                <button type="button" className="btn btn-outline-danger" fdprocessedid="t7kb4"><Link to ="/deep-cleaning" className="alink">English </Link></button>
                </div>

                <div className="row">
                    <div className="col"> <h1 className="title">CONSENTIMIENTO INFORMATIVO PARA LIMPIEZA PROFUNDA</h1></div>
                </div>
                <br />

                <div className="row">
                    <div className="col"> <h2 className="title">CONOCIMIENTO DEL PACIENTE</h2></div>
                        <li> Entiendo que tengo una enfermedad periodontal (de las encías y los huesos). El desarrollo de la enfermedad me ha sido explicado y entiendo que es causada por las toxinas bacterianas. Me doy cuenta de que esta enfermedad puede ser indolora y asintomática, pero que por lo general se pueden notar síntomas como sangrado, hinchazón o recesión del tejido de las encías, dientes flojos, dientes alargados, mal aliento, sensibilidad y dolor. </li>
                        <li> Entiendo que el tratamiento de la enfermedad periodontal puede incluir raspado periodontal y alisado radicular, ya sea como un procedimiento terapéutico o preliminar a un tratamiento más extenso. El raspado periodontal y el alisado radicular son la eliminación de sarro, placa bacteriana, toxinas bacterianas, cemento enfermo y tejido enfermo del revestimiento interno que rodea los dientes. </li>
                        <li> Entiendo que mis propios esfuerzos con la atención domiciliaria son tan importantes como mi tratamiento profesional. </li>
                        <li> Entiendo que algunas de las afecciones causadas por la enfermedad periodontal son irreversibles. </li>
                        <li> Entiendo que mantener limpiezas periodontales regulares es esencial. </li>
                        <li> Entiendo que en el futuro podría ser necesario un re-tratamiento de limpieza profunda</li>
                </div>
                <br />

                <div className="row">
                    <div className="col"> <h2 className="title">BENEFICIOS DEL TRATAMIENTO PERIODONTAL (No limitado a lo siguiente)</h2></div>
                        <li>El propósito y el beneficio de este procedimiento es reducir algunas de las causas de la enfermedad periodontal a un nivel más manejable para mi propio sistema inmunológico.</li>
                </div>
                <br />

                <div className="row">
                    <div className="col"> <h2 className="title">RIESGOS DEL TRATAMIENTO PERIODONTAL (No limitado a lo siguiente)</h2></div>
                        <li>El aumento de la recesión del tejido de las encías y la exposición de las superficies de las raíces a medida que el tejido cicatriza y la hinchazón disminuye.</li>
                        <li>Es posible que experimente algo de dolor, hinchazón o hematomas después del tratamiento..</li>
                        <li>Mayor sensibilidad en las limpiezas futuras, así como al calor, el frío o lo dulce (Esto puede requerir un tratamiento adicional, puede desaparecer con el tiempo o puede persistir sin importar lo que se haga.)</li>
                </div>
                <br />

                <div className="row">
                    <div className="col"> <h2 className="title">CONSECUENCIAS SI NO SE ADMINISTRA TRATAMIENTO (No limitado a lo siguiente)</h2></div>
                        <li> Empeoramiento de la enfermedad y aumento de la pérdida de hueso de bajo de las encias, lo que puede llevar a la necesidad de extraer dientes en el futuro. </li>
                        <li> Aumento de la infección, el sangrado y el dolor. </li>
                        <li> Posibles problemas sistémicos: enfermedad cardíaca, accidente cerebrovascular, diabetes, enfermedad respiratoria, etc. </li>
                </div>
                <br />

                <div className="row">
                    <div className="col"> <h2 className="title">ALTERNATIVAS AL TRATAMIENTO PERIODONTAL (No limitado a los siguientes)</h2></div>
                    <li> Entiendo que dependiendo de mi diagnóstico, pueden existir alternativas a la enfermedad periodontal que involucra otras disciplinas de la odontología. Le pregunté a mi dentista sobre ellos y sus respectivos costos. Mis preguntas han sido respondidas satisfactoriamente con respecto a los procedimientos, sus riesgos, beneficios y costos. </li>
                         <li> Nadie me ha dado ninguna garantía o seguridad de que el tratamiento o la cirugía prosperados curarán o mejorarán las afecciones enumeradas anteriormente. </li>
                         <li> Al firmar este documento, <b>doy mi consentimiento para el tratamiento periodontal</b> descrito anteriormente por el médico Cesar E. Zamora Perez D.D.S. Doy fe de que he hablado con el médico sobre los riesgos, los beneficios, las consecuencias y las alternativas al tratamiento periodontal. Tuve la oportunidad de hacer preguntas y comprendo lo que se ha explicado. </li>

                </div>
                <br />
                <div className="row">
                <div className="col">
                    <SPproceets />
                    <Footer />
                </div>
            </div>


            </div>
        </div>


    )
}

export default Deepcleaningsp;