'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
const whisper = function (str) {
    return `*${str.toLowerCase()}*`
}

//* Begin of tests
const assert = require('assert');

// End of tests */
assert.strictEqual(typeof whisper, 'function');
assert.deepStrictEqual(whisper('HELLO'), ('*hello*'));
assert.deepStrictEqual(whisper('HElLO'), ('*hello*'));