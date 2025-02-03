//==============================================================
// function add(n1, n2) {
//     return n1 + n2;
// }
// const number1 = '5' ;
// const number2 = 2.8

// const result = add(number1,number2)
// console.log(result)

//==============================================================

// function add(n1: string , n2: number) {
//     return n1 + n2;
// }
// const number1 = '5' ;
// const number2 = 2.8

// const result = add(number1,number2)
// console.log(result)

//=============================================================

//Argument of type 'string' is not assignable to parameter of type 'number'.

// function add(n1: number , n2: number) {
//     return n1 + n2;
// }
// const number1 = '5' ;
// const number2 = 2.8

// const result = add(number1,number2)
// console.log(result)

//=============================================================

// function add(n1: number , n2: number) {
//     if(typeof n1 !=='number' || typeof n2 !=='number'){
//         throw new Error('Incorrect Input')
//     }
//     return n1 + n2;
// }
// const number1 = '5';
// const number2 = 2.8;

// const result = add(number1,number2)
// console.log(result)

//=============================15==============================

// function add(n1: number , n2: number,showResult: boolean, phrase: string) {
//     const result = n1 + n2
//     if(showResult){
//         console.log(phrase + result);
//     }else{
//         return result;
//     }
    
// }
// const number1 = 5 ; //5.0
// const number2 = 2.8
// const printResult = true
// const resultPharase = 'Result is '

// const result = add(number1,number2,printResult,resultPharase)
// console.log(result)

//==============================================================