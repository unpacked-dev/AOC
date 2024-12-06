import { PUZZLEINPUT } from "./input.js";

let result = 0;
const puzzle = PUZZLEINPUT.split("\n");

for(let i = 0; i < puzzle.length; i++) {
    const line = puzzle[i];
    let first = 0;
    let last = 0;

    for(let j = 0; j < line.length; j++) {
        const char = parseInt(line[j]);
        if(isNaN(char)) {
            continue;
        }
        first = first ? first : char;
        last = last ? char : first;
    }

    const stringNumber = first.toString() + last.toString();
    result += parseInt(stringNumber);
}

console.log(result);

//deno run --allow-all .\parser.js