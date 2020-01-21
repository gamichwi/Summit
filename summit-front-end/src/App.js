import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Summits from './summits/pages/Summits'

import './App.css';

const App = () => {
  return (
    <Router>
      <Route path="/">
        <Summits />
      </Route>
    </Router>
);
}

export default App;
