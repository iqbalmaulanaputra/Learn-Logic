// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

//method 1
function duplicateEncode(word){
    let result = [];
    let lowercaseInput = word.toLowerCase();

    for (let char of lowercaseInput) {
        if (lowercaseInput.indexOf(char) === lowercaseInput.lastIndexOf(char)) {
            result.push("(");
        } else {
            result.push(")");
        }
    }

    return result.join('');
}



//method 2
function duplicateEncode(word) {
    const lowercaseInput = word.toLowerCase();
    return [...lowercaseInput].map(char =>
        lowercaseInput.indexOf(char) === lowercaseInput.lastIndexOf(char) ? "(" : ")"
    ).join('');
}



//method 3
const duplicateEncode = word => word.toLowerCase().replace(/./g, char => word.toLowerCase().indexOf(char) === word.toLowerCase().lastIndexOf(char) ? "(" : ")");
console.log(duplicateEncode("Success"));



