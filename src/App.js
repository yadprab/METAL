import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Homepage} from './Components/pages/Homepage'
import './styles/Style.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
