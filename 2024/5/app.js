console.time();

import { import_puzzle_input } from "../../helper_functions.js";
const PUZZLE_INPUT = import_puzzle_input();
let result = 0;

//Helper functions
function parse_rules(raw_rules) {
    const rules_obj = { }; //Return value

    const lines = raw_rules.split("\n");
    for(let line of lines) {
        const values = line.split("|").map(Number); //X|Y => [X,Y]
        const print_value = values[1];
        const before_value = values[0];

        if(!rules_obj[print_value]) {
            rules_obj[print_value] = [before_value];
        } else {
            rules_obj[print_value].push(before_value);
        }
    }
    return rules_obj;
}

//Run Program
const puzzle_parts = PUZZLE_INPUT.split("\n\n");
const rules = parse_rules(puzzle_parts[0]);
const instructions = puzzle_parts[1].split("\n");

for(let instruction of instructions){
    const instruction_numbers = instruction.split(",").map(Number);
    const already_printed = [instruction_numbers[0]];
    let is_valid_instruction = true;

    //Start with second number of instruction
    for(let i = 1; i < instruction_numbers.length && is_valid_instruction; i++){
        const instruction_number = instruction_numbers[i];

        //Get all numbers which have to be printed before
        const before_values = rules[String(instruction_number)];

        //Check if numbers appear in instruction
        for(let before_value of before_values){
            if(instruction_numbers.includes(before_value)){
                //YES => Is it already printed before?
                if(!already_printed.includes(before_value)){
                    is_valid_instruction = false; //NO => RULE IS BROKEN!
                }
            }
        }

        if(is_valid_instruction){
            already_printed.push(instruction_number);
        }
    }
    if(!is_valid_instruction) continue;

    //Get middle number
    const middle_value = instruction_numbers[((instruction_numbers.length + 1) / 2) - 1];
    result += middle_value;
}

console.log(result);
console.timeEnd();