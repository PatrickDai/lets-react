import React from "react";

export default function PrimeResults(props) {
  const results = props.results.map((result, i) => (
    <li key={i}>
      {" "}
      The prime number n°{result.index} is {result.prime}{" "}
    </li>
  ));
  return <ul>{results}</ul>;
}
