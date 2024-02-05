import React from "react";
import { Link } from "react-router-dom";


function Navbar() {

    return (

        <div>
            {/* As a heading  */}
            <nav classname="navbar navbar-light bg-light">
                <div classname="container-fluid">
                    <span classname="navbar-brand mb-0 h1 border border-danger-subtle"><Link to ="/CZDDS-ConsentForms/">Home </Link></span>
                </div>
            </nav>
           

        </div>


    );
}

export default Navbar;