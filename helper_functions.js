export const import_puzzle_input =  (path = "./puzzle.txt") => {
    const decoder = new TextDecoder("utf-8");
    const data = Deno.readFileSync(path);
    return decoder.decode(data);
}

export const transform_to_grid = (PUZZLE_INPUT) => {
    const grid = [];
    const rows = PUZZLE_INPUT.split("\n");
    for(let row of rows) {
        const cols = row.toString().replaceAll("\r", "").split("");
        grid.push(cols);
    }
    return grid;
}