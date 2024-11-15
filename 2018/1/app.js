console.time();
import {PUZZLEINPUT} from "./input.js";

const lines = PUZZLEINPUT.split("\n").join(" ");
const result = eval(lines);

console.log(result);
console.timeEnd();