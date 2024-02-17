//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

//method 1
function countBits(n) {
    return (n.toString(2).match(/1/g) || []).length;
}

//method 2
countBits = n => n.toString(2).split('0').join('').length;
console.log(countBits(10))
