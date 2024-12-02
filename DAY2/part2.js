const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8");
const lines = data.trim().split("\n");
let res = 0

const isSafe = (levels) => {
    let up = null;
    for(let i = 0; i < levels.length; i++) {
        const diff = levels[i] - (levels[i + 1]);
        if(Math.abs(diff) < 1 || Math.abs(diff) > 3) return false;

        if (up === null) {
            up = diff < 0;
        } else if(up && (diff) > 0 || !up && (diff) < 0) {
            return false;
        }
    }

    return true;
}

const isSafeWithRemovedItem = (levels) => {
    for(let i = 0; i < levels.length; i++) { 
        const cloneArr = levels.slice(0, i).concat(levels.slice(i + 1));
        if(isSafe(cloneArr)) return true
    }
}

for (const line of lines) {
    const levels = line.split(" ").map(Number);

    if (isSafe(levels) || isSafeWithRemovedItem(levels)) {
        res++;
    }
}

console.log(res);