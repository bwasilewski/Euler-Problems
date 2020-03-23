// https://projecteuler.net/problem=3

/*
 * Problem 3
 * Largest Prime Factor
 * --------------------
 * The prime factors of 13,195 are 5, 7, 13 and 29
 * 
 * What is the largest prime factor for the number 600851475143?
 */

const getLargestPF = val => {
  for ( let i = 2; i < val; i++ ) {
    if ( val % i === 0 ) {
      return i
    }
  }
  return false
}

console.log('Solution: ', getLargestPF(600851475143))
