const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8");

const regexMul = /mul\(\d{1,3},\d{1,3}\)/g;
const regexDo = /do\(\)/g;
const regexDont = /don't\(\)/g;

let isEnabled = true;
let result = 0;

const instructions = data.match(/mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g);

for (const instruction of instructions) {
    if (instruction === 'do()') {
      isEnabled = true;
    } else if (instruction === "don't()") {
      isEnabled = false;
    } else if (/mul\(\d{1,3}\,\d{1,3}\)/.test(instruction) && isEnabled) {
      const [x, y] = instruction.match(/\d+/g).map(Number);
      result += x * y;
    }
  }

console.log("Résultat total :", result);