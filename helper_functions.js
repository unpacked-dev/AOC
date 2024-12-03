export const import_puzzle_input =  (path = "./puzzle.txt") => {
    const decoder = new TextDecoder("utf-8");
    const data = Deno.readFileSync(path);
    return decoder.decode(data);
}