// // Get data from text file
// const fs = require('fs');
//
// const data = fs.readFileSync('input.txt', 'utf8');
//
// // Create an array separating each "rotation" from the text file
// const dataArray = data.split(/\r?\n/)

const data = "L68 L30 R48 L5 R60 L55 L1 L99 R14 L82"
const dataArray = data.split(" ")
console.log(dataArray)

let currentValue = 50;

function turnRight(value) {
    const reducedValue = value % 100;
    const result = currentValue + reducedValue;
    return result % 100
}

function turnLeft(value) {
    const reducedValue = value % 100;
    let result = currentValue - reducedValue;
    if (result < 0) {
        result = result + 100
    }
    return result
}

function solution() {
    let numOfZeros = 0;
    dataArray.forEach((element) => {
        const elementNumber = element.slice(1);
        if (elementNumber > 99) {
            const numOfPasses = Math.floor(elementNumber / 100)
            numOfZeros += numOfPasses;
        }

        if (element.charAt(0) === "R") {
            currentValue = turnRight(elementNumber)
        } else {
            currentValue = turnLeft(elementNumber)
        }

        if (currentValue === 0) {
            numOfZeros++;
        }
    })
    return numOfZeros
}

console.log(solution())
