/* Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order. */


//method 1
function comp(array1, array2) {
    if (!array1 || !array2 || array1.length !== array2.length) {
        return false;
    }
    const squaredArray1 = array1.map(num => num * num);

    squaredArray1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);

    return squaredArray1.every((value, index) => value === array2[index]);
}

//method 2
function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
  }

//method 3
function comp(array1, array2) {
    return !!array1 && !!array2 && a.map(x => x*x).sort().join() == b.sort().join();
  }  
const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a, b));