// Get data from text file
const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');


// Format the data into an array of id range tuples
const dataArray = data.split(",")

const formattedArray = dataArray.map(idRange => {
    const idRangeTuple = idRange.split("-");
    return idRangeTuple.map(Number)
})

function solution(array) {
    let sumOfIds = 0;
    array.forEach(tuple => {
        // Cycle through each number within a given range
        for (let i = tuple[0]; i <= tuple[1]; i++) {
            // Check if the length of the number is divisible by 2 so it's symmetrical
            if (i.toString().length % 2 === 0) {
                const halfIdLength = i.toString().length / 2;
                // Compare the left side and the right side of the symmetrical number
                const leftSide = i.toString().slice(0, halfIdLength);
                const rightSide = i.toString().slice(halfIdLength);
                if (leftSide === rightSide) {
                    sumOfIds += i;
                }
            }
        }
    })
    return sumOfIds
}

console.log(solution(formattedArray))