var math = require('./math');
var colors = require('colors');

var cmd = process.argv[2];
var a = Number(process.argv[3]);
var b = Number(process.argv[4]);
var log = process.argv[5];
var result = '';



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