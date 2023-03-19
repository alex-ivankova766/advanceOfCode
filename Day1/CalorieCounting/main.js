const input = require('./input');

const elfsCalories = input
.split('\n\n')
.map(elem => elem.split('\n')
.reduce((sum, current) => sum + +current, 0));

console.log(Math.max(...elfsCalories));