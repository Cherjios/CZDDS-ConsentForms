import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {

    return (
                  
        <div>
            <nav>
                <div className="container-fluid">
                    <br />
                <button type="button" className="btn btn-outline-danger" fdprocessedid="t7kb4"><Link to ="/" className="alink">Home </Link></button>
                 </div>
            </nav>
           
        </div>


    );
}

export default Navbar;