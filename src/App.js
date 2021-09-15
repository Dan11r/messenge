import {Button, Block} from "./components";
import {Auth, Home} from "./pages";
import {Redirect, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
        <Switch>
            <Route path={['/', '/auth']} exact component={Auth}/>
            <Route path={'/home'} exact component={Home}/>
        </Switch>
    </div>
  );
}

export default App;
