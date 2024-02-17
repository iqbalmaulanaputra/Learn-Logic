// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)

//method 1
function isIsogram(str) {
    str = str.toLowerCase();
    let letter = new Set();

    for (let letters of str) {
        if (letters.match(/[a-z]/i)) {
            if (letter.has(letters)) {
                return false
            }
            letter.add(letters);
        }
    }
    return true
}

//method 2
function isIsogram(word) {
    return new Set(word.toLowerCase()).size === word.length;
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("hello"));
console.log(isIsogram("Alphabet"));
console.log(isIsogram(""));