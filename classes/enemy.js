function Enemy(ctx, x, y, w, h, c, r, f){
	this.ctx = ctx;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.srcx = 20;
	this.srcy = 0;
	this.srcwidth = 20;
	this.srcheight = 20;
	this.color = c;
	this.rank = r;
	this.file = f;

	this.srcx = (this.srcx * this.rank);

	Sprite.call(this, this.ctx, this.x, this.y, this.width, this.height);
	
}

Enemy.prototype = Object.create(Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.move = function(){};

Enemy.prototype.collisions = function(){};

Enemy.prototype.getFile = function(){
	return this.file;
};

Enemy.prototype.getRank = function(){
	return this.rank;
};

Enemy.prototype.setSrcX = function(x){
	this.srcx = x;
};

Enemy.prototype.collisioncheck = function(){

	if (
		player.x < (this.x + this.width) && 
		(player.x + player.width) > this.x &&
		player.y < (this.y + this.height) && 
		(player.y + player.height) > this.y
	){
		console.log('player hit, game over!');
		playerExplosion.play();
	}	
}

Enemy.prototype.create = function(){
	// Sprite.prototype.create.call(this, this.color);
	Sprite.prototype.createSpriteImage.call(this, this.srcx, this.srcy, this.srcwidth, this.srcheight);
};

Enemy.prototype.render = function(){
	this.create();
	this.collisioncheck();
};
