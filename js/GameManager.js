function GameManager () {
	this.game = this.gameSetup();
	this.index = 0; 
	this.position = 0;
	this.check = [];
	this.score = 0;

}

GameManager.prototype.gameSetup = function () {
	var max = this.getDifficulty();
	var hold = [];
	for(var i = 0; i < max; i++){
		hold.push(Math.floor(Math.random() * (4 - 0)));
	};
	return hold;
};

GameManager.prototype.getGamePosition = function () {
	return this.game.slice(0, this.position + 1);
};

GameManager.prototype.addButton = function (buttonIndex) {
	this.check.push(buttonIndex);
	this.index++;
};

GameManager.prototype.checkFullInput = function () {
	if(this.compare(this.getGamePosition(), this.check)){
		return true;
	} else {
		if(this.score <= this.position){
			this.score = this.position;
		}
		return false;
	}
};

GameManager.prototype.compare = function (x, y) {
	for (var i = 0; i <= x.length - 1; i++){
		if(x[i] !== y[i]){
			return false;
		}
	}
	return true;
};

GameManager.prototype.nextPosition = function () {
	this.check = [];
	this.index = 0;
	this.position++;
};

GameManager.prototype.getPosition = function () {
	return this.position;
};

GameManager.prototype.getScore = function () {
	return this.score;
};

GameManager.prototype.getIndex = function () {
	return this.index;
};

GameManager.prototype.getDifficulty	= function () {
	return 25;
	//made it this way so it's easy to increment difficulty later, more features, etc.
};

GameManager.prototype.getGame = function () {
	return this.game;
};