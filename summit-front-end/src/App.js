import React, { useState, useCallback, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Container } from "react-bootstrap";

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
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);

  //create the token on login
  const login = useCallback((userId, token, expirationDate) => {
    setToken(token);
    setUserId(userId);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60); //Expiry date is now plus one hour. Checks if already has an expirationdate
    localStorage.setItem(
      //stores token in localStorage
      "userData",
      JSON.stringify({
        userId: userId,
        token: token,
        expiration: tokenExpirationDate.toISOString() //ISOString can be converted back to a date later.
      })
    );
  }, []);
  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userData"); //Deletes Token
  }, []);

  //useEffect renders after everything else
  //if the token exists use that to login
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData")); //converts back to JSON
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date() //If Token date is greater than now then it is valid.
    ) {
      login(storedData.userId, storedData.token, new Date(storedData.expiration));
    }
  }, [login]);

  let routes;

  if (token) {
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
      value={{
        isLoggedIn: !!token, //converts to boolean
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }}
    >
      <Router>
        <MainNavigation />
        <Container>
          <main>{routes}</main>
        </Container>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
