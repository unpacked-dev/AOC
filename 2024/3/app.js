console.time();

import { import_puzzle_input } from "../../helper_functions.js";
const PUZZLE_INPUT = import_puzzle_input();
let result = 0;

const reg_exp = /mul\(([0-9]{1,3}),([0-9]{1,3})\)/g;
const multi = PUZZLE_INPUT.match(reg_exp);

for(let mul of multi){
    const digits_exp = /([0-9]{1,3})/g;
    const digits = mul.match(digits_exp).map(Number);
    const product = digits[0] * digits[1];
    result += product;
}

console.log(result);
console.timeEnd();