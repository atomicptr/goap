Blacksmith = function(game, options) {
    Agent.call(this, "Blacksmith");

    this._game = game;
    this._sprite = this._game.add.sprite(options.x, options.y, "blacksmith");
    this._game.physics.arcade.enable(this._sprite);

    this._current_plan = [];
    this._target = null;

    this.setState("HasOre", false);
    this.setState("HasTool", false);

    this.addAction(new CraftToolAction(this));
    this.addAction(new DeliverToolAction(this));
    this.addAction(new GetOreAction(this));
};

Blacksmith.prototype = Object.create(Agent.prototype);

Blacksmith.prototype.plan = function() {
    var planner = new Planner();

    var plan = planner.plan(this, {
        name: "HasTool",
        value: true
    });

    return plan;
}
