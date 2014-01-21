var Buffer = require('./buffer');

var Action = function() {
    var self = this;

    self.apply = function() {};
    self.undo = function() {};
};

var InsertAction = function(buffer, position, value) {
    var self = this;
    Action.call(self);

    self.buffer = buffer || new Buffer();
    self.position = position || 0;
    self.value = "";
};

InsertAction.prototype = new Action();
InsertAction.prototype.apply = function() {
    self.buffer.insert(self.position, self.value);
};

InsertAction.prototype.undo = function() {
    self.buffer.erase(self.position, self.value.length);
};

var CompositeAction = function(actions) {
    var self = this;
    Action.call(self);

    self.actions = actions || [];
};

CompositeAction.prototype = new Action();
CompositeAction.prototype.apply = function() {
    self.actions.forEach(function(action) {
        action.apply();
    });
};

CompositeAction.prototype.undo = function() {
    length = self.actions.length - 1;
    for (var i = 0; i < self.actions.length; i++) {
        self.actions[length - i].undo();
    }
};

// var EraseAction = function() {
//     var self = this;
//     Action.call(self);

//     self.
// }