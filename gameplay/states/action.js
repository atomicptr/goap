var ActionState = function(entity) {
    this._entity = entity;
    this._waiting = false;
    this._last_action = null;
    this._timeout_set = false;
};

ActionState.prototype.enter = function() {
    console.log(this._entity.name + " enters Action state");
};

ActionState.prototype.leave = function() {
    console.log(this._entity.name + " leaves Action state");
};

ActionState.prototype.update = function() {
    var action = this._waiting ? null : this._entity._current_plan.shift();

    if(action || this._last_action) {
        this._waiting = true;
        this._last_action = action ? action : this._last_action;

        action = this._last_action;

        if(action.canExecute()) {
            var cost = action.cost;
            var that = this;

            if(!this._timeout_set) {
                this._timeout_set = true;
                // wait, apply and move to the next one (if there is one)
                setTimeout(function() {
                    action.execute(); // execute action, might break tools or something like this
                    that._entity.applyAction(action);

                    that._waiting = false;
                    that._last_action = null;
                    that._timeout_set = false;

                    if(that._entity._current_plan.length > 0) {
                        that._entity.sm.enter("moving");
                    } else {
                        that._entity.sm.enter("idle");
                    }
                }, 500 * cost); // 1 cost = 0.5s
            }
        }
    }
};
