import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Summits from "./summits/pages/Summits";
import Users from "./users/pages/Users";
import NewSummit from "./summits/pages/NewSummit";
import UserSummits from "./summits/pages/UserSummits";
import UpdateSummit from "./summits/pages/UpdateSummit";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

import "./App.css";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        {/* if a correct path is entered switch will prevent the rest from loading. */}
        <Switch>
          <Route path="/" exact>
            <Summits />
          </Route>
          <Route path="/:userId/summits" exact>
            <UserSummits />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/summits/new" exact>
            <NewSummit />
          </Route>
          <Route path="/summits/:summitId">
            <UpdateSummit />
          </Route>
          {/* Redirect to summits for all other routes */}
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
