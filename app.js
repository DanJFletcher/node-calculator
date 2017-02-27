const math = require('./math');
const colors = require('colors');

const cmd = process.argv[2];
const a = Number(process.argv[3]);
const b = Number(process.argv[4]);
const log = process.argv[5];
let result = '';



if (cmd === '-m' || cmd === 'mult') {
    result = math.mult(a, b);
} 

else if (cmd === '-d' || cmd === 'div') {
    result = math.div(a, b);
}

else if (cmd === '-a' || cmd === 'add') {
    result = math.add(a, b);
}

else if (cmd === '-s' || cmd === 'sub') {
    result = math.sub(a, b);
}

if (log === '--log') {
    console.log(a + ' ' + cmd + ' ' + b + ' = ' + result.toString().green);
} else {
    console.log(result);
}

return result;