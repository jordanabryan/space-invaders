function Sprite(ctx, x, y, w, h){
	this.ctx = ctx;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
};

Sprite.prototype = {
	create: function(color) {
		this.color = color;
		this.ctx.fillStyle = this.color;
		this.ctx.beginPath();
		this.ctx.rect(this.x, this.y, this.width, this.height);	
		this.ctx.closePath();
		this.ctx.fill();
	},
	
	createSpriteImage: function(srcx, srcy, srcwidth, srcheight){
		this.src = 'assets/sprite-sheet.png';
		this.srcx = srcx;
		this.srcy = srcy;
		this.srcwidth = srcwidth;
		this.srcheight = srcheight;
		
		this.img = new Image();
		this.img.src = this.src;
		this.ctx.drawImage(this.img,this.srcx,this.srcy,this.srcwidth,this.srcheight,this.x,this.y,this.width,this.height);
	},	
	
	createText: function(style, color, align, content){
		this.style = style || "15px Calibri";
		this.color = color || "#fff";
		this.align = align || 'center';
		this.content = content;
		
		this.ctx.font = this.style;
		this.ctx.fillStyle = this.color;
		this.ctx.textAlign = this.align;
		this.ctx.fillText(this.content, this.x, this.y);
	}

};