'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:

//* Begin of tests
const assert = require('assert');

const keepFirst = function (str) {
    str = str.substring(0, 2)
    return str
}

const keepLast = function (str) {
    str = str.substring(str.length - 2, str.length)
    return str
}

const keepFirstLast = function (str) {
    let str1 = ''
    let str2 = ''
    str1 = str.substring(0, 2)
    str2 = str.substring(str.length - 2, str.length)
    return str1 + str2
}
//* Begin of tests

assert.strictEqual(typeof keepFirst, 'function');
assert.deepStrictEqual(keepFirst('hello'), ('he'));
assert.deepStrictEqual(keepFirst('dinosaure'), ('di'));


assert.strictEqual(typeof keepLast, 'function');
assert.deepStrictEqual(keepLast('hello'), ('lo'));
assert.deepStrictEqual(keepLast('dinosaure'), ('re'));


assert.strictEqual(typeof keepFirstLast, 'function');
assert.deepStrictEqual(keepFirstLast('bonjour'), ('bour'));
assert.deepStrictEqual(keepFirstLast('dinosaure'), ('dire'));
