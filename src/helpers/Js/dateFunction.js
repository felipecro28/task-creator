function dateToDaysLeft(taskDate){
    let deadLine = new Date(taskDate)
    let today = Date.now()
    let difference = Math.abs(deadLine - today)
    let daysLeft = difference/(1000 * 3600 * 24)
    daysLeft = Math.round(daysLeft)
    return daysLeft + 1
}