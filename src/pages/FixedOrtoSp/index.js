import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import Proceets from "../../components/proceets";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";


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
            <button type="button" className="btn btn-outline-danger" fdprocessedid="t7kb4"><Link to ="/fixedOrtho" className="alink">English</Link></button>
        </div>

        <br/>
        <div className="row">
            <div className="col"> 
                <h1 className="title"> CONSENTIMIENTO INFORMADO PARA TRATAMIENTO DE ORTODONCIA
                </h1>
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col"><h3> FACTORES A CONSIDERAR </h3></div>
        </div>
        <div className="row">
            <div className="col">

                <ol>
                    <li>
                    El tratamiento de ortodoncia sigue siendo un procedimiento electivo. Al igual que otros tratamientos del cuerpo, tiene algunos riesgos y limitaciones. 
                    </li>
                </ol>
                <br/>
                <h3>
                    FACTORES VISIBLES QUE PUEDEN AFECTAR EL RESULTADO DEL TRATAMIENTO DE ORTODONCIA:
                </h3>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <ol>
                    <li>
                        <b>Cooperación:</b> en la gran mayoría de los casos de ortodoncia, se puede lograr mejores resultados con la cooperación del paciente.
                    </li>
                    <li>
                        <b>Cuidado del kit de ortodoncia:</b> un cepillado deficiente aumenta el riesgo de caries cuando se usan aparatos ortopédicos. Un buen cepillado, la reducción del azúcar, la dieta selectiva y la notificación de cualquier banda suelta tan pronto como se note, ayudarán a minimizar las caries, las manchas blancas (descalcificación) y las enfermedades / problemas de las encías.
                    </li>
                    <br/>
                    <h4>
                        ¡Las visitas de rutina cada 3-6 meses a su dentista para limpieza y revisión de caries son vitales durante el tratamiento!
                    </h4>
                    <li>
                        <b>Uso de arnés y / o elásticos:</b> Son fuerzas que se ejercen sobre los dientes para que se muevan a su posición adecuada. La cantidad de tiempo usado afecta los resultados. ¡DEBE USARSE SEGÚN LAS INSTRUCCIONES! Si el arnés se desprende de los tubos o del arco de alambre mientras se aplica la fuerza elástica, puede retroceder y causar lesiones.
                    </li>
                    <li>
                        <b>Debes venir a tus citas:</b> las citas perdidas crean muchos problemas de programación y alargan el tiempo de tratamiento.
                    </li>    
                </ol>

            </div>
        </div>
        <br/>
        <div className="row">
            <div className="col">
                <h3>FACTORES IMPREDECIBLES QUE PUEDEN AFECTAR EL RESULTADO DEL TRATAMIENTO DE ORTODONCIA:</h3>
            <ol>
                <li>
                    <b>Hábitos musculares:</b> Respirar por la boca, chuparse el pulgar, los dedos o los labios, empujar la lengua (deglución anormal) y otros hábitos inusuales pueden evitar que los dientes se muevan a sus posiciones corregidas o causar una recaída después de que se quitan los frenillos.
                </li>
                <li>
                    <b>Patrones de crecimiento facial:</b> los patrones esqueléticos inusuales y el crecimiento facial insuficiente o indeseable pueden comprometer los resultados dentales, afectar un cambio facial y provocar el desplazamiento de los dientes durante la retención. Se puede recomendar asistencia quirúrgica en estas situaciones.
                </li>
                <li>
                    <b>Movimiento de los dientes después del tratamiento:</b> los dientes tienden a desplazarse o asentarse después del tratamiento y también después de la retención. Algunos cambios son deseables; otros no tanto. Las rotaciones y el apiñamiento de los dientes frontales inferiores o un pequeño espacio en el sitio de extracción son ejemplos comunes.
                </li>
                <li>
                    <b>Problemas temporomandibulares (TMJ):</b> Es posible que se desarrollen problemas en la articulación de la mandíbula o en la TMJ antes, durante o después del tratamiento de ortodoncia. Las posiciones de los dientes, la mordida o los problemas preexistentes de la TMJ pueden ser un factor para este problema.
                </li>
                <li>
                    <b>Dientes impactados:</b> en un intento de mover los dientes impactados (dientes que no pueden erupcionar normalmente), especialmente caninos y terceros molares (muelas del juicio), a veces se encuentran varios problemas que pueden conducir a problemas periodontales, recaída o pérdida de dientes.
                </li>
                <li>
                    <b>Reabsorción de la raíz:</b> el acortamiento de los extremos de la raíz puede ocurrir cuando los dientes se mueven durante el tratamiento de ortodoncia. En condiciones saludables, las raíces acortadas no suelen ser un problema. Trauma, impactación, trastornos endocrinos o idiopáticos, (desconocidos), también causan este problema. La reabsorción severa puede aumentar la posibilidad de pérdida prematura de dientes.
                </li>
                <li>
                    <b>Diente no vital o muerto:</b> Un diente traumatizado o por otras causas puede morir durante un largo período de tiempo o sin tratamiento de ortodoncia. Este diente puede decolorarse o inflamarse durante el tratamiento de ortodoncia. Podría deteriorarse durante el tratamiento provocando la pérdida de hueso alrededor de los dientes. Una excelente higiene bucal y limpiezas frecuentes por parte de su dentista pueden ayudar a controlar esta situación.
                </li>
                <li>
                    <b>Incidencias inusuales:</b> Aparatos de ingestión, dientes astillados, desprendimiento de restauraciones.
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
                By signing this document, I consent to the orthodontic treatment described by doctor, Cesar E. Zamora Perez D.D.S. I attest that I have discussed the risk, benefits, consequences, and alternatives to orthodontic treatment with the doctor. I had the opportunity to ask questions, and I understood what has been explained.
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