import React from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import SPproceets from "../../components/SPproceets";
import Footer from "../../components/Footer";


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
                    
                    <li>Sin embargo, entiendo que si mis dientes son normalmente sensibles, el blanqueamiento puede hacer que mis dientes sean más sensibles durante un período de tiempo prolongado. En estas circunstancias, puedo optar por retrasar el proceso de blanqueamiento hasta que podamos completar los procedimientos de desensibilización.</li>

                    <li>Entiendo que si mis dientes están sensibles después del blanqueamiento, un analgésico suave como Tylenol o Advil (ibuprofeno) generalmente será efectivo para hacerme sentir más cómodo hasta que mis dientes vuelvan a la normalidad.</li>
                    
                    <li>Entiendo que la irritación de las encías puede resultar de una pequeña cantidad de solución que se filtra debajo de las bandejas blanqueadoras. También puede producirse una sensación de ardor en las encías. Esto se resolverá por sí solo en unas pocas horas o un par de días.</li>
                                            
                    <li>Entiendo que irritación puede resultar después de usar la bandeja durante demasiadas horas cuando empiezo a blanquear por primera vez. Puede ser necesario reducir la cantidad de horas que uso la bandeja o dejar de usarla por un tiempo breve para resolver estos problemas de las encías.</li>
                    
                    <li>Entiendo que los rellenos del color de los dientes no serán blancos. Si el relleno coincide con mi color actual, el blanqueamiento dará como resultado tonos que no coinciden con mis dientes naturales y es posible que el relleno deba reemplazarse para que coincida con el tono blanqueado.</li>
                </ol>
            </div>
        </div>
        <br />


        <div className="row">
            <div className="col"> <h3>FINALIZACIÓN DEL TRATAMIENTO</h3></div>
        </div>

        <div className="row">
            <div className="col">
                <ol>
                    <li>No existe una forma totalmente confiable de predecir qué tan claros se blanquearán sus dientes. Un blanqueamiento significativo puede tardar de dos a cuatro semanas o más.</li>
                    <li>Una vez finalizado el blanqueamiento, los pigmentos que se encuentran en los alimentos y las bebidas volverán a teñir los dientes, lo que comúnmente se denomina "recaída del blanqueamiento". Para ayudar a prevenir la recaída, use diario una pasta de dientes blanqueadora. También es posible que desee usar sus bandejas una vez cada pocos meses llenas de gel blanqueador.</li>
                    <li>Nadie me ha dado ninguna garantía o seguridad de que el tratamiento o la cirugía propuestos curarán o mejorarán las condiciones enumeradas anteriormente. </li>
                    <li>Al firmar este documento, doy mi consentimiento para el blanqueamiento dental según lo descrito anteriormente por el médico, Cesar E. Zamora Perez D.D.S. Doy fe de que he hablado con el médico sobre los riesgos, los beneficios, las consecuencias y las alternativas al blanqueamiento dental. Tuve la oportunidad de hacer preguntas y comprendo lo que se ha explicado. </li>
                </ol>
            </div>
        </div>
        <br />

        <div className="row">
            <div className="col">
                <SPproceets />
                <Footer />

            </div>
        </div>


    </div>
    )

}


export default WhiteningSp;