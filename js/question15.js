//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

//method 1
function makeNegative(num) {
    if(num > 0){
        return - num;
    }else{
        return num
    }

  }


//method 2
function makeNegative(num){
    return num > 0 ? - num : num;
}  
  let a = 10;
  let b = -7;

  console.log(makeNegative(b));