function Block(ctx, x, y, w, h, c){
	this.ctx = ctx;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.srcx = 68;
	this.srcy = 27;
	this.srcwidth = 75;
	this.srcheight = 55;
	this.color = c;
	this.health = 5;

	Sprite.call(this, this.ctx, this.x, this.y, this.width, this.height);

}

Block.prototype = Object.create(Sprite.prototype);

Block.prototype.constructor = Block;

Block.prototype.create = function(){
	// Sprite.prototype.create.call(this, this.color);
	Sprite.prototype.createSpriteImage.call(this, this.srcx, this.srcy, this.srcwidth, this.srcheight);
};

Block.prototype.getHealth = function(){
	return this.health;
};

Block.prototype.setSrcX = function(x){
	this.srcX = x;
};

Block.prototype.setHealth = function(h){
	this.health -= h;
};

Block.prototype.render = function(){
	this.create();
};