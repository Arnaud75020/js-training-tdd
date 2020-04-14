'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
const yell = function (str) {
    return str.toUpperCase()
}

//* Begin of tests
const assert = require('assert');


// End of tests */
assert.strictEqual(typeof yell, 'function');
assert.deepStrictEqual(yell('hello'), ('HELLO'));
