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
    },

    insertTest: function(test) {
        buffer.data = "hello";
        buffer.insert(0, "e");
        test.equals(buffer.data, "ehello");
        buffer.data = "hello";
        buffer.insert(-1, "a");
        test.equals(buffer.data, "ahello");
        buffer.data = "hello";
        buffer.insert(5, "c");
        test.equals(buffer.data, "helloc");
        buffer.data = "hello";
        buffer.insert(6, "d");
        test.equals(buffer.data, "hellod");
        test.done();
    },

    eraseTest: function(test) {
        buffer.data = "hello world";
        buffer.erase(0, 0);
        test.equals(buffer.data, "hello world");

        buffer.data = "hello world";
        buffer.erase(1, 0);
        test.equals(buffer.data, "hello world");

        buffer.data = "hello world";
        buffer.erase(1, -2);
        test.equals(buffer.data, "hello world");

        buffer.data = "hello world";
        buffer.erase(-2, 2);
        test.equals(buffer.data, "llo world");

        buffer.data = "hello world";
        buffer.erase(0, 5);
        test.equals(buffer.data, " world");
        buffer.data = "hello world";
        buffer.erase(-1, 1);
        test.equals(buffer.data, "ello world");
        buffer.data = "hello world";
        buffer.erase(0, 11);
        test.equals(buffer.data, "");
        buffer.data = "hello world";
        buffer.erase(0, 12);
        test.equals(buffer.data, "");
        test.done();
    },
};