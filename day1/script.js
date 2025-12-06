// Get data from text file
const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');

// Create an array separating each "rotation" from the text file
const dataArray = data.split(/\r?\n/)
