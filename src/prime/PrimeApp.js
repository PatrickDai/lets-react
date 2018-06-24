import React, { Component } from 'react';
import getNthPrime from './prime.service';

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

function PrimeForm(props) {
  const { onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <input name="index" type="number" min="1" placeholder="Enter a number" required/>
      <input type="submit"/>
    </form>
  );
}

function PrimeResults(props) {
  const results = props.results.map((result, i) =>
    <li key={i}> The prime number n°{result.index} is {result.prime} </li>
  );
  return <ul>{results}</ul>;
}
