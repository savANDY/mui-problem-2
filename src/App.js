import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Layout";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Layout} />
        <Route path="/cdr" exact component={Layout} />
        <Route path="/cdr/personas" exact component={Layout} />
        <Route path="/cdr/creditopersonas" exact component={Layout} />
        <Route path="/cdr/creditos" exact component={Layout} />
        <Route path="/cdr/garantias" exact component={Layout} />
        <Route path="/cdr/garantiascredito" exact component={Layout} />
        <Route path="/cdr/garantiaspersona" exact component={Layout} />
      </Switch>
    </Router>
  );
};

export default App;
