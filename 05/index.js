// https://projecteuler.net/problem=5

/*
 * Problem 5
 * Smallest Multiple
 * --------------------
 * 2520 is the smallest number that can be divided by each of the numbers from 
 * 1 to 10 without any remainder.
 * 
 * What is the smallest positive number that is evenly divisible (divisible
 * with no remainder) by all of the numbers from 1 to 20?
 */

const getSmallestMultiple = () => {
  let limit = 20
  let counter = 1

  for (let i = limit; i > 0; i--) {
    if ( counter % i !== 0 ) {
      return false
    }
    counter++
  }
}

console.log('Solution: ', getSmallestMultiple())
