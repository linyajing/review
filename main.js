// main.js
const a = require('./a').a;

console.log('a', a);

setTimeout(() => {
    console.log(22222);
    const b = require('./a');
    console.log('b', b);
}, 100);