CraftToolAction = function() {
    Action.call(this, "CraftTool", 4);

    this._position = positions.forge;

    this.addPrecondition("HasTool", false);
    this.addPrecondition("HasOre", true);
    this.addEffect("HasTool", true);
};

CraftToolAction.prototype = Object.create(Action.prototype);
