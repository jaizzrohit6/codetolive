const express = require("express")
const app = express()
let PORT = 3000

app.get("/User",(req,res) => {
    let url = "https://dummyjson.com/todos?limit=3&skip=10"
    let getResponse = getData(url)
    if(getResponse){
        res.send(getResponse)
    }
})

async function getData(url){
    try{
        let response = await fetch(url)
        return response
    }
    catch(err){
        console.log(err)
        return err
    }
}

app.listen(PORT,()=>{
    console.log(`https://localhost:3000`)
})


for (let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }

// phase
// windows

// how 

// select user from userdata 
// where date between (start_date AND end_date)

//unmount 
// useEffect({
//     let getData = fetch(url)
// },[])



// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");

// console.log("start")
// setTimeout(()=>{
//     console.log("execute in 5 seconds")
// },0)
// console.log("end")
// promise

// Input : 4554
// Output: true 
// Input : 7789
// Output: false


function palindrome(input){
    let data = input.toString()
    let len = data.length 
    let mid = Math.floor(len/2)
    
    for(let i = 0 ; i< mid ; i++){
        if(data[i] !== data[len-1-i]){
            return false
        }
    }
    return true 
}
let input = 12321
console.log(palindrome(10001))





// Write a function that finds the number of occurrences of a specific character in a given string using JavaScript's method.
 
// console.log(countCharacterOccurrences("hello world", 'o'));  // Output: 2
 
// console.log(countCharacterOccurrences("abcdefg", 'a'));     // Output: 1



let  countCharacterOccurrences = (str,input) =>{
    let obj = {}
    let getstr = str.split('')
    let countElement = 0
    getstr.filter(element=>{
        if(element == input){
            countElement++
        }
    })
    return countElement
}

let str ="aaaaabcdefg"
let key = 'a'
console.log(countCharacterOccurrences(str,key))



// for(let i = 0 ; i< str.length;i++){
//         let letter = str[i]
//         obj[letter] = (obj[letter] || 0 ) + 1
//     }
//     for(let key in obj){
//         if(key == input){
//             return obj[key]
//         }
//     }