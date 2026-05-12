//monotonic array 

const checkMonotonic = function (array){
    let incresing = true 
    let decresing = true 
    //write code here to return either true or false 
    for(let i = 0 ; i < array.length;i++){
      if(array[i] > array[i-1]) decresing = false
      if(array[i] < array[i-1]) incresing = false
    }
    return incresing || decresing
}

