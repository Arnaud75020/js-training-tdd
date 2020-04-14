'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
const cutFirst = function (str) {
    str = str.substring(2)
    return str
}

const cutLast = function (str) {
    str = str.substring(0, str.length - 2)
    return str
}

const cutFirstLast = function (str) {
    let str1 = ''
    str1 = str.substring(2)
    str = str1.substring(0, str1.length - 2)
    return str
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof cutFirst, 'function');
assert.deepStrictEqual(cutFirst('hello'), ('llo'));
assert.deepStrictEqual(cutFirst('dinosaure'), ('nosaure'));


assert.strictEqual(typeof cutLast, 'function');
assert.deepStrictEqual(cutLast('hello'), ('hel'));
assert.deepStrictEqual(cutLast('dinosaure'), ('dinosau'));


assert.strictEqual(typeof cutFirstLast, 'function');
assert.deepStrictEqual(cutFirstLast('bonjour'), ('njo'));
assert.deepStrictEqual(cutFirstLast('dinosaure'), ('nosau'));

