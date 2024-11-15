import {PUZZLEINPUT} from "./input.js";

console.time();
let result;
const puzzle = PUZZLEINPUT.split("\n");

for(let i = 0; i < puzzle.length; i++) {
    const number1 = parseInt(puzzle[i]);
    if(isNaN(number1) || number1 >= 2020) {
        continue;
    }

    for(let j = i + 1; j < puzzle.length; j++) {
        const number2 = parseInt(puzzle[j]);
        if(isNaN(number2) || number1 + number2 !== 2020) {
            continue;
        }
        result = number1 * number2;
    }
}

console.log(result);
console.timeEnd();