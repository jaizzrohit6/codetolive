let arr = ['rohitt',4,true]

arr.forEach(ele=>{
    if(typeof ele == "boolean"){
        console.log("hey boolean")
    }
    if(typeof ele == "string"){
        console.log("hey string")
    }
    if(typeof ele == "number"){
        console.log("hey number")
    }
})