function convertToTime(time){

    const parts = time.split(":")
    let hours = parseInt(parts[0],10)
    const minutes = parts[1]
    const secondAndPeriod = parts[2]
    const second = secondAndPeriod.slice(0,2)
    const period = secondAndPeriod.slice(2)

    if( period == "AM" && hours === 12){
        hours = 0
    }
    else if( period == "PM" && hours !== 12){
        hours += 12
    }
    console.log(hours)
    let formatterHours = hours.toString().padStart(2,"0")
    return `${formatterHours}:${minutes}:${second}`
}

let time= "12:40:22AM"
console.log(convertToTime(time))