const findTheOldest = function(people) {
    const arrayOrderedByOldestPeople = people.sort((a,b) => {
        if(a.yearOfDeath==undefined){
            year1 = (new Date()).getFullYear();
        }else{
            year1 = a.yearOfDeath
        }
        if(b.yearOfDeath==undefined){
            year2 = (new Date()).getFullYear();
        }else{
            year2 = b.yearOfDeath
        }

        const lastGuy = year1 - a.yearOfBirth;
        const nextGuy = year2 - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    })

    return arrayOrderedByOldestPeople[0];

};

// Do not edit below this line
module.exports = findTheOldest;
