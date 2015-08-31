var GameState = function(game) {
};

GameState.prototype.preload = function() {
    this.game.load.image("miner", "assets/miner.png");
    this.game.load.image("blacksmith", "assets/blacksmith.png");

    this.game.load.image("grass", "assets/grass5.png");
    this.game.load.image("ore", "assets/ore2.png");
    this.game.load.image("tool_deposit", "assets/tool_deposit.png");
    this.game.load.image("material_depot", "assets/material_depot.png");
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

    this.miner = new Miner(this.game, positions.miner_spawn);
};

GameState.prototype.update = function() {
    this.miner.update();
};
