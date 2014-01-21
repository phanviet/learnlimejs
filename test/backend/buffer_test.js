var Buffer = require('../../src/backend/buffer.js'),
    Region = require('../../src/backend/region.js');
var buffer = new Buffer();
module.exports = {

    setUp: function (callback) {
        callback();
    },
    tearDown: function (callback) {
        // clean up
        callback();
    },
    
    subStrTest: function(test) {
        buffer.data = "hello";
        test.equals(buffer.subStr(new Region(0, 2)), "he");
        test.equals(buffer.subStr(new Region(-1, 3)), "hel");
        test.equals(buffer.subStr(new Region(0, 5)), "hello");
        test.equals(buffer.subStr(new Region(0, 7)), "hello");
        test.equals(buffer.subStr(new Region(-1, 6)), "hello");
        test.done();
    }
};