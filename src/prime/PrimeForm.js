import React  from 'react';

export default function PrimeForm(props) {
  const { onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <input name="index" type="number" min="1" placeholder="Enter a number" required/>
      <input type="submit"/>
    </form>
  );
}
