import { BrowserRouter, Switch, Route} from "react-router-dom";
import {Homepage} from './Components/pages/Homepage'
import { AboutUs } from "./Components/pages/Aboutus";
import {ScrollToTop} from './Components/pages/ScrollToTop'
import {ErrorPage} from './Components/pages/404'
import {Articles} from './Components/pages/Articles';
import './styles/Style.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={AboutUs} />
            <Route exact path="/articles" component={Articles} />
           <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
