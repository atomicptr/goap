var Action = function() {
    this.preconditions = {};
    this.effects = {};
    this.cost = 0;
};

Action.prototype.isDone = function() {
    return false;
};

Action.prototype.addEffect = function(name, effect) {
    this.effects[name] = effect;
};

Action.prototype.removeEffect = function(name) {
    delete this.effects[name];
};

Action.prototype.addPrecondition = function(name, precondition) {
    this.preconditions[name] = precondition;
};

Action.prototype.removePrecondition = function(name) {
    delete this.preconditions[name];
};
