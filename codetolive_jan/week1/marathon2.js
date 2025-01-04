// min max sum 
function maxminSum(arr){
    let len = arr.length
    arr = arr.sort((a,b)=> a-b)
    let minSum = 0 , maxSum = 0
    for(let i = 0 ; i < len ; i++){
        if(i < len - 1) minSum += arr[i]
        if(i > 0) maxSum += arr[i]
    }
    console.log(minSum,maxSum)
    return ([minSum,maxSum])
}
let arr = [1,5,77,2,9,33,78,6]
console.log(maxminSum(arr))
