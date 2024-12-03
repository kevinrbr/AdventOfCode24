const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8");

const regex = /mul\(\d{1,3},\d{1,3}\)/g;

const matches = data.match(regex);

if (matches) {
    let sum = 0;

    matches.forEach(match => {
        const [x, y] = match.match(/\d+/g).map(Number);
        sum += x * y;
    });

    console.log("Somme des produits :", sum);
} else {
    console.log("Aucune instruction valide trouvée !");
}