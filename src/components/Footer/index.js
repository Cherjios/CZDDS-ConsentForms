import React from "react";
import { Link } from "react-router-dom";


function Footer() {

    return (

        <div>
            {/* As a Footer  */}
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                <button type="button" className="btn btn-outline-primary" fdprocessedid="t7kb4"><Link to ="/" className="alink">Home </Link></button>
                </div>
            </nav>
           

        </div>


    );
}

export default Footer;