console.time();
import {PUZZLEINPUT} from "./input.js";

let result = 0;
const row = PUZZLEINPUT.split("\n");
for(let i = 0; i < row.length; i++) {
    const numbers = row[i].split("\t").map(Number);

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const difference = max - min;

    result += difference;
}

console.log(result);
console.timeEnd();