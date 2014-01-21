var Utils = require('./utils');
var utils = new Utils();

var Buffer = function() {
    "use strict";
    var self = this;
    self.data = "";

    self.size = function() {
        return self.data.length;
    };

    self.subStr = function(region) {
        var length = self.data.length;
        var from = utils.clamp(region.begin(), 0, length);
        var to = utils.clamp(region.end(), 0, length);
        return self.data.substring(from, to);
    }
};

module.exports = Buffer;