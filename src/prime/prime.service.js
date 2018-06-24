export default function getNthPrimeNumber(n) {
  if (n < 1) {
    return null;
  }
  return findNthPrimeNumber(n);
}

function findNthPrimeNumber(n) {
  let foundCount = 0;
  let number = 1;
  while (foundCount < n) {
    if (isPrime(++number)) {
      foundCount++;
    }
  }
  return number;
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}
