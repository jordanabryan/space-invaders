function Bomb(ctx, x, y, w, h, color){
	this.ctx = ctx;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.vy = 5;
	this.color = color;

	Sprite.call(this, this.ctx, this.x, this.y, this.width, this.height);

};

Bomb.prototype = Object.create(Sprite.prototype);

Bomb.prototype.constructor = Bomb;

Bomb.prototype.create = function(){
	Sprite.prototype.create.call(this, this.color);
};

Bomb.prototype.move = function(){
	if (this.y < 530) {
		this.y += this.vy;
	} else {
		this.toremove = true;
	}

};

Bomb.prototype.collisioncheck = function(){

	if (
		player.x < (this.x + this.width) && 
		(player.x + player.width) > this.x &&
		player.y < (this.y + this.height) && 
		(player.y + player.height) > this.y
	){
		this.toremove = true;
		playerExplosion.play();
		console.log('player hit');
		player.updateLives();
		//player.setSrcX(146);

	}
	
	if(blocks.length){
		for(var i = 0; i < blocks.length; i++){
			if (
				blocks[i].x < (this.x + this.width) && 
				(blocks[i].x + blocks[i].width) > this.x &&
				blocks[i].y < (this.y + this.height) && 
				(blocks[i].y + blocks[i].height) > this.y
			){
				this.toremove = true;
				blocks[i].setHealth(0.5);
				if(blocks[i].getHealth() < 1){
					blocks.splice(i--, 1);
				}
			}
		}
	}
	
}

Bomb.prototype.render = function() {
	this.collisioncheck();
	this.move();
	this.create();
};