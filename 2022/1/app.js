import {PUZZLEINPUT} from "./input.js";

let result = 0;
const elves = PUZZLEINPUT.split("\n\n");

for(let elve of elves){
    const calories = elve.split("\n");
    let calorySum = 0;

    for(const calory of calories){
        const caloryValue = parseInt(calory);
        if(!isNaN(caloryValue)){
            calorySum += caloryValue;
        }
    }

    result = result < calorySum ? calorySum : result;
}

console.log(result);