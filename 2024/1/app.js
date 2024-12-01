import {PUZZLEINPUT} from "./input.js";

// PART 1:
function run_part_1() {
    console.time();

    let result = 0;
    const lines = PUZZLEINPUT.split("\n");

    let leftlist = [];
    let rightlist = [];

//Prepare Lists
    for(let line of lines){
        if(!line) continue;

        const seperated = line.split("   ");
        leftlist.push(seperated[0]);
        rightlist.push(seperated[1]);
    }

//Parse and sort list
    leftlist = leftlist.map(Number).sort();
    rightlist = rightlist.map(Number).sort();

//Compare List Entries
    for(let i = 0; i < leftlist.length; i++){
        result += leftlist[i] > rightlist[i] ? leftlist[i] - rightlist[i] : rightlist[i] - leftlist[i];
    }

    console.log("PART 1:", result);
    console.timeEnd();
}
run_part_1();


//PART 2:
function run_part_2() {
    console.time();

    let result = 0;
    const lines = PUZZLEINPUT.split("\n");

    let leftlist = [];
    let rightlist = [];

    //Prepare Lists
    for(let line of lines){
        if(!line) continue;

        const seperated = line.split("   ");
        leftlist.push(seperated[0]);
        rightlist.push(seperated[1]);
    }

    //Parse and sort list
    leftlist = leftlist.map(Number).sort();
    rightlist = rightlist.map(Number).sort();

    for(let left of leftlist){
        let occurrences = 0;
        for(let right of rightlist){
            if(left === right){
                occurrences += 1;
            }
        }
        result += left * occurrences;
    }

    console.log("PART 2:", result);
    console.timeEnd();
}
run_part_2();