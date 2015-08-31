DeliverToolAction = function() {
    Action.call(this, "DeliverTool", 1);

    this._position = positions.tool_deposit;

    this.addPrecondition("HasTool", true);
    this.addEffect("HasTool", false);
}

DeliverToolAction.prototype = Object.create(Action.prototype);

DeliverToolAction.prototype.execute = function() {
    ToolsDeposit.PickAxe++
}
