console.time();

import { import_puzzle_input, transform_to_grid } from "../../helper_functions.js";
const PUZZLE_INPUT = import_puzzle_input();
let result = 0;

//Define helper functions
const scan_grid = (search_term) => {
    for(let i = 0; i < GRID.length; i++) {
        for(let j = 0; j < GRID[i].length; j++) {
            const char = GRID[i][j];
            if(char !== search_term[0]) continue; //Begin search on first letter only

            //Check directions
            for(let direction of Object.keys(directions)) {
                let is_valid = true;

                //Loop over search term to find patterns
                for(let k = 1; k < search_term.length; k++) {
                    if(GRID[i+(k*directions[direction].x)]?.[j+(k*directions[direction].y)] !== search_term[k]) {
                        is_valid = false;
                    }
                }
                if(is_valid) {
                    result++;
                }
            }
        }
    }
}

const directions = {
    right: { x: 0, y: 1 },
    left: { x: 0, y: -1 },
    up: { x: 1, y: 0 },
    down: { x: -1, y: 0 },
    up_right: { x: 1, y: 1 },
    up_left: { x: 1, y: -1 },
    down_right: { x: -1, y: 1 },
    down_left: { x: -1, y: -1 },
}

//Run Program
const GRID = transform_to_grid(PUZZLE_INPUT);
scan_grid("XMAS");

console.log(result);
console.timeEnd();