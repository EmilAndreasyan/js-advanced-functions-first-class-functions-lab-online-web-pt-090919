// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2)
}

let drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
returnFirstTwoDrivers(drivers)

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}

let drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
returnLastTwoDrivers(drivers)


const selectingDrivers = function () {
  return returnFirstTwoDrivers() && returnLastTwoDrivers()
}


