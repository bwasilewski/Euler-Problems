// https://projecteuler.net/problem=1

/*
 * Problem 1
 * Multiples of 3 and 5
 * --------------------
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
 */

 const getMultiples = () => {
    let indexArray = Array.from(Array(1000).keys())
    for (let iter of indexArray) {
      iter % 3 === 0 && console.log(`${iter} is divisible by 3`)
      iter % 5 === 0 && console.log(`${iter} is divisible by 5`)
    }
 }

 getMultiples()