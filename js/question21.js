//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:


function likes(names) {
    const length = names.length;

    switch (length) {
        case 0:
            return "no one likes this";
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
    }
}
console.log(likes([])); 
console.log(likes(["Peter"])); 
console.log(likes(["Jacob", "Alex"])); 
console.log(likes(["Max", "John", "Mark"])); 
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));