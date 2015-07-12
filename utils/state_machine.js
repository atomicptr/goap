// Every object that offers the following methods can be used as a State:
// enter, leave, update

var StateMachine = function() {
    this.states = {};
    this.current = null;
};

StateMachine.prototype.addState = function(name, state) {
    this.states[name] = state;
}

StateMachine.prototype.enterState = function(name) {
    if(this.current) {
        this.current.leave();
    }

    this.current = this.states[name];
    this.current.enter();
}

StateMachine.prototype.update = function() {
    this.current.update();
}
