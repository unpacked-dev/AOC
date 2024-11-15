import {PUZZLEINPUT} from "./input.js";

const MAX_CUBES = {
    red: 12,
    green: 13,
    blue: 14,
}
let result = 0;

const puzzle = PUZZLEINPUT.split("\n");
for(const gameRow of puzzle) {
    const gameString = gameRow.split(": ");
    const gameID = parseInt(gameString?.[0].split("Game ")?.[1]);
    const sets = gameString?.[1]?.split(";");

    if(!gameID || isNaN(gameID) || !sets) {
        continue;
    }

    let setPossible = true;
    for(const set of sets) {
        const cubes = set.split(",");

        for(let cube of cubes) {
            cube = cube.trim();
            const pick = cube.split(" ");

            const number = parseInt(pick?.[0]);
            const color = pick?.[1];

            if(!number || !color) {
                continue;
            }

            if(number > MAX_CUBES[color]) {
                setPossible = false;
            }
        }
    }

    if(setPossible) {
        result += gameID;
    }
}

console.log(result);