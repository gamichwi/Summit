import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Summits from "./summits/pages/Summits";
import Users from './users/pages/Users'
import NewSummit from "./summits/pages/NewSummit";

import "./App.css";

const App = () => {
  return (
    <Router>
      {/* if a correct path is entered switch will prevent the rest from loading. */}
      <Switch>
        <Route path="/" exact>
          <Summits />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/summits/new" exact>
          <NewSummit />
        </Route>

        {/* Redirect to summits for all other routes */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
