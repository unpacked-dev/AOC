console.time();

import { import_puzzle_input } from "../../helper_functions.js";
const PUZZLE_INPUT = import_puzzle_input();
let result = 0;

//Define helper functions
const transform_to_grid = (PUZZLE_INPUT) => {
    const grid = [];
    const rows = PUZZLE_INPUT.split("\n");
    for(let row of rows) {
        const cols = row.toString().replaceAll("\r", "").split("");
        grid.push(cols);
    }
    return grid;
}

const scan_grid = () => {
    for(let i = 0; i < GRID.length; i++) {
        for(let j = 0; j < GRID[i].length; j++) {
            const char = GRID[i][j];
            if(char !== "X") continue; //"XMAS" has to start with "X"

            //Check right
            if(GRID[i]?.[j+1] === "M" && GRID[i]?.[j+2] === "A" && GRID[i]?.[j+3] === "S") result++;
            //Check left
            if(GRID[i]?.[j-1] === "M" && GRID[i]?.[j-2] === "A" && GRID[i]?.[j-3] === "S") result++;

            //Check Up
            if(GRID[i+1]?.[j] === "M" && GRID[i+2]?.[j] === "A" && GRID[i+3]?.[j] === "S") result++;
            //Check Down
            if(GRID[i-1]?.[j] === "M" && GRID[i-2]?.[j] === "A" && GRID[i-3]?.[j] === "S") result++;

            //Check Up Right
            if(GRID[i+1]?.[j+1] === "M" && GRID[i+2]?.[j+2] === "A" && GRID[i+3]?.[j+3] === "S") result++;
            //Check Up Left
            if(GRID[i+1]?.[j-1] === "M" && GRID[i+2]?.[j-2] === "A" && GRID[i+3]?.[j-3] === "S") result++;
            //Check Down Right
            if(GRID[i-1]?.[j+1] === "M" && GRID[i-2]?.[j+2] === "A" && GRID[i-3]?.[j+3] === "S") result++;
            //Check Down Left
            if(GRID[i-1]?.[j-1] === "M" && GRID[i-2]?.[j-2] === "A" && GRID[i-3]?.[j-3] === "S") result++;
        }
    }
}

//Run Program
const GRID = transform_to_grid(PUZZLE_INPUT);
scan_grid();

console.log(result);
console.timeEnd();