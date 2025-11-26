import { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Anasayfa from './components/Anasayfa';
import SiparisFormu from './components/SiparisFormu';
import Onay from './components/Onay';


function App() {
  

  return (
   <Router>
     <Switch>
        <Route path="/" exact>
          <Anasayfa />
        </Route>

        <Route path="/siparisformu">
          <SiparisFormu />
        </Route>

        <Route path="/onay" >
          <Onay />
        </Route>

     </Switch>
   </Router>
  )
}

export default App
