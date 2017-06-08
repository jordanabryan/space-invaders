function Background(ctx, x, y, w, h, color){
	this.ctx = ctx;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.color = color;

	Sprite.call(this, this.ctx, this.x, this.y, this.width, this.height);

};

Background.prototype = Object.create(Sprite.prototype);

Background.prototype.constructor = Background;

Background.prototype.create = function(){
	Sprite.prototype.create.call(this, this.color);
};

Background.prototype.render = function(){
	this.create();
};