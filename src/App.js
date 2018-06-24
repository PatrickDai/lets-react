import React, { Component } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import PrimeApp from "./prime/PrimeApp";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/prime" component={PrimeApp}/>
          <Redirect from="*" to="/prime"/>
        </Switch>
      </BrowserRouter>
    );
  }
}
