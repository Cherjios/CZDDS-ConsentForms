import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Wrapper from "./components/Wrapper"
import Home from "./pages/home"
import Extractions from "./pages/extractions";
import ExtractionsSp from "./pages/extractionsSp";
import Deepcleaning from "./pages/deep-cleaning";
import Deepcleaningsp from "./pages/deep-cleaningSp";
import logo from './logo.svg';
import './App.css';
import RootCanal from "./pages/root-canal";
import RootCanalSp from "./pages/root-canalSp";
import Crowns from "./pages/crowns";
import CrownsSp from "./pages/crowns-sp";
import Bridge from "./pages/bridge";
import BridgeSp from "./pages/bridge-sp";
import Dentures from "./pages/dentures";
import DenturesSp from "./pages/dentures-sp";



function App() {
  return (
    <Router>
      <Wrapper>
        <Route exact path="/CZDDS-ConsentForms/" component={Home} />
        <Route exact path="/CZDDS-ConsentForms/extractions" component={Extractions} />
        <Route exact path="/CZDDS-ConsentForms/extractions-sp" component={ExtractionsSp} />
        <Route exact path="/CZDDS-ConsentForms/deep-cleaning" component={Deepcleaning}/>
        <Route exact path="/CZDDS-ConsentForms/deep-cleaning-sp" component={Deepcleaningsp}/>
        <Route exact path="/CZDDS-ConsentForms/root-canal" component={RootCanal}/>
        <Route exact path="/CZDDS-ConsentForms/root-canal-sp" component={RootCanalSp}/>
        <Route exact path="/CZDDS-ConsentForms/crowns" component={Crowns}/>
        <Route exact path="/CZDDS-ConsentForms/crownsSp" component={CrownsSp}/>
        <Route exact path="/CZDDS-ConsentForms/bridge" component={Bridge}/>
        <Route exact path="/CZDDS-ConsentForms/bridgeSp" component={BridgeSp}/>
        <Route exact path="/CZDDS-ConsentForms/dentures" component={Dentures}/>
        <Route exact path="/CZDDS-ConsentForms/denturesSp" component={DenturesSp}/>

        

        
      </Wrapper>
    </Router>

  );
}

export default App;
