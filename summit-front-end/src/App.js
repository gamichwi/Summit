import React, { useState, useCallback } from "react";
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
import Auth from "./users/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((userId) => {
    setIsLoggedIn(true);
    setUserId(userId);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      //if a correct path is entered switch will prevent the rest from loading.
      <Switch>
        <Route path="/" exact>
          <Summits />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/:userId/summits" exact>
          <UserSummits />
        </Route>
        <Route path="/summits/new" exact>
          <NewSummit />
        </Route>
        <Route path="/summits/:summitId">
          <UpdateSummit />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Summits />
        </Route>
        <Route path="/:userId/summits" exact>
          <UserSummits />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, userId: userId, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
