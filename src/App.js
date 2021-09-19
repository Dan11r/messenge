import {Button, Block} from "./components";
import {Auth, Home} from "./pages";
import {Redirect, Route, Switch} from "react-router-dom";
import TestForm from "./components/TestForm";

function App() {
  return (
    <div className="wrapper">
        <Switch>
            <Route path={['/', '/login', '/register']} exact component={Auth}/>
            <Route path={'/home'} exact component={Home}/>
            <Route path={'/test'} exact component={TestForm}/>
        </Switch>
    </div>
  );
}

export default App;
