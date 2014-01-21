var Utils = function() {
    "use strict";
    var self = this;

    self.min = function(a, b) {
        if (a < b) {
            return a;
        }

        return b;
    };

    self.max = function(a, b) {
        if (a > b) {
            return a;
        }

        return b;
    };

    self.clamp = function(a, b, c) {
        var self = this;
        return self.max(a, self.min(b, c));
    };
};

module.exports = Utils;