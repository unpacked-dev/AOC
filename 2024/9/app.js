console.time();

import { import_puzzle_input } from "../../helper_functions.js";
const PUZZLE_INPUT = import_puzzle_input();
let result = 0;

//Helper functions
function create_disk_map(condensed_disk) {
    const disk_map = [];
    let ID = 0;

    for (let i = 0; i < condensed_disk.length; i++) {
        const instruction = parseInt(condensed_disk[i]);
        if(!instruction || instruction === 0) {
            continue;
        }

        if(i % 2 === 0) {
            const value = String(String(ID)).repeat(instruction);
            const seperator = value.replaceAll(String(ID), `${String(ID)},`);
            disk_map.push(seperator.split(","));
            ID++;
        } else {
            disk_map.push(".".repeat(instruction).split(""));
        }
    }

    return disk_map;
}

function defrag_disk_map() {
    for (let y = 0; y < DISK_MAP.length; y++) {
        const row = DISK_MAP[y];
        for (let x = 0; x < row.length; x++) {
            const disk_value = row[x];
            if (disk_value !== ".") continue;

            DISK_MAP[y][x] = extract_last_disk_value();
        }
    }
}

function extract_last_disk_value() {
    for (let y = DISK_MAP.length - 1; y >= 0; y--) {
        const row = DISK_MAP[y];
        for (let x = row.length - 1; x >= 0; x--) {
            const disk_value = row[x];
            if (disk_value === "." ||disk_value === "") continue;

            DISK_MAP[y][x] = "";
            return disk_value;
        }
    }
}

function calculate_checksum() {
    let ID = 0;
    for(let y = 0; y < DISK_MAP.length; y++) {
        for (let x = 0; x < DISK_MAP[y].length; x++) {
            //console.log(DISK_MAP[y][x]);
            const value = parseInt(DISK_MAP[y][x]);
            if(!isNaN(value)) {
                result += (value * ID);
                ID++;
            }
        }
    }
}

//Run program
const DISK_MAP = create_disk_map(PUZZLE_INPUT);
defrag_disk_map();
calculate_checksum();

console.log(result);
console.timeEnd();