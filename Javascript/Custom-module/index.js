console.log('This is index.js');
const mod = require('./module1');
console.log(`Average is`, mod.average([3,4,5]));
console.log(`This module was created by`,mod.creator);
