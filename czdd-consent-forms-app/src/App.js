import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Wrapper from "./components/Wrapper"
import Home from "./pages/home"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Wrapper>
        <Route exact path="/CZDDS-ConsentForms/" component={Home}/>
      </Wrapper>
    </Router>

  );
}

export default App;
