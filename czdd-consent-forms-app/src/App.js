import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Wrapper from "./components/Wrapper"
import Home from "./pages/home"
import Extractions from "./pages/extractions";
import ExtractionsSp from "./pages/extractionsSp";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Wrapper>
        <Route exact path="/CZDDS-ConsentForms/" component={Home} />
        <Route exact path="/CZDDS-ConsentForms/extractions" component={Extractions} />
        <Route exact path="/CZDDS-ConsentForms/extractions-sp" component={ExtractionsSp} />
        

        
      </Wrapper>
    </Router>

  );
}

export default App;
