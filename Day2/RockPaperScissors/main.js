const input = require('./input').split('\n');
let points = 0;

const elfChoice = ['A', 'B', 'C'];
const myChoice = ['X', 'Y', 'Z'];

for (let game of input) {

    switch (myChoice.indexOf(game[2]) - elfChoice.indexOf(game[0])) {
        case 1 :
            points += 6;
            break; 
        case 0 : 
            points += 3;
            break;
        case -2 :
            points += 6;
            break; 
    }

    if (game.includes('X')) {
        points += 1;
    } else if (game.includes('Y')) {
        points += 2;
    } else if (game.includes('Z')) {
        points += 3;
    }
}

console.log(points);