(function(){
	var gameManager;
	var uiManager = new UIManager();

	var resetBoard = function () {
		gameManager = new GameManager();
	};

	var resetRound = function () {
		uiManager.showGame(gameManager.getGame().slice(0, gameManager.getPosition() + 1));
	};

	//on user input (in this), check each button press against UI man, if (wrong button), kill program and start over (no replays or saves for now)
	$('.button').click(function(){
		if(uiManager.gameReady() === true){
			uiManager.highlightButton(this);
			gameManager.addButton($('.button').index(this));

			if(gameManager.getIndex() === gameManager.getPosition() + 1){
				var check = gameManager.checkFullInput();
				if(check){
					console.log('well done! new round!');
					gameManager.nextPosition();
					setTimeout(function(){
						resetRound();
					}, 1000);
				} else {
					alert('SCORE: ' + gameManager.getScore());
				}
			}

		} else {
			return;
		}
	});

	$('.start').click(function(){
		resetBoard();
		uiManager.showGame(gameManager.getGame().slice(0, gameManager.getPosition() + 1));
	});

})();