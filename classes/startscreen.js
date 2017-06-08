function StartScreen(ctx, x, y, width, height, color, game){
	this.ctx = ctx;
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.color = color;

	this.game;
	this.canvas;

}

StartScreen.prototype.addListener = function(evt){

	var game = this.game;
	var canvas = this.canvas;
		
	if(evt.keyCode == 80 || evt.keyCode == 32 && game.startGame == false){
		game.startGame = true;
		window.removeEventListener('click', this.addListener);
		game.init();
	}

};

StartScreen.prototype.render = function(game){

	_self = this,
	this.game = game,
	this.canvas = game.canvas,

	startScreenBg = new Background(this.ctx, 0, 0, this.width, this.height, this.color);
	startScreenBg.render();

	startText = new Text(this.ctx, game.width / 2, (game.height / 2), '#fff', '15px Calibri', 'center');
	startText.setText('SPACE INVADERS');
	startText.render();

	window.addEventListener('keydown', this.addListener.bind(this));

};