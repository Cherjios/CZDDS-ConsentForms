import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Content from "../../components/ConsentFormsList";
import "./styles.css"


function Home (){
    return(
        <div className="container  bg-light text-dark">
          <div className="row">
            <div className="col"> <Jumbotron /></div>
          </div>
          <Content />
          <br/>
        </div>
       
    );

   
}
export default Home;