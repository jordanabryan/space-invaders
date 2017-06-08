function Player(ctx, x, y, w, h, color){
	this.ctx = ctx;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.srcx = 120;
	this.srcy = 0;
	this.srcwidth = 26;
	this.srcheight = 16;
	this.movement = 5;
	this.color = color;
	this.score = 0;
	this.lives = 3;

	Sprite.call(this, this.ctx, this.x, this.y, this.width, this.height);

};

Player.prototype = Object.create(Sprite.prototype);

Player.prototype.constructor = Player;

Player.prototype.create = function(){
	// Sprite.prototype.create.call(this, this.color);
	Sprite.prototype.createSpriteImage.call(this, this.srcx, this.srcy, this.srcwidth, this.srcheight);

};

Player.prototype.setSrcX = function(x){
	this.srcx = x;
};

Player.prototype.updateScore = function(score){
	this.score += score;
};

Player.prototype.getScore = function(x){
	return this.score;
};

Player.prototype.resetScore = function(){
	this.score = 0;
};

Player.prototype.getLives = function(){
	return this.lives;
};

Player.prototype.resetLives = function(){
	this.lives = 3;
};

Player.prototype.updateLives = function(){
	this.lives--;
};

Player.prototype.move = function(){
	if((37 in keys && keys[37]) && (this.x -= this.movement > 0)){
		this.x -= this.movement;
		if (this.x <= 0){
			this.x = 0;
		}
	}

	if((39 in keys && keys[39]) && (this.x += this.movement < 500)){
		this.x += this.movement;
		if (this.x >= (game.width - this.width)){
			this.x = (game.width - this.width);
		}
	}
};

Player.prototype.render = function(){
	this.create();
	this.move();
};

Player.prototype.shoot = function(evt){
	if(game.outbullets < game.bullettotal){
		playerShoot.play();
		bullets.push(new Bullet(this.ctx, this.x + ((this.width / 2) - 1), this.y, 2, 20, '#fff'));
		game.outbullets++;
	}
};