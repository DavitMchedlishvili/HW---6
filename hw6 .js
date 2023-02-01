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


function findUniq() {

}





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
let max = Math.max(...maxValue)
console.log(max);


/////////////////////////////////

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




// task 8

// let rame =  [0, 0, 0, 0, 1, 0, 0, 0, 0]
// function countZero(array) {
//     if(array.includes(0) && array.lenght >= 4){
//         for(let num of array){
//         let numZero = num != 0
//             if (numZero){
//                 let splitPoint = array.split(numZero)
//                 return splitPoint
//             }
            
//         }
//     }else if()
// }


// console.log(countZero(rame))