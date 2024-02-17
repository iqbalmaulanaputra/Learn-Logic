//A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).


//method 1
function narcissistic(value) {
    let numString = value.toString();
    let numDigit = numString.length;

    let sum = numString.split('').reduce((acc, digit) => {
        return acc + Math.pow(parseInt(digit), numDigit);
    }, 0);
    return sum == value;
}


//method 2
function narcissistic(value) {
    let numString = value.toString();
    let numDIgit = numString.length;
    let sum = 0;

    for (let i = 0; i < numDIgit; i++) {
        sum += Math.pow(parseInt(numString[i]), numDIgit);
    }
    return sum === value;
}


//method 3
const narcissistic = value =>{
    let numString = value.toString();
    let numDIgit = numString.length;
    return value === numString.split('').reduce((acc, digit) => acc + Math.pow(parseInt(digit), numDIgit), 0);
}


//method 4
const narcissistic = value =>   +(''+value).split('').reduce((s,n,_,a)=>s + Math.pow(n,a.length),0) == value;


//method 5
narcissistic=n=>[...''+n].reduce((p,c)=>p+c**(n+'').length,0)===n;
console.log(narcissistic(153));