// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers() {
   return drivers.slice(0,2)
};
function returnLastTwoDrivers() {
    return drivers.slice(2)
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare1){
    return function(fare2) {
        return fare1*fare2;
    }
};
/*function fareDoubler(){
    return createFareMultiplier(2);
}*/
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
};
function selectDifferentDrivers(drivers, returnLirstTwoDrivers){
    return returnLirstTwoDrivers(drivers);
};