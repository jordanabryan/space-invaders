function Bullet(ctx, x, y, w, h, color){
	this.ctx = ctx;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.movement = 5;
	this.color = '#00FC00';

	Sprite.call(this, this.ctx, this.x, this.y, this.width, this.height);

};

Bullet.prototype = Object.create(Sprite.prototype);

Bullet.prototype.constructor = Bullet;

Bullet.prototype.create = function(){
	Sprite.prototype.create.call(this, this.color);
};

Bullet.prototype.move = function(){
	if (this.y > -30) {
		this.y -= this.movement;
	} else {
		this.toremove = true;
	}

};

Bullet.prototype.remove = function(invader){
	enemies.splice(invader--, 1);
}

Bullet.prototype.collisioncheck = function(){

	if(enemies.length){
		for(var i = 0; i < enemies.length; i++){
			if (
				enemies[i].x < (this.x + this.width) && 
				(enemies[i].x + enemies[i].width) > this.x &&
				enemies[i].y < (this.y + this.height) && 
				(enemies[i].y + enemies[i].height) > this.y
			){
				invaderExplosion.play();
				this.toremove = true;
				enemies[i].setSrcX(100);
				player.updateScore(10);
				enemies.splice(i--, 1);
			}
		}
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
				blocks[i].setHealth(1);
				if(blocks[i].getHealth() < 1){
					blocks.splice(i--, 1);
				}
			}
		}
	}
	
	if (
		mothership.x < (this.x + this.width) && 
		(mothership.x + mothership.width) > this.x &&
		mothership.y < (this.y + this.height) && 
		(mothership.y + mothership.height) > this.y
	){
		invaderExplosion.play();
		this.toremove = true;
		player.updateScore(100);
		mothership.reset();
	}

}

Bullet.prototype.remove = function(){

	if(this.toremove == true){
		var _this = bullets.indexOf(this);
		bullets.splice(_this, 1);
		game.outbullets--;
	}

};

Bullet.prototype.render = function() {
	this.collisioncheck();
	this.move();
	this.create();
	this.remove();
}