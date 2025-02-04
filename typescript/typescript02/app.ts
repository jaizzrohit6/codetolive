//=====================object===========================

// const product = {
//     id: 'abc',
//     price: 12.99,
//     tag: ['great-offer','hot-and-new'],
//     details:{
//         title: 'Red carpet',
//         description: 'A great carpet'
//     }
// } 
// {
//     id: string;
//     price: number;
//     tag: string[];
//     details: {
//         title: string;
//         description: string;
//     };
// }

//======================================================

// const person:{
//     name: string;
//     age: number;
//     hobbies: string [];
//     role: [number,string,number]
// } = {
//     name: 'Rohit Jaiswal',
//     age: 30,
//     hobbies : ['Sports','Cyclying'],
//     role: [2,'author',3] 
// }

// person.role.push('admin')
        // person.role.pop()
        // person.role.pop()
        // person.role.pop()
        // person.role.pop()
        // person.role[1] = 10  // gives error 
// console.log(person)

//=====================enum===============================

// enum ROLE {
//     ADMIN,READ_ONLY,AUTHOR
// } 

// enum ROLE {
//     ADMIN =5,READ_ONLY,AUTHOR
// } 

// const ADMIN =0 
// const AUTHOR = 1
// const READ_ONLY = 2

// const person = {
//     name: 'Rohit',
//     age:30,
//     hobbies: ['Sports','Cooking'],
//     role: ROLE.ADMIN
// }
// if(person.role === ROLE.ADMIN){
//     console.log('is admin')
// }
// console.log(person)

//=======================================================