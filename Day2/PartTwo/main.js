const input = require('./input').split('\n');

const elfChoice = ['A', 'B', 'C'];
const outcome = ['Y', 'Z', 'X'];

let points = 0;

for (let game of input) {

    let choice = elfChoice[((elfChoice.indexOf(game[0]) + outcome.indexOf(game[2])) % 3)];

    switch (game[2]) {
        case 'Y' : 
            points += 3;
            break;
        case 'Z' :
            points += 6; 
            break;
    }

    if (choice == 'A') {
        points += 1;
    } else if (choice == 'B') {
        points += 2;
    } else if (choice == 'C') {
        points += 3;
    }
}

console.log(points); 