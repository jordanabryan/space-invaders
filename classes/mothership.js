function Mothership(ctx, x, y, w, h, color){
	this.ctx = ctx;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.srcx = 0;
	this.srcy = 20;
	this.srcwidth = 48;
	this.srcheight = 21;
	this.vx = 0.5;
	this.color = color;
	this.active = true;

	Sprite.call(this, this.ctx, this.x, this.y, this.width, this.height);

};

Mothership.prototype = Object.create(Sprite.prototype);

Mothership.prototype.constructor = Mothership;

Mothership.prototype.create = function(){
	// Sprite.prototype.create.call(this, this.color);
	Sprite.prototype.createSpriteImage.call(this, this.srcx, this.srcy, this.srcwidth, this.srcheight);
};

Mothership.prototype.move = function(){
	if((this.x + this.width) + this.vx > game.width + (this.width * 2)){
		this.reset();
	} else {
		this.x += this.vx;
	}
};

Mothership.prototype.render = function(){
	this.create();
	this.move();
};

Mothership.prototype.reset = function(){
	this.x = -((this.width * (Math.floor(Math.random() * 14) + 1)));
};

Mothership.prototype.shoot = function(evt){
	
	if (
		(this.x + this.width) > player.x && 
		(this.x) < (player.x + this.width) &&
		game.bossBombDropped == false &&
		(game.outbossbombs < game.bossbombstotal) &&
		bossbombs.length < 1
	){
		game.bossBombDropped = true;
		bossbombs.push(new Bomb(this.ctx, this.x + ((this.width / 2) - 1), this.y, 2, 20, '#fff'));
		game.outbossbombs++;
	}

};