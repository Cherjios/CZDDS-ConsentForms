import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import SPproceets from "../../components/SPproceets";
import {Link}   from "react-router-dom";
import Footer from "../../components/Footer";


function Implantsp (){
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
            <button type="button" className="btn btn-outline-danger" fdprocessedid="t7kb4"><Link to ="/implant" className="alink">English </Link></button>
            </div>
            <br/>

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
                        <li><b>Alternativas a los implantes</b> como se indicó anteriormente, las alternativas al reemplazo de implantes pueden ser puentes fijos, dentaduras postizas parciales y completas removibles. La falta de reemplazo de los dientes faltantes generalmente causará el movimiento de los dientes, lo que resultará en una mordida colapsada, cuya corrección puede ser difícil y costosa. </li>
                        <li><b>Los riesgos quirúrgicos </b> incluyen, entre otros: infección posquirúrgica; sangrado; hinchazón; dolor; decoloración facial; perforación de los senos nasales; Lesiones de la articulación temporomandibular; espasmos fractura de hueso; mala curación; entumecimiento (parestesia) del labio, el mentón y la lengua, que generalmente es temporal, pero, en ocasiones, puede ser permanente. Los riesgos protésicos incluyen, pero no se limitan a: integración fallida del implante al hueso; fractura de los componentes del implante. Si es necesario un procedimiento quirúrgico por separado para extraer un implante fallido o si es necesario un reemplazo debido a cambios en los requisitos protésicos, se puede cobrar una tarifa adicional. Condiciones imprevistas Durante el curso del tratamiento, las condiciones orales desconocidas pueden modificar o cambiar el plan de tratamiento original. Esta posibilidad requiere el consentimiento del médico tratante, en consulta con el paciente, si es posible, para usar el mejor juicio en consideración de las condiciones recién descubiertas.</li>
                        <li><b>Resumen:</b> Se le ha proporcionado una descripción general de los implantes. Los implantes tienen una tasa de éxito de alrededor del 85% con varios factores que influyen en el resultado. Se han discutido tanto los beneficios como los riesgos. También se han discutido las alternativas al reemplazo de implantes, así como las consecuencias de la falta de reemplazo. Ninguna discusión o formulario puede ser exhaustivo y se le anima a hacer preguntas sobre cualquier inquietud o aclaración necesaria para que pueda tomar una decisión informada. La odontología no es una ciencia exacta. Cada individuo es único y no se pueden ofrecer garantías de éxito.</li>
                        <li><b>Al firmar este documento, doy mi consentimiento</b> para la preparación y colocación de la cirugía de implantes según lo descrito anteriormente por el médico, Cesar E. Zamora Pérez D.D.S. Doy fe de que he hablado con el médico sobre los riesgos, los beneficios, las consecuencias y las alternativas al tratamiento con implantes. Tuve la oportunidad de hacer preguntas y comprendo lo que se ha explicado.</li>
                    </ol>
                </div>
            </div>
            <br />


        </div>
    )
}

export default Implantsp