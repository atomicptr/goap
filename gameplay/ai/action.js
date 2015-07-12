var Action = function(name, cost) {
    this.name = name;
    this.agent = undefined;
    this.effects = {};
    this.preconditions = {};

    this.cost = cost;
};

Action.prototype.addEffect = function(name, value) {
    this.effects[name] = value;
};

Action.prototype.addPrecondition = function(name, value) {
    this.preconditions[name] = value;
};

Action.prototype.isDone = function() {
    throw "You need to override this one ;)";
};
