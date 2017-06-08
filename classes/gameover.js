function GameOver(ctx, x, y, width, height, color){
	this.ctx = ctx;
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.color = color;
	this.game;

}

GameOver.prototype.addListener = function(evt){

	if(evt.keyCode == 80 || evt.keyCode == 32 && this.game.startGame == false){
		game.startGame = true;
		window.removeEventListener('keydown', this.addListener);
		this.game.init();
	}

};

GameOver.prototype.render = function(game){

	_self = this,
	this.game = game;
	
	this.game.startGame = false;
	
	startScreenBg = new Background(this.ctx, 0, 0, this.width, this.height, this.color);
	startScreenBg.render();

	gameoverText = new Text(this.ctx, this.game.width / 2, (this.game.height / 2), '#fff', '15px Calibri', 'center');
	gameoverText.setText('GAME OVER');
	gameoverText.render();
	
	window.addEventListener('keydown', this.addListener.bind(this));

};