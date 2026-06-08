import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Anasayfa from './components/Anasayfa';
import SiparisFormu from './components/SiparisFormu';
import Onay from './components/Onay';
import './App.css';

function App() {
  const [siparisData, setSiparisData] = useState(null);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Anasayfa />
        </Route>

        <Route path="/siparisformu">
          <SiparisFormu setSiparisData={setSiparisData} />
        </Route>

        <Route path="/onay">
          <Onay siparisData={siparisData} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
