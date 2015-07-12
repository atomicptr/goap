var GameState = function(game) {
};

GameState.prototype.preload = function() {
    this.game.load.image("star", "assets/star.png");
};

GameState.prototype.create = function() {
    this.sprite = this.game.add.sprite(0, 0, "star");
};

GameState.prototype.update = function() {
};
