// https://projecteuler.net/problem=4

/*
 * Problem 4
 * Largest Palindrome Product
 * --------------------
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 
 * 
 * 9009 = 91*99
 * 
 * Find the largest palindrome made from the product of two 3-digit numbers
 */

const doTheThing = val => {
  let a = 999
  for (let a = 999; a > 99; a--) {
    for (let b = 999; b > 99; b--) {
      let product = a * b
      if ( String(product) === String(product).split('').reverse().join('')) {
        return [a, b]
      }
    }
  }
}

console.log('Solution: ', doTheThing())
