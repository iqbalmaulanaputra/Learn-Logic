// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//method 1
function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }

    let x = 0;
    let y = 0;

    for (let direction of walk) {
        switch (direction) {
            case 'n':
                y++;
                break;
            case 's':
                y--;
                break;
            case 'e':
                x++;
                break;
            case 'w':
                x--;
                break
            default:
                return false;
        }
    }
    return x === 0 && y === 0;
}

//method 2
function isValidWalk(walk) {
    var res = {n:0, w:0, s:0, e:0};
    walk.forEach((c) => res[c]++);
    return walk.length === 10 && res.n == res.s && res.e == res.w;
  }


//method 3
function isValidWalk(walk) {
    return walk.length == 10 && !walk.reduce(function(w,step){ return w + {"n":-1,"s":1,"e":99,"w":-99}[step]},0)
  }


const walk1 = ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'];
console.log(isValidWalk(walk1)); 

const walk2 = ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 'e'];
console.log(isValidWalk(walk2)); 