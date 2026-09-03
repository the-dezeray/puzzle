const assert = require('assert');
const { calculateTotal } = require('../src/calc');
assert.strictEqual(calculateTotal([{amount:1},{amount:2}]), 3);
console.log('ok');
