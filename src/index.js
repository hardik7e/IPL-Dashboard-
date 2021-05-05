import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './App';
import Update from './Pages/Update'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/updates" component={Update}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
