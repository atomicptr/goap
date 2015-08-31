var GameState = function(game) {
};

GameState.prototype.preload = function() {
    this.game.load.image("miner", "assets/miner.png");
    this.game.load.image("blacksmith", "assets/blacksmith.png");

    this.game.load.image("grass", "assets/grass5.png");
    this.game.load.image("ore", "assets/ore2.png");
    this.game.load.image("tool_deposit", "assets/tool_deposit2.png");
    this.game.load.image("material_depot", "assets/material_depot2.png");
    this.game.load.image("forge", "assets/forge.png");
};

GameState.prototype.create = function() {
    for(var i = 0; i < 20; i++) {
        for(var j = 0; j < 15; j++) {
            this.game.add.sprite(i * 63, j * 64, "grass");
        }
    }

    this.game.add.sprite(positions.ore.x, positions.ore.y, "ore");
    this.game.add.sprite(positions.tool_deposit.x, positions.tool_deposit.y, "tool_deposit");
    this.game.add.sprite(positions.material_depot.x, positions.material_depot.y, "material_depot");
    this.game.add.sprite(positions.forge.x, positions.forge.y, "forge");

    this.miner = new Miner(this.game, positions.miner_spawn);
    this.blacksmith = new Blacksmith(this.game, positions.blacksmith_spawn);

    this.oreText = game.add.text(5, 5, "Ore: " + MaterialStorage.Ore, {
        font: "14pt Helvetica",
        fill: "white"
    });

    this.pickAxeText = game.add.text(5, 25, "Pick Axes: " + ToolsDeposit.PickAxe, {
        font: "14pt Helvetica",
        fill: "white"
    });
};

GameState.prototype.update = function() {
    this.miner.update();
    this.blacksmith.update();

    this.oreText.setText("Ore: " + MaterialStorage.Ore);
    this.pickAxeText.setText("Pick Axes: " + ToolsDeposit.PickAxe);
};
