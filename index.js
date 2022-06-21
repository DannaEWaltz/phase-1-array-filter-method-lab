// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"]


function findMatching(drivers, Bobby) {
    return drivers.filter(
        (driversMatch) => driversMatch.toLowerCase() === Bobby.toLowerCase());
}

function fuzzyMatch(drivers, Sa) {
    return drivers.filter(
        (matchDriver) => matchDriver.toLowerCase().indexOf(Sa.toLowerCase()) === 0
    );
}

function matchName(drivers, nameFound) {
    return drivers.filter((driver) => driver.name === nameFound);
}
 