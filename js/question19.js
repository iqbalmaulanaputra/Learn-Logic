//Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.

//method 1
function findOdd(A) {
    let result = 0;

    for (let i = 0; i < A.length; i++) {
        result ^= A[i];
    }
    return result;
  }

//method 2
    function findOdd(A) {
        return A.reduce((result, num) => result ^ num, 0);
    }  

//method 3
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);    
  const arrayExample = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
  const oddNumber = findOdd(arrayExample);
  
  console.log(oddNumber);  