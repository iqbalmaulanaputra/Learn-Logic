// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

//method 1
function zero(operation) { return operation ? operation(0) : 0; }
function one(operation) { return operation ? operation(1) : 1; }
function two(operation) { return operation ? operation(2) : 2; }
function three(operation) { return operation ? operation(3) : 3; }
function four(operation) { return operation ? operation(4) : 4; }
function five(operation) { return operation ? operation(5) : 5; }
function six(operation) { return operation ? operation(6) : 6; }
function seven(operation) { return operation ? operation(7) : 7; }
function eight(operation) { return operation ? operation(8) : 8; }
function nine(operation) { return operation ? operation(9) : 9; }

function plus(num) { return (operand) => operand + num; }
function minus(num) { return (operand) => operand - num; }
function times(num) { return (operand) => operand * num; }
function dividedBy(num) { return (operand) => Math.floor(operand / num); }


console.log(seven(times(five())));     
console.log(four(plus(nine())));        
console.log(eight(minus(three())));   
console.log(six(dividedBy(two())));    
console.log(eight(dividedBy(three()))); 
