import React from "react";
import {Link} from "react-router-dom"
import "./style.css"

function Proceets (){

    return(
        <div>
            <h2>NOW PROCEED TO THE FRONT DESK TO SIGN THE CONSENT FORM</h2>
            <br/>
            <h4> Thanks!</h4>
            <br/>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1"><Link to ="/CZDDS-ConsentForms/">Home </Link></span>
                </div>
            </nav>
        </div>
    );
}

export default Proceets;