import React from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import SPproceets from "../../components/SPproceets";


function WhiteningSp (){
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
            <Link to="/CZDSS-ConsentForms/whitening" className="textlink2">English </Link>
        </div>


        <div className="row">
            <div className="col"> <h1 className="title">CONSENTIMIENTO INFORMATIVO PARA BLANQUEAMIENTO</h1></div>
        </div>
        <br />

        <div className="row">
            <div className="col"> <h3>CONOCIMIENTO DEL PACIENTE </h3></div>
        </div>

        <div className="row">
            <div className="col">
                <ol>
                    <li>El blanqueamiento dental está diseñado para aclarar el color de sus dientes. Se puede lograr un aclaramiento significativo en la gran mayoría de los casos, pero los resultados no se pueden garantizar. Cuando se realiza correctamente, el blanqueamiento no dañará sus dientes o encías. Sin embargo, como cualquier otro tratamiento, tiene algunos riesgos y limitaciones inherentes. Estos rara vez son lo suficientemente graves como para disuadirlo de que le blanqueen los dientes, pero deben tenerse en cuenta al decidir someterse al tratamiento.</li>
                    
                     <li>Casi todo el mundo es candidato para el blanqueamiento dental. Sin embargo, las personas con dientes de color amarillo oscuro o marrón amarillento tienden a blanquearse mejor que las personas con dientes grises o gris ruborizado. Los dientes multicolores, especialmente si están manchados debido a la tetraciclina, no blanquean muy bien. Los dientes con muchos empastes, caries, astillas, etc., generalmente se tratan mejor con adhesivos, carillas de porcelana o coronas de porcelana.</li>
                  
                    <li>El blanqueamiento para llevar a casa se puede realizar en cualquier lugar y en cualquier momento, implica el uso de una bandeja blanqueadora hecha a medida (parece un protector de noche transparente y delgado) llena de un agente blanqueador suave. Debe usar la bandeja llena de gel durante ½ a 2 horas por día durante aproximadamente dos a cuatro semanas.</li>
                </ol>
            </div>
        </div>
        <br />

        <div className="row">
            <div className="col"> <h3> SU RESPONSABILIDAD</h3></div>
        </div>

        <div className="row">
            <div className="col">
                <ol>
                    <li>El blanqueamiento para llevar a casa solo será efectivo si usa la bandeja a conciencia durante la cantidad prescrita de horas por día.</li>
                    <li>Si experimenta alguna incomodidad u otros problema, deje de blanquear inmediatamente y contáctenos.</li>
                </ol>
            </div>
        </div>
        <br />

        <div className="row">
            <div className="col"> <h3>RIESGOS DE BLANQUEAMIENTO DE LOS DIENTES (No limitado a lo siguiente)</h3></div>
        </div>

        <div className="row">
            <div className="col">
                <ol>
                    <li>Entiendo que durante las primeras 24 horas posteriores al blanqueamiento, algunos pacientes experimentan una sensibilidad transitoria. Esta sensibilidad suele ser leve si mis dientes no son normalmente sensibles. Puede ser necesario reducir el número de horas que uso la cubeta blanqueadora o dejar de usarla por un tiempo breve para resolver la sensibilidad.</li>
                    
                    <li>However, I understand that if my teeth are normally sensitive, whitening may make my teeth more sensitive for an extended period of time. Under these circumstances, I may choose to delay the whitening process until we are able to complete desensitization procedures.</li>
                    
                    <li>I understand that if my teeth are sensitive after whitening, a mild analgesic such as Tylenol or Advil will usually be effective in making me feel more comfortable until my teeth return to normal.</li>
                    
                    <li>I understand that gum irritation can result from a small amount of solution leaking under the bleaching trays. A burning sensation on my gums may also occur. This will resolve by itself in a few hours or couple of days.</li>
                    
                    <li>I understand that irritation can result from using the tray for too many hours when I first start whitening. It may be necessary to reduce the number of hours I wear the tray or stop using it for a short time to resolve these gum problems.</li>
                    
                    <li>I understand that tooth colored fillings will not white. If the filling matches my current color, bleaching will result in mismatched shades with my natural teeth and the filling may have to be replaced to match the bleached shade.</li>
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
                    <li>Following completion of whitening, pigments found in food and drinks will re-stain your teeth, commonly called “bleaching relapse”. To help prevent relapse, use daily over-the counter whitening toothpaste. You may also wish to wear your trays once every few months filled with bleaching gel.</li>
                    <li> No guarantee or assurance has been given to me by anyone that the prosed treatment or surgery will cure or improve the condition(s) listed above. </li>
                    <li> By signing this document, I consent to teeth whitening as described above by the doctor, Cesar E. Zamora Perez D.D.S. I attest that I have discussed the risk, benefits, consequences, and alternatives to teeth whitening with the doctor. I had the opportunity to ask questions, and I understand what has been explained.</li>
                </ol>
            </div>
        </div>
        <br />

        <div className="row">
            <div className="col">
                <SPproceets />

            </div>
        </div>


    </div>
    )

}


export default WhiteningSp;