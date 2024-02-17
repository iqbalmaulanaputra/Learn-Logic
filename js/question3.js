//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If the number is a multiple of both 3 and 5, only count it once

//method 1
function solution(number){
    if (number < 0) {
        return 0;
    }
    let result = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i;
        }
    }
    return result;
}
let number = 10;
let result = solution(number);



//method 2
function solution(numbers) {
    if (numbers < 0) {
        return 0;
    }

    return Array.from({ length: numbers }, (_, index) => index)
        .filter(num => num % 3 === 0 || num % 5 === 0)
        .reduce((sum, num) => sum + num, 0);
}
let numbers = 10;
let results = solution(numbers);



//method3
function solution(numberss){
    return numberss < 1 ? 0 : [...new Array(numberss).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
  }
  let numberss = 10;
  let resultss = solution(numberss);
  console.log(resultss);


