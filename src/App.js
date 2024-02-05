import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom";
//import Wrapper from "./elements/Wrapper"
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
import Whitening from "./pages/whitening";
import WhiteningSp from "./pages/whiteningSp";
import Implant from "./pages/implant";
import Implantsp from "./pages/implantSp";
 

export default function App(){
return(
  <BrowserRouter>
    <Routes>
      <Route path="/CZDDS-ConsentForms/" element={<Home/>}/>
      <Route path="/CZDDS-ConsentForms/extractions" element={<Extractions/>} />
      <Route path="/CZDDS-ConsentForms/extractions-sp" element={<ExtractionsSp/>} />
      <Route path="/CZDDS-ConsentForms/deep-cleaning" element={<Deepcleaning/>} />
      <Route path="/CZDDS-ConsentForms/deep-cleaning-sp" element={<Deepcleaningsp/>} />
      <Route path="/CZDDS-ConsentForms/root-canal" element={<RootCanal/>} />
      <Route path="/CZDDS-ConsentForms/root-canal-sp" element={<RootCanalSp/>} />
      <Route path="/CZDDS-ConsentForms/crowns" element={<Crowns/>} />
      <Route path="/CZDDS-ConsentForms/crownsSp" element={<CrownsSp/>} />
      <Route path="/CZDDS-ConsentForms/bridge" element={<Bridge/>} />
      <Route path="/CZDDS-ConsentForms/bridgeSp" element={<BridgeSp/>}  />
      <Route path="/CZDDS-ConsentForms/dentures" element={<Dentures />} />
      <Route path="/CZDDS-ConsentForms/denturesSp" element={<DenturesSp />} />
      <Route path="/CZDSS-ConsentForms/whitening" element={<Whitening />} />
      <Route path="/CZDSS-ConsentForms/whiteningSp" element={<WhiteningSp />} />
      <Route path="/CZDSS-ConsentForms/implant" element={<Implant />} />
      <Route path="/CZDSS-ConsentForms/implantSp" element={<Implantsp />}/>

    </Routes>
  </BrowserRouter>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


/*

function App() {
  return (
    <Routes>
      
        <Route exact path="/CZDDS-ConsentForms/" element={Home} />
        <Route exact path="/CZDDS-ConsentForms/extractions" element={Extractions} />
        <Route exact path="/CZDDS-ConsentForms/extractions-sp" element={ExtractionsSp} />
        <Route exact path="/CZDDS-ConsentForms/deep-cleaning" element={Deepcleaning}/>
        <Route exact path="/CZDDS-ConsentForms/deep-cleaning-sp" element={Deepcleaningsp}/>
        <Route exact path="/CZDDS-ConsentForms/root-canal" element={RootCanal}/>
        <Route exact path="/CZDDS-ConsentForms/root-canal-sp" element={RootCanalSp}/>
        <Route exact path="/CZDDS-ConsentForms/crowns" element={Crowns}/>
        <Route exact path="/CZDDS-ConsentForms/crownsSp" element={CrownsSp}/>
        <Route exact path="/CZDDS-ConsentForms/bridge" element={Bridge}/>
        <Route exact path="/CZDDS-ConsentForms/bridgeSp" element={BridgeSp}/>
        <Route exact path="/CZDDS-ConsentForms/dentures" element={Dentures}/>
        <Route exact path="/CZDDS-ConsentForms/denturesSp" element={DenturesSp}/>
        <Route exact path="/CZDSS-ConsentForms/whitening" element={Whitening}/>
        <Route exact path="/CZDSS-ConsentForms/whiteningSp" element={WhiteningSp}/>
        <Route exact path="/CZDSS-ConsentForms/implant" element={Implant}/>
        <Route exact path="/CZDSS-ConsentForms/implantSp" element={Implantsp}/>
  
        
    </Routes>

  );
}

export default App;
*/
