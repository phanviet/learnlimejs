var Utils = require('../../src/backend/utils.js');
var utils = new Utils();
module.exports = {

    setUp: function (callback) {
        callback();
    },
    tearDown: function (callback) {
        // clean up
        callback();
    },
    minTest: function (test) {
        test.equals(utils.min(0, 5), 0);
        test.equals(utils.min(5, 0), 0);
        test.equals(utils.min(-1, 1), -1);
        test.done();
    },

    maxTest: function(test) {
        test.equals(utils.max(0, 5), 5);
        test.equals(utils.max(5, 0), 5);
        test.equals(utils.max(-1, 1), 1);
        test.done();
    },

    clampTest: function(test) {
        test.equals(utils.clamp(0, 1, 2), 1);
        test.equals(utils.clamp(-1, 2, -5), -1);
        test.equals(utils.clamp(0, 8, -2), 0);
        test.done();
    }
};