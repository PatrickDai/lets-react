import getNthPrimeNumber from './prime.service';

describe('getNthPrimeNumber(n)', () => {
  it('returns null when n < 1', () => {
    const n = 0;
    const nthPrimeNumber = null;
    expect(getNthPrimeNumber(n)).toBe(nthPrimeNumber);
  });

  it('returns the nth prime number', () => {
    const n = 10;
    const nthPrimeNumber = 29;
    expect(getNthPrimeNumber(n)).toBe(nthPrimeNumber);
  });
});
