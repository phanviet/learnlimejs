var Utils = require('./utils');
var utils = new Utils();

var Buffer = function() {
    "use strict";
    var self = this;
    self.data = "";
    self.callbacks = [];

    self.size = function() {
        return self.data.length;
    };

    self.subStr = function(region) {
        var length = self.data.length;
        var from = utils.clamp(region.begin(), 0, length);
        var to = utils.clamp(region.end(), 0, length);
        return self.data.substring(from, to);
    };

    self.notify = function(position, delta) {
        self.callbacks.forEach(function(callback) {
            callback.apply(this, [position, delta]);
        });
    };

    self.insert = function(position, value) {
        self.data = self.data.substring(0, position) + value
                + self.data.substring(position, self.data.length);
        self.notify(position, value.length);
    };

    self.erase = function(position, length) {
        self.data = self.data.substring(0, position)
                + self.data.substring(position + length, self.data.length);
        self.notify(position, -length);
    };
};

module.exports = Buffer;