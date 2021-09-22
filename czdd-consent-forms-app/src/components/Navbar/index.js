import React from "react";
import { Link } from "react-router-dom";


function Navbar() {

    return (

        <div>
            {/* As a heading  */}
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1"><Link to ="/CZDDS-ConsentForms/">Home </Link></span>
                </div>
            </nav>
           

        </div>


    );
}

export default Navbar;