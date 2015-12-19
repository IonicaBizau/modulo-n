/**
 * moduloN
 * Returns a number that will be unique for a specific `n` and range.
 *
 * @name moduloN
 * @function
 * @param {Number} n The input number.
 * @param {Number} min The minimum number in the range.
 * @param {Number} max The maximum number in the range.
 * @return {Number} A number that will greater or equal to `min` but
 * lower than `max` and will be always the same for the same range and same `n`.
 */
module.exports = function moduloN(n, min, max) {
    return n % (max - min) + min;
};
