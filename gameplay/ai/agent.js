var Agent = function() {
    this.actions = [];
    this.currentActions = [];

    this.planner = undefined;

    this.sm = new StateMachine();

    this.sm.add("idle", new IdleState());
    this.sm.add("moving", new MovingState());
    this.sm.add("action", new ActionState());

    this.sm.enter("idle");
};

Agent.prototype.update = function() {
    this.sm.update();
};
