import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import Route from "react-router-dom/Route";
import PrimeApp from "./prime/PrimeApp";
import MusicApp from "./music/MusicApp";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/prime" component={PrimeApp} />
          <Route exact path="/music" component={MusicApp} />
          <Redirect from="/" to="/music" />
        </Switch>
      </BrowserRouter>
    );
  }
}
