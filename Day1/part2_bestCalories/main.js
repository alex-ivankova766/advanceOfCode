const input = require('./input');

let elfsCalories = input.split('\n\n')
.map(elem => elem.split('\n')
.reduce((sum, current) => sum + +current, 0))
.sort((a,b) =>  b - a);

console.log(elfsCalories[0] + elfsCalories[1] + elfsCalories[2]);

