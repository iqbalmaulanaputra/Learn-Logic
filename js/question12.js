// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false


//method 1
function generateHashtag(str) {
    if(!str || str.trim() === ""){
        return false;
    }

    const words = str.split(" ").filter(word => word !== "");
    const hashtag = "#" + words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");

    return hashtag.length <= 140 ? hashtag : false;
}


//method 2
generateHashtag=(s,f=`#`+s.replace(/\b./g,a=>a.toUpperCase``).replace(/ /g,``))=>f>`#`&&!f[140]&&f

//method 3
function generateHashtag (str) {
    var hashtag = str.split(' ').reduce(function(tag, word) {
      return tag + word.charAt(0).toUpperCase() + word.substring(1);
    }, '#');
    
    return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
  }
const input1 = "The marketing team is typing hashtags";
console.log(generateHashtag(input1));