var Agent = function(name) {
    this.name = name;
    this.actions = [];
    this.currentActions = [];

    this.state = {};

    this.sm = new StateMachine();

    this.sm.add("idle", new IdleState(this));
    this.sm.add("moving", new MovingState(this));
    this.sm.add("action", new ActionState(this));

    this.sm.enter("idle");
};

Agent.prototype.update = function() {
    this.sm.update();
};

Agent.prototype.addAction = function(action) {
    action.agent = this;

    this.actions.push(action);
};

Agent.prototype.applyAction = function(action) {
    for(var effect in action.effects) {
        this.setState(effect, action.effects[effect]);
    }
}

Agent.prototype.setState = function(name, value) {
    this.state[name] = value;
};

Agent.prototype.is = function(name, value) {
    return this.state[name] == value;
};

Agent.prototype.getUsableActions = function() {
    // get all actions with cleared preconditions
    return this.actions.filter(function(action) {
        return action.canExecute();
    });
};
