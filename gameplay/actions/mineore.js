MineOreAction = function() {
    Action.call(this, "MineOre", 4);

    this._mineCounter = 0;

    this._position = positions.ore;

    this.addPrecondition("HasTool", true);
    this.addPrecondition("HasOre", false);
    this.addEffect("HasOre", true);
};

MineOreAction.prototype = Object.create(Action.prototype);

MineOreAction.prototype.execute = function() {
    this._mineCounter++;

    if(this._mineCounter >= 4) {
        console.log("Tool broke while mining :(");
        this.agent.setState("HasTool", false);
        this._mineCounter = 0;
    }
}
