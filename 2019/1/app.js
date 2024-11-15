console.time();
import {PUZZLEINPUT} from "./input.js";

let result = 0;
const puzzle = PUZZLEINPUT.split("\n");

puzzle.forEach((x) => {
    const mass = parseInt(x);
    if(!mass || isNaN(mass)) {
        return;
    }

    const third = mass / 3;
    const floored = Math.floor(third);
    result += floored - 2;
});

console.log(result);
console.timeEnd();