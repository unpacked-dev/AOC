console.time();

import { import_puzzle_input, transform_to_grid } from "../../helper_functions.js";
const PUZZLE_INPUT = import_puzzle_input();
const directions = {
    "N": {x: 0, y: 1},
    "O": {x: 1, y: 0},
    "S": {x: 0, y: -1},
    "W": {x: -1, y: 0},
}
let result = 0;
let found_end_locations = [];

//Helper functions
function find_nearby_coordinates(previous_coordinate, search_for) {
    const results = [];
    for(let direction of Object.keys(directions)) {
        const direction_values = directions[direction];
        const new_coordinate = {
            x: previous_coordinate.x + direction_values.x,
            y: previous_coordinate.y + direction_values.y,
        };
        const new_coordinate_value = GRID[new_coordinate.y]?.[new_coordinate.x];
        if(new_coordinate_value === search_for) {
            results.push(new_coordinate);
        }
    }
    return results;
}

function walk(position) {
    const grid_value = GRID[position.y][position.x];
    const look_for = String(parseInt(grid_value) +1);
    const findings = find_nearby_coordinates(position, look_for);

    for(let found of findings) {
        const found_grid_value = GRID[found.y]?.[found.x];
        if(found_grid_value === "9") {
            const coord_string = JSON.stringify(found);
            if(!found_end_locations.includes(coord_string)) { //REMOVE IF (not content of if) FOR PART 2 SOLUTION
                found_end_locations.push(coord_string);
            } //REMOVE IF (not content of if) FOR PART 2 SOLUTION
        } else {
            walk(found);
        }
    }
}

//Run program
let GRID = transform_to_grid(PUZZLE_INPUT);

//Find all trail starts
const starts = [];
for(let y = 0; y < GRID.length; y++) {
    for(let x = 0; x < GRID[y].length; x++) {
        const grid_value = GRID[y][x];
        if(grid_value === "0") {
            starts.push({ x: x, y: y });
        }
    }
}

//Path trailing
for(let start of starts) {
    walk(start);
    result += found_end_locations.length;
    found_end_locations = [];
}

console.log(result);
console.timeEnd();