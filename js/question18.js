//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

//method 1
function pigIt(str) {
    return str.split(' ').map(word => {
        if (/^[a-zA-Z]+$/.test(word)) { 
            return word.slice(1) + word[0] + 'ay';
        } else {
            return word; 
        }
    }).join(' ');
}

//method 2
function pigIt(str) {
    return str.replace(/(\w)(\w*)/g, '$2$1ay');
  }
console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello world !'));