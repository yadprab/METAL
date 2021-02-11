import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Homepage} from './Components/pages/Homepage'
import { AboutUs } from "./Components/pages/Aboutus";

import {ScrollToTop} from './Components/pages/ScrollToTop'
import './styles/Style.css'

function App() {
  return (
    <>
      <BrowserRouter>
       <ScrollToTop/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={AboutUs} />
       
        </Switch>
    
      </BrowserRouter>
   
    </>
  );
}

export default App;
