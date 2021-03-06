// https://projecteuler.net/problem=2

/*
 * Problem 2
 * Even Fibonacci numbers
 * --------------------
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
 * By starting with 1 and 2, the first 10 terms will be:
 * 
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * 
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
 * find the sum of the even-valued terms.
 */

const getSolution = () => {
  let fib1 = 1
  let fib2 = 1
  let total = 0

  while (total < 4000000) {
    const next = fib1 + fib2
    next % 2 === 0 && (total += next)
    fib1 = fib2
    fib2 = next
  }
  
  return total
}

console.log('Solution: ', getSolution())