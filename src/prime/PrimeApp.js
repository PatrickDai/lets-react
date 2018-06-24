import React, { Component } from 'react';
import getNthPrime from './prime.service';
import PrimeForm from "./PrimeForm";
import PrimeResults from "./PrimeResults";

const APP_KEY = "PrimeApp";

export default class PrimeApp extends Component {
  state = { results: [] };

  render() {
    return (
      <div className="Prime-App">
        <h1> Find the nth prime number </h1>
        <PrimeForm onSubmit={this.handleSubmit.bind(this)}/>
        <button onClick={this.emptyResults.bind(this)}> Empty results</button>
        <PrimeResults results={this.state.results}/>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const input = event.target.index;
    const index = input.value;
    const prime = getNthPrime(index);
    this.updateState(index, prime);
    this.emptyValue(input);
  }

  updateState(index, prime) {
    const results = this.state.results.slice();
    results.unshift({ index, prime });
    this.setState({ results });
  }

  emptyValue(input) {
    input.value = "";
  }

  emptyResults() {
    this.setState({ results: [] });
  }

  componentDidMount() {
    const persistedResults = localStorage.getItem(APP_KEY);
    if (persistedResults !== null) {
      this.setState({ results: JSON.parse(persistedResults) });
    }
    window.addEventListener("beforeunload", this.persist.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.persist.bind(this));
  }

  persist() {
    localStorage.setItem(APP_KEY, JSON.stringify(this.state.results))
  }
}
