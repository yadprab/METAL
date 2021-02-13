import { BrowserRouter, Switch, Route} from "react-router-dom";
import {Homepage} from './Components/pages/Homepage'
import { AboutUs } from "./Components/pages/Aboutus";
import {ScrollToTop} from './Components/pages/ScrollToTop'
import {ErrorPage} from './Components/pages/404'
import './styles/Style.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={AboutUs} />
           <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
