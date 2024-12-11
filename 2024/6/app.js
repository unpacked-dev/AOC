console.time();

import { import_puzzle_input, transform_to_grid } from "../../helper_functions.js";
let PUZZLE_INPUT = import_puzzle_input();
let result = 0;

//Define Helper functions
const directions = {
    N: { x: 0, y: -1 },
    O: { x: 1, y: 0 },
    S: { x: 0, y: 1 },
    W: { x: -1, y: 0 },
}

function locate_guard() {
    for(let i = 1; i < GRID.length; i++) {
        for(let j = 0; j < GRID[i].length; j++) {
            if(GRID[i][j] === "G") {
                return { x: j, y: i };
            }
        }
    }
}

function simulate_guard() {
    while(true) {
        const new_location = {
            x: GUARD.x + directions[GUARD.direction].x,
            y: GUARD.y + directions[GUARD.direction].y
        }
        const new_location_grid_item = GRID[new_location.y]?.[new_location.x];
        //console.log(GUARD, new_location, new_location_grid_item, result);

        if(new_location_grid_item === ".") {
            GUARD.x = new_location.x;
            GUARD.y = new_location.y;
            result++;
            set_GUARD_visited_location(new_location.x, new_location.y);
        }
        else if(new_location_grid_item === "X") {
            GUARD.x = new_location.x;
            GUARD.y = new_location.y;
        }
        else if(new_location_grid_item === "#") {
            switch(GUARD.direction) {
                case "N":
                    GUARD.direction = "O";
                    break;
                case "O":
                    GUARD.direction = "S";
                    break;
                case "S":
                    GUARD.direction = "W";
                    break;
                case "W":
                    GUARD.direction = "N";
                    break;
            }
        }
        else {
            result++;
            break;
        }
    }
}

function set_GUARD_visited_location(x, y) {
    GRID[y][x] = "X";
}

//Run Program
PUZZLE_INPUT = PUZZLE_INPUT.replaceAll("^", "G");
let GRID = transform_to_grid(PUZZLE_INPUT);
let guard_position = locate_guard();
let GUARD = { x: guard_position.x, y: guard_position.y, direction: "N" };
simulate_guard();

console.log(result);
console.timeEnd();