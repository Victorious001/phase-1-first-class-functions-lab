// Code your solution in this file!
function returnLastTwoDrivers(arr) {
    return arr.slice(arr.length - 2)
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(mult) {
    return (fare) => fare * mult
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare)
}
const fareTripler = (fare) => createFareMultiplier(3)(fare)

function selectDifferentDrivers(arr, func) {
    return func(arr)
}