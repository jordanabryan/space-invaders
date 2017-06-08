function Text(ctx, x, y, color, style, align){
	this.ctx = ctx;
	this.x = x;
	this.y = y;
	this.color = color;
	this.style = style;
	this.align = align;
	this.content = '';

	Sprite.call(this, this.ctx, this.x, this.y, '', '');
	
};

Text.prototype = Object.create(Sprite.prototype);

Text.prototype.constructor = Text;

Text.prototype.create = function(){
	Sprite.prototype.createText.call(this, this.style, this.color, this.align, this.content);
};

Text.prototype.setText = function(content){
	this.content = content;
};

Text.prototype.render = function(){
	this.create();	
};