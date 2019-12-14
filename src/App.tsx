import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from 'containers/Home'
import MovieDetails from 'containers/MovieDetails'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/details">
          <MovieDetails />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
