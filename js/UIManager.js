function UIManager () {
	this.buttons = $('.button');
	this.replay = $('.uictrl')[0];
	this.replays = 0;
	this.replay_limit = 3;
	this.touch = false;
	this.instrument;
	this.notes;

	if(Synth instanceof AudioSynth){
		var testInstance = new AudioSynth;
		testInstance instanceof AudioSynth; // true

		testInstance === Synth; // true
		this.instrument = Synth.createInstrument('edm');
		var hold = this;
		this.notes = [
			function () {hold.playC();},
			function () {hold.playE();},
			function () {hold.playG();},
			function () {hold.playB();}
		];
	} else {// true 
		console.log('test 1 fail');
	}
}

UIManager.prototype.playC = function () {
	this.instrument.play('C', 4, 0.25);
};

UIManager.prototype.playE = function () {
	this.instrument.play('E', 4, 0.25);
};

UIManager.prototype.playG = function () {
	this.instrument.play('G', 4, 0.25);
};

UIManager.prototype.playB = function () {
	this.instrument.play('B', 4, 0.25);
};

UIManager.prototype.showGame = function (x) {
	var tempManager = this;
	var i = 0;
	var loop = setInterval(function () {
		tempManager.increment(i, x);
		i++;
		if(i >= x.length){
			tempManager.setReady();
			clearInterval(loop);
		}
	}, 350);
};

UIManager.prototype.increment = function (i, x) {
	this.highlightButton(this.buttons[x[i]]);
};

UIManager.prototype.highlightButton = function (x) {
	$(x).toggleClass('fade');
	this.notes[$('.button').index(x)]();
	setTimeout(function() {
		$(x).toggleClass('fade');
	}, 150);
};

UIManager.prototype.gameReady = function () {
	return this.touch;
};

UIManager.prototype.setReady = function () {
	this.touch = true;
};