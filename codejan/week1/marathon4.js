function loneNumber(arr){
    let obj = {}
    let value
    for(let i = 0 ; i< arr.length ; i++){
        let first = arr[i]
        obj[first] = (obj[first] || 0) + 1
    }
    for(key in obj){
        console.log(key)
        if(obj[key] == 1){
            value= key
        }
    }
    //console.log(obj)
    return value

}

let arr = [1,3,2,4,3,1,2]
loneNumber(arr)



// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


// function countFrequency(str){
    
//     let obj = {}
     
//     for(let i = 0 ; i < str.length ; i++){
//         if()
//     }
// }



// let str = "Homa loves coding Homa also loves solving challenges Coding is fun and challenges make Homa happy"
// let arr = [1,[2,3,[4,[5],6],7]]

// console.log(countFrequency(str))

// function getArray(arr){
//     let newArr = []
//     for(let i = 0 ; i< arr.length;i++){
//         if(Array.isArray(arr[i])){
//             getArray(arr[i])
//         }
//         else{
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// let arr = [1,[2,3,[4,[5],6],7]]

// console.log(getArray(arr))



// two table -

// student 
// id name age gender address phone number 

// marks obtained 
// id subject marks  sid 


// select s.name , m.subject, m.marks
// from student as s right join marks as m 
// on s.id = m.sid 

// students = [{
//     "name": "Rohit",
//     "age":29,
//     "location": "Bangalore"
// }]

// students.find({"name": "rohit"})







