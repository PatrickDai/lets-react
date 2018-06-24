import React, { Component } from 'react';
import getNthPrime from './prime.service';
import PrimeForm from "./PrimeForm";
import PrimeResults from "./PrimeResults";

export default class PrimeApp extends Component {
  state = { results: [] };

  render() {
    return (
      <div className="Prime-App">
        <h1> Find the nth prime number </h1>
        <PrimeForm onSubmit={this.handleSubmit.bind(this)}/>
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
}
