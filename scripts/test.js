const assert = require('assert');
const { calculateTotal } = require('../src/calc');

const items = [{ amount: 10 }, { amount: 20 }, { amount: 5 }];
assert.strictEqual(calculateTotal(items), 35);
console.log('calc tests passed');
