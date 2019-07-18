import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Games from './components/Games';
import Streams from './components/Streams'
import GameStreams from './components/GameStreams'
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/top-streams' component={Streams} />
        <Route path='/game/:id' component={GameStreams} />
        <Route exact path='/' component={Games} />
      </Switch>
    </div>
  );
}

export default App;
