GetOreAction = function() {
    Action.call(this, "GetOre", 1);

    this._position = positions.material_depot;

    this.addEffect("HasOre", true);
}

GetOreAction.prototype = Object.create(Action.prototype);

GetOreAction.prototype.canExecute = function() {
    return MaterialStorage.Ore > 0;
}

GetOreAction.prototype.execute = function() {
    MaterialStorage.Ore--;
}
