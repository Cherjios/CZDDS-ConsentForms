import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Content from "../../components/ConsentFormsList";


function Home (){
    return(
        <div className="container">
          <div className="row">
            <div className="col"> <Jumbotron /></div>
          </div>
          <Content />
        </div>
       
    );

   
}
export default Home;