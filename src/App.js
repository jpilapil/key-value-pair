import React from "react";
import "./style/master.scss"; // global styles
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import Connect from "./components/pages/Connect";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exaxct path="/connect" component={Connect} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
