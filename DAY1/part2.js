const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8");
const lines = data.trim().split("\n");

const column1 = [];
const column2 = [];

lines.forEach(line => {
    const [val1, val2] = line.trim().split(/\s+/);
    column1.push(parseInt(val1, 10));
    column2.push(parseInt(val2, 10));
});

let result = 0;

for (let i = 0; i < column1.length; i++) {
    result += column2.filter((n) => column1[i] === n).length * column1[i];
}

console.log(result);