console.time();
import {PUZZLEINPUT} from "./input.js";

const handleDirection = (lr) => {
    switch(lr) {
        case "R":
            if(location.direction <= 3) {
                location.direction++;
            } else {
                location.direction = 1;
            }
            break;
        case "L":
            if(location.direction >= 2) {
                location.direction--;
            } else {
                location.direction = 4;
            }
            break;
    }
}

const handleSteps = (steps) => {
    switch(location.direction) {
        case 1:
            location.y += steps;
            break;
        case 2:
            location.x += steps;
            break;
        case 3:
            location.y -= steps;
            break;
        case 4:
            location.x -= steps;
            break;
    }
}

const moves = PUZZLEINPUT.split(", ");
let result;
const location = { x: 0, y: 0, direction: 0 } //directions: 1 = n; 2 = o; 3 = s; 4 = w

for(let i = 0; i < moves.length; i++) {
    const move = moves[i];
    const lr = move.split("")[0];
    const stepsArr = move.split("").slice(1);
    const steps = parseInt(stepsArr.join(""));

    handleDirection(lr);
    handleSteps(steps);

    //console.log(lr, steps, location);
}
result = location.x + location.y;

console.log(result);
console.timeEnd();