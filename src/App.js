import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom";
//import Wrapper from "./elements/Wrapper"
import Home from "./pages/home"
import Extractions from "./pages/extractions";
import ExtractionsSp from "./pages/extractionsSp";
import Deepcleaning from "./pages/deep-cleaning";
import Deepcleaningsp from "./pages/deep-cleaningSp";
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
      <Route path="/" element={<Home/>}/>
      <Route path="/extractions" element={<Extractions/>} />
      <Route path="/extractions-sp" element={<ExtractionsSp/>} />
      <Route path="/deep-cleaning" element={<Deepcleaning/>} />
      <Route path="/deep-cleaning-sp" element={<Deepcleaningsp/>} />
      <Route path="/root-canal" element={<RootCanal/>} />
      <Route path="/root-canal-sp" element={<RootCanalSp/>} />
      <Route path="/crowns" element={<Crowns/>} />
      <Route path="/crownsSp" element={<CrownsSp/>} />
      <Route path="/bridge" element={<Bridge/>} />
      <Route path="/bridgeSp" element={<BridgeSp/>}  />
      <Route path="/dentures" element={<Dentures />} />
      <Route path="/denturesSp" element={<DenturesSp />} />
      <Route path="/whitening" element={<Whitening />} />
      <Route path="/whiteningSp" element={<WhiteningSp />} />
      <Route path="/implant" element={<Implant />} />
      <Route path="/implantSp" element={<Implantsp />}/>

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
      
        <Route exact path="/" element={Home} />
        <Route exact path="/extractions" element={Extractions} />
        <Route exact path="/extractions-sp" element={ExtractionsSp} />
        <Route exact path="/deep-cleaning" element={Deepcleaning}/>
        <Route exact path="/deep-cleaning-sp" element={Deepcleaningsp}/>
        <Route exact path="/root-canal" element={RootCanal}/>
        <Route exact path="/root-canal-sp" element={RootCanalSp}/>
        <Route exact path="/crowns" element={Crowns}/>
        <Route exact path="/crownsSp" element={CrownsSp}/>
        <Route exact path="/bridge" element={Bridge}/>
        <Route exact path="/bridgeSp" element={BridgeSp}/>
        <Route exact path="/dentures" element={Dentures}/>
        <Route exact path="/denturesSp" element={DenturesSp}/>
        <Route exact path="//whitening" element={Whitening}/>
        <Route exact path="//whiteningSp" element={WhiteningSp}/>
        <Route exact path="//implant" element={Implant}/>
        <Route exact path="//implantSp" element={Implantsp}/>
  
        
    </Routes>

  );
}

export default App;
*/
