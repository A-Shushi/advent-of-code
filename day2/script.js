// Get data from text file
const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');


// Format the data into an array of id range tuples
const dataArray = data.split(",")

const formattedArray = dataArray.map(idRange => {
    const idRangeTuple = idRange.split("-");
    return idRangeTuple.map(Number)
})