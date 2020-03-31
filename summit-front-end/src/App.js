import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Container } from "react-bootstrap";

import Summits from "./summits/pages/Summits";
// import Users from "./users/pages/Users";
//import NewSummit from "./summits/pages/NewSummit";
//import UserSummits from "./summits/pages/UserSummits";
//import UpdateSummit from "./summits/pages/UpdateSummit";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NavBootstrap from './shared/components/Navigation/NavBootstrap';
//import Auth from "./users/pages/Auth";
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from './shared/hooks/auth-hook';
import Footer from './shared/components/Footer/Footer';

import "./App.css";

//load when required
const Users = React.lazy(()=> import('./users/pages/Users'))
const NewSummit = React.lazy(()=> import('./summits/pages/NewSummit'))
const UserSummits = React.lazy(()=> import('./summits/pages/UserSummits'))
const UpdateSummit = React.lazy(()=> import('./summits/pages/UpdateSummit'))
const Auth = React.lazy(()=> import('./users/pages/Auth'))

const App = () => {
 const { token, login, logout, userId } = useAuth();
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
        {/* <MainNavigation /> */}
        <NavBootstrap />
        <Container>
          <main><Suspense fallback={<LoadingSpinner asOverlay/>}>{routes}</Suspense></main>
        </Container>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
