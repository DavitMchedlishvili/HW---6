// Task 1



// madam


function palindrom (text){
    for(let i = 0; i < text.length; i++){
        if(text[i] != text[text.length - (i+1)]) return false
    }
    return true;
}



console.log(palindrom("madam"));
console.log(palindrom("missue"));




// task 2

let x = 'cbcbdde';
let y = 'worsdorw';
let z = 'worsdorws';

function findUniq(arr) {

    for(let el of arr){
        if(arr.indexOf(el) === arr.lastIndexOf(el)){
            return el;
        }
    }
}

console.log(findUniq(x))
console.log(findUniq(y))
console.log(findUniq(z))


// task 3



function camelize(str) {
    let words = str.split(" ");
    let camelCase = "";
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (i === 0) {
        camelCase += word.toLowerCase();
      } else {
        camelCase += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }
  
    return camelCase;
  }
  let stra = "sad midis Matarebeli";
  let camelized = camelize(stra);
  console.log(camelized); 


//   task 4 

function normilize(num){
if(num <= 0){
    return 'Invalid number'
};

if(num % 10 === 1 && num != 11){
    return num+'st'
}else if(num % 10 === 2 && num != 12){
    return num+'nd'
}else if(num % 10 === 3 && num % 10 != 13){
    return num+'rd'
}else return num+'th'


}

console.log(normilize(1124))
console.log(normilize(123))
console.log(normilize(12))
console.log(normilize(21))





// task 5

let arr1= [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


function findMax(arr) {
    return arr.reduce((acc, cur) =>{
        if (acc[cur]){
            acc[cur]++;
        }else acc[cur]=1;
        return acc;

     }, {})
}



console.log(findMax(arr1));


let maxValue = Object.values(findMax(arr1))
let max = Math.max(...maxValue);
console.log(max);




// task 6

let array1 = [1, 2, 3];
let array2 = [2, 30, 1];


function delDuplicate (arrX, arrY) {
    let array3 = arrX.concat(arrY)
    let uniqArray = [];
    for(let element of array3){
        if(uniqArray.indexOf(element) === -1){
            uniqArray.push(element)
        }
    }
    return uniqArray;
    

}

console.log(delDuplicate(array1,array2));




// task 9 


function sumOfDigits(n) {
    if (n === 0){
        return 0;
    } else return (n % 10) + sumOfDigits(Math.floor(n / 10));
  }
  console.log(sumOfDigits(4)); 




  // function sumOfDigits(n) {
//     let converted = n.toString()
//     let splitted = converted.split('')
//     return splitted.reduce((acc,curr) => {
//         return acc + +curr;
//     }, 0)



// }


// console.log(sumOfDigits(123))