import {PUZZLEINPUT} from "./input.js";

let result = 0;
const puzzle = PUZZLEINPUT.split("\n");

for(let i = 0; i < puzzle.length; i++) {
    if(parseInt(puzzle[i]) > parseInt(puzzle?.[i-1])) {
        result++;
    }
}

console.log(result);