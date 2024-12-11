console.time();

import { import_puzzle_input } from "../../helper_functions.js";
const PUZZLE_INPUT = import_puzzle_input();
let result = 0;

//Helper functions
function check_result_calculation(expected_result, numbers) {
    const possible_combinations = generateCombinations(numbers.length - 1);
    for(let combination of possible_combinations) {
        let calculation = numbers[0];
        for(let i = 0; i < combination.length; i++) {
            const operator = combination[i];
            if(operator === '+') {
                calculation += numbers?.[i + 1];
            } else {
                calculation *= numbers?.[i + 1];
            }
            if(calculation === expected_result) {
                return true;
            }
        }
    }
    return false;
}

function generateCombinations(length) {
    if (length === 0) return [];
    if (length === 1) return [['+'], ['*']];

    const smallerCombinations = generateCombinations(length - 1);
    const result = [];

    smallerCombinations.forEach(combination => {
        result.push([...combination, '+']);
        result.push([...combination, '*']);
    });

    return result;
}

//Run Program
for(let line of PUZZLE_INPUT.split("\n")) {
    if(!line) continue;

    const split = line.split(": ");
    const expected_result = parseInt(split[0]);
    const numbers = split[1].replaceAll("\r", "").split(" ").map(Number);

    //console.log(expected_result, numbers);
    const valid_calc = check_result_calculation(expected_result, numbers);
    if(valid_calc) {
        result += expected_result;
    }
}

console.log(result);
console.timeEnd();