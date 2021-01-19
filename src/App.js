import { Route, Switch } from "react-router-dom";
import "./App.css";
import MenuDemo from "./component/layout";
import Route1 from "./component/route1";
import Route2 from "./component/route2";
import Route3 from "./component/route3";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" component={MenuDemo} exact />
          <Route path="/route1" component={Route1} />
          <Route path="/route2" component={Route2} />
          <Route path="/route3" component={Route3} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
