
/*
 * Very basic calculator with some unit tests
 */
module.exports = {
    /**
     * Adds two operators
     * @param a
     * @param b
     * @returns {number}
     */
    sum: function (a, b) {
        return parseFloat(a) + parseFloat(b);
    },
    /**
     * Multiples two operators
     * @param a
     * @param b
     * @returns {number}
     */
    multiple: function (a, b) {
        return a * b;
    },
    /**
     * Subtract two operators
     * @param a
     * @param b
     * @returns {number}
     */
    subtract: function (a, b) {
        return a - b;
    },

    /**
     * Divides two operators
     * @param a
     * @param b
     * @returns {number}
     */
    division: function (a, b) {
        return a / b;
    }
};