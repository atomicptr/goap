var Agent = function() {
    this.actions = [];
    this.currentActions = [];

    this.state = {};

    this.sm = new StateMachine();

    this.sm.add("idle", new IdleState());
    this.sm.add("moving", new MovingState());
    this.sm.add("action", new ActionState());

    this.sm.enter("idle");
};

Agent.prototype.update = function() {
    this.sm.update();
};

Agent.prototype.addAction = function(action) {
    action.agent = this;

    this.actions.push(action);
};

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
