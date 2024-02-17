// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".



//method 1
function disemvowel(str) {
    const vokal = "aiueoAIUEO";
    return str.split('').filter(char => !vokal.includes(char)).join('');
}

//method 2
function disemvowel(str){
    return str.replace(/[aiueo]/gi, "");
}

let stringAsli = "Website ini bukan pecundang lol!";
let stringHasil = disemvowel(stringAsli);
console.log(stringHasil)
