console.time();
import {PUZZLEINPUT} from "./input.js";

let puzzle = PUZZLEINPUT.split(",").map(Number);
let pointer = 0;

runProgram: while( true ) {
    let output = 0;
    switch(puzzle[pointer]) {
        case 1: //+
            output = puzzle[puzzle[pointer + 1]] + puzzle[puzzle[pointer + 2]];
            break;
        case 2: //*
            output = puzzle[puzzle[pointer + 1]] * puzzle[puzzle[pointer + 2]];
            break;
        case 99: //stop
            break runProgram;
    }
    puzzle[puzzle[pointer + 3]] = output;
    pointer += 4;
}

const result = puzzle[0];

console.log(result);
console.timeEnd();