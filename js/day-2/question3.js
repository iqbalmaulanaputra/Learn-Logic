// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

//method 1
function getCount(str) {
    const matches = str.match(/[aeiou]/g);
    return matches ? matches.length : 0;
}


//metho 2
function getCount(str) {
    return (str.match(/[aeiou]/g) || []).length;
}

//method 3
const getCount = str => (str.match(/[aeiou]/g) || []).length;
