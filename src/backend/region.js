var Utils = require('./utils');
var utils = new Utils();

var Region = function(a, b) {
    "use strict";
    var self = this;
    self.a = 0;
    self.b = 0;

    if (arguments.length === 1) {
        self.a = a;
    } else if (arguments.length === 2) {
        self.a = a;
        self.b = b;
    }

    self.begin = function() {
        return self.a;
    };

    self.end = function() {
        return self.b;
    };
};

module.exports = Region;