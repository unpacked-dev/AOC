console.time();
import {PUZZLEINPUT} from "./input.js";

let result = 0;

const lines = PUZZLEINPUT.split("\n");
for(let line of lines){
    if(!line) continue;

    let numbers = line.split(" ").map(Number);
    let safe = null;

    //Check ascending
    for(let i = 1; i < numbers.length && safe === null; i++){
        const previous = numbers[i - 1];
        const current = numbers[i];
        if(previous === current || previous > current || (current - previous) > 3){
            safe = false;
        }
    }
    safe = safe === null ? true : null;

    //Check descending
    for(let i = 1; i < numbers.length && safe === null; i++){
        const previous = numbers[i - 1];
        const current = numbers[i];
        if(previous === current || previous < current || (previous - current) > 3){
            safe = false;
        }
    }
    if(safe !== false){
        result++;
    }
}

console.log(result);
console.timeEnd();