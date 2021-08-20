import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import SPproceets from "../../components/SPproceets";
import { Link } from "react-router-dom";
import "./style.css"

function ExtractionsSp() {

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
                <Link to="/CZDDS-ConsentForms/extractions" className="textlink2">English </Link>
            </div>

            <div className="row">
                <div className="col"> <h1 className="title">CONSENTIMIENTO INFORMATIVO PARA EXTRACCIONES</h1></div>
            </div>
            <br />
            <div className="row">
                <div className="col"> <h3>CONOCIMIENTO DEL PACIENTE </h3></div>
            </div>
            <div className="row">
                <div className="col">
                    <ol>
                        <li>Una extracción implica la sacada de uno o más dientes. Dependiendo de su condición, esto puede requerir seccionar los dientes o recortar la encía o el tejido óseo. En cualquier momento durante el tratamiento usted puedo ser referdio a un cirujano oral, que es un especialista en cirugía dental.</li>
                        <li>Una vez que se extrae el diente, tendrá un espacio que quizás desee llenar con un aparato fijo o removible.</li>
                        <li>Puede ser necesario reemplazar los dientes faltantes para evitar que los dientes adyacentes y / o opuestos se muevan para mantener la función, o por apariencia estética. Se le explicarán las opciones de un removible, puente o implante.</li>
                        <li>Como en todos los procedimientos quirúrgicos, es posible que las extracciones no sean del todo seguras. Dado que cada persona es única y responde de manera diferente a la cirugía, el proceso de curación puede variar; no se pueden ofrecer garantías. </li>
                    </ol>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col"> <h3>BENEFICIOS DE LA EXTRACCIÓN (No limitado a lo siguiente)</h3></div>
            </div>
            <div className="row">
                <div className="col">
                    <ol>
                        <li>El tratamiento propuesto debería ayudar a aliviar sus síntomas (dolor) y también puede permitirle continuar con el tratamiento  adicional propuesto. </li>
                    </ol>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col"> <h3>RIESGOS DE EXTRACCIÓN (No limitado a lo siguiente)</h3></div>
            </div>
            <div className="row">
                <div className="col">
                    <ol>
                        <li>Entiendo que después del tratamiento puedo experimentar sangrado, dolor, hinchazón y malestar durante varios días, que pueden tratarse con analgésicos. Se puede generar una posible infeccion después de la extracción y debe tratarse con antibióticos u otros procedimientos. Me comunicaré con la oficina de inmediato si los síntomas persisten o empeoran.</li>
                        <li>Entiendo que recibiré un anestésico local y/u otro medicamento. En algunas ocasiones, los pacientes tienen una reacción al anestésico, que puede requerir atención médica de emergencia, o reducir la capacidad de tragar. Esto aumenta la posibilidad de tragar objetos extraños durante el tratamiento. Dependiendo de la anestesia y los medicamentos administrados, es posible que necesite un conductor designado para que me lleve a casa. En raras ocasiones, una inyección puede provocar una lesión nerviosa temporal o permanente. </li>
                        <li>Entiendo que todos los medicamentos tienen riesgos, efectos secundarios e interacciones (medicamentos que no se pueden mezclar). Por lo tanto, es fundamental que le informe a mi dentista de todos los medicamentos que estoy tomando actualmente.</li>
                        <li>Entiendo que mantener la boca abierta durante el tratamiento puede hacer que mi mandíbula se sienta rígida y adolorida temporalmente y puede ser doloroso el abrir la boca por algunos dias. Sin embargo, debo notificar a su oficina si surge esta u otras inquietudes.</li>
                        <li>Entiendo que el coágulo de sangre necesario que se forma en el alvéolo se puede desintegrar o desprenderse. Esta dolorosa condición llamada alveolitis seca dura una semana o más y se trata colocando un apósito medicinal en la cavidad del diente para ayudar a la curación. Para protegerme contra el desarrollo de una alveolitis seca, no debo fumar, beber con una pajita, enjuagar con agua o enjuague bucal, masticar alimentos en el área o alterar la alveolitis de ninguna manera durante 24 a 48 horas</li>
                        <li>Entiendo que los instrumentos utilizados para extraer un diente pueden inevitablemente astillar o dañar los dientes adyacentes, lo que podría requerir un tratamiento adicional para restaurar su apariencia o función.</li>
                        <li>Entiendo que los dientes superiores tienen raíces que pueden extenderse cerca de los senos nasales. La extracción de estos dientes puede dejar temporalmente una pequeña abertura en los senos nasales. Es posible que se necesiten antibióticos y tratamiento adicional para prevenir la infección de los senos nasales y ayudar a que esta abertura se cierre.</li>
                        <li>Entiendo que la extracción puede causar una fractura en el hueso circundante. Ocasionalmente, el diente que se va a extraer puede fusionarse con el hueso circundante. En ambas situaciones, es necesario un tratamiento adicional. Los fragmentos de hueso llamados "espículas" pueden surgir en el sitio después de la extracción y generalmente se eliminan fácilmente.</li>
                        <li>Entiendo que algunos fragmentos de dientes pueden quedar en los sitios de extracción dependiendo de la condición y posición del diente(s). En general, esto no causa problemas, pero en raras ocasiones, los fragmentos pueden causar infecciones y deben eliminarse.</li>
                        <li>Entiendo que los nervios que controlan las sensaciones en mis dientes, encías, lengua, labios y barbilla atraviesan mi mandíbula. Dependiendo del diente que se va a extraer (particularmente los dientes inferiores o los terceros molares), en ocasiones puede ser imposible evitar tocar, mover, estirar, cepillar, cortar o cortar un nervio. Esto podría cambiar las sensaciones normales en cualquiera de estas áreas, causando picazón, hormigueo o ardor, o la pérdida de toda sensación. Estos cambios pueden durar desde varias semanas hasta varios meses o, en algunos casos, indefinidamente.</li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3>
                        CONSECUENCIAS SI NO SE ADMINISTRA EL TRATAMIENTO (No limitado a lo siguiente)
                    </h3>
                    <ol>
                        <li>
                            Entiendo que si no se realiza un tratamiento, podría continuar experimentando síntomas que pueden aumentar en gravedad, y la apariencia cosmética de mi diente puede seguir deteriorándose de tal grado que ya no pueda restaurarse y se requiera extracción.
                        </li>
                    </ol>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col">
                    <h3>TRATAMIENTOS ALTERNATIVOS SI LA EXTRACCIÓN NO ES LA ÚNICA SOLUCIÓN (No se limita a lo siguiente)</h3>
                    <ol>
                        <li>Entiendo que dependiendo de mi diagnóstico, pueden existir alternativas a la extracción que involucra otras disciplinas de la odontología. Le pregunté a mi dentista sobre ellos y sus respectivos costos. Mis preguntas han sido respondidas a mi satisfacción sobre los procedimientos, sus riesgos, beneficios y costos.</li>
                        <li>Nadie me ha dado ninguna garantía o seguridad de que el tratamiento o la cirugía propuesta curará o mejorarán las condiciones mencionadas anteriormente.</li>
                        <li>Al firmar este documento, doy mi consentimiento para la extracción descrita por el Dr. Cesar E. Zamora Perez. Doy fe de que he hablado con el médico sobre los riesgos, los beneficios, las consecuencias y las alternativas al tratamiento de extracción. Tuve la oportunidad de hacer preguntas y comprendo lo que se ha explicado.</li>
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

export default ExtractionsSp;