GetToolAction = function() {
    Action.call(this, "GetTool", 1);

    this._position = positions.tool_deposit;

    this.addPrecondition("HasTool", false);
    this.addEffect("HasTool", true);
}

GetToolAction.prototype = Object.create(Action.prototype);

GetToolAction.prototype.canExecute = function() {
    return ToolsDeposit.PickAxe > 0;
}

GetToolAction.prototype.execute = function() {
    ToolsDeposit.PickAxe--;
}
