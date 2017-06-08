function Bombs(ctx, x, y, w, h, color){
	this.ctx = ctx;
};

Bombs.prototype.move = function(){};

Bombs.prototype.collisioncheck = function(){
	
	if (
		player.x < (this.x + this.width) && 
		(player.x + player.width) > this.x &&
		player.y < (this.y + this.height) && 
		(player.y + player.height) > this.y
	){
		//player hit
		console.log('player hit');
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
				blocks[i].setHealth();
				if(blocks[i].getHealth() < 1){
					blocks.splice(i--, 1);
				}
			}
		}
	}
	
}

Bombs.prototype.remove = function(){

	if(blocks.length){
		for(var i = 0; i < blocks.length; i++){
			this.toremove = true;
		}
	}

}

Bombs.prototype.remove = function(){

	if(bossbombs.length > (game.outbossbombs - 1) && (game.outbossbombs > 0)){
		for(var i = 0; i < bossbombs.length; i++){
			if(bossbombs[i].toremove == true){
				var _this = bossbombs.indexOf(this);
				bossbombs.splice(bossbombs[i], 1);
				game.outbossbombs--;
				game.bossBombDropped = false;
			}
		}
	}
	
	if(enemybombs.length > (game.outbombs - 1) && (game.outbombs > 0)){
		for(var i = 0; i < enemybombs.length; i++){
			if(enemybombs[i].toremove == true){
				var _this = enemybombs.indexOf(this);
				enemybombs.splice(enemybombs[i], 1);
				game.outbombs--;
			}
		}
	}
	
};

Bombs.prototype.render = function() {
	
	if(bossbombs.length > (game.outbossbombs - 1) && (game.outbossbombs > 0)){
		for(var i = 0; i < bossbombs.length; i++){
			bossbombs[i].render();
		}
	}
		
	if(enemybombs.length > (game.outbombs - 1) && (game.outbombs > 0)){
		for(var i = 0; i < enemybombs.length; i++){
			enemybombs[i].render();
		}
	}
	
	this.remove();
	
};