// let numbers = [-5,9,-4,8,-3,7,-2,5,-1,6,0];
// let count = 0;
//  for(let i = 0; i < numbers.length; i++){
//      const  element = numbers[i];
//     //  console.log(element)
//     if (element >5){
//         // console.log('yes')
//         count = count+1;
//     }
//     else{
//         // console.log('no')
//     }
//  }
//  console.log(count);

function greaterThanFive (numbers){
    let count = 0;
    for ( let i= 0; i <numbers.length; i++){
        const element = numbers[i];
        if (element > 5 ) count++ ;
    }
    return count;
}
let result = greaterThanFive([-5,9,-4,8,-3,7,-2,5,-1,6,0]);
console.log(result);
