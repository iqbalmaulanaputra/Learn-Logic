//Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

//method 1
function spinWords(string) {
    let word = string.split(' ');
    for (let i = 0; i < word.length; i++) {
        if (word[i].length >= 5) {
            word[i] = word[i].split('').reverse().join('');
        }
    }
    let result = word.join(' ');
    return result;
}

//method 2
function spinWords(string) {
    return string.split(' ').map(word => (word.length >= 5 ? word.split('').reverse().join('') : word)).join(' ');
}

//method 3
function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
  }
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));