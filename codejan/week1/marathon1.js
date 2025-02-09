// plus minus sum 

function plusMinus(arr) {
    let posCount = 0
    let negCount = 0 
    let zeroCount = 0
    let len = arr.length
    arr.forEach(element=>{
        element >0 ? posCount++ : element < 0 ? negCount++ : zeroCount++
    })
    console.log((posCount/len).toFixed(6))
    console.log((negCount/len).toFixed(6))
    console.log((zeroCount/len).toFixed(6))
    return [(posCount/len).toFixed(6),(negCount/len).toFixed(6),(zeroCount/len).toFixed(6)]
}
plusMinus(1,0,9,-2,-5,-6,2)
//0.400000 0.400000 0.200000