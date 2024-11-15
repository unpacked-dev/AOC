console.time();
import {PUZZLEINPUT} from "./input.js";

const up = PUZZLEINPUT.split("(").length -1;
const down = PUZZLEINPUT.split(")").length -1;
const result = up - down;

console.log(result);
console.timeEnd();