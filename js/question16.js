//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//method 1
function moveZeros(arr) {
  const nonZeros = arr.filter(element => element !== 0);
  const ZerosCount = arr.length - nonZeros.length
  return nonZeros.concat(Array(ZerosCount).fill(0));
}

//method 2
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
} 

//method 3
function moveZeros(arr) {
  return arr.sort((a, b) => b === 0 ? -1 : 0);
}

//method 4
let moveZeros = (arr) => arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));  
const a = [false,1,2,4,0,4,2, "a"];
const resultArr = moveZeros(a);
console.log(resultArr);
