function Enemies(ctx, game){

	this.ctx = ctx;
	this.ranks = 5;
    this.files = 10;
	this.width = 20;
	this.height = 20;
	this.padding = 20;	
	this.vx = 0;
	this.vy = 0;
	this.randomWaitTime = ((Math.floor(Math.random() * 5) + 1) * 1000);
	
	this.invaderInitialVelocity = 10;
    this.invaderCurrentVelocity = this.invaderInitialVelocity;
    this.invaderVelocity = {x: -this.invaderInitialVelocity, y:0};
    this.invaderNextVelocity = null;
	this.invaderAcceleration = 0;
	this.invaderCurrentDropDistance =  0;
	this.invaderDropDistance = 20;
	this.invadersAreDropping =  false;
	
	this.level = 0.05;
		
	for(var rank = 0; rank < this.ranks; rank++){
		for(var file = 0; file < this.files; file++) {
			enemies.push(new Enemy(this.ctx, (600 / 2) + ((this.files/2 - file) * 300 / this.files), (rank * 30) + 80, 20, 20, '#fff', rank, file));
        }
    }

}

Enemies.prototype.resetEnemies = function(){
	
	enemies = [];
	
	for(var rank = 0; rank < this.ranks; rank++){
		for(var file = 0; file < this.files; file++) {
			enemies.push(new Enemy(this.ctx, (600 / 2) + ((this.files/2 - file) * 300 / this.files), (rank * 30) + 80, 20, 20, '#fff', rank, file));
        }
    }
};

Enemies.prototype.getLength = function(){
	return enemies.length;
},

Enemies.prototype.render = function(){
	for(var rank = 0; rank < enemies.length; rank++) {
		enemies[rank].create();
    }
};

Enemies.prototype.shoot = function(){
	
	var frontRankInvaders = {};
	
    for(var i = 0; i< enemies.length; i++) {
        var invader = enemies[i];
 		
		if(!frontRankInvaders[invader.getFile()] || frontRankInvaders[invader.getFile()].rank < invader.getRank()) {
            frontRankInvaders[invader.getFile()] = invader;
        }
	}
	
	for(var i = 0; i < this.files; i++) {

		var invader = frontRankInvaders[Math.floor(Math.random() * this.files) + 1];
		if(!invader) continue;
	
		if (
			(invader.x + invader.width) > (player.x - (player.width * 2)) && 
			(invader.x) < (player.x + (invader.width * 3)) &&
			(game.outbombs < game.bombstotal) &&
			enemybombs.length < game.bombstotal
		){
			enemybombs.push(new Bomb(this.ctx, invader.x + ((invader.width / 2) - 1), invader.y, 2, 20, '#fff'));
			game.outbombs++;
		}
	} 
		
};

Enemies.prototype.updateLevel = function(){
	this.level = this.level + 0.01;	
};

Enemies.prototype.resetLevel = function(){
	this.level = 0.05;	
};

 Enemies.prototype.movement = function(game){
 
	var hitLeft = false, 
		hitRight = false,
		hitBottom = false;
		
    for (var i = 0; i < enemies.length; i++) {
		invader = enemies[i];
		
        var newx = invader.x + this.invaderVelocity.x * this.level;
        var newy = invader.y + this.invaderVelocity.y * this.level;
		
        if(hitLeft === false && (newx) < 0) {
            hitLeft = true;
        }
        else if(hitRight === false && ((newx) + invader.width) > game.width) {
            hitRight = true;
        }
        else if(hitBottom === false && ((newy) + invader.height) > game.bottom) {
            hitBottom = true;
        }
 
        if(!hitLeft && !hitRight && !hitBottom) {
			invader.x = newx;
			invader.y = newy;
        }
		
	}
	
	if(this.invadersAreDropping) {
        this.invaderCurrentDropDistance += Math.ceil(this.invaderVelocity.y * 0.05) * 1;
        if(this.invaderCurrentDropDistance >= this.invaderDropDistance) {
			this.invadersAreDropping = false;
            this.invaderVelocity = this.invaderNextVelocity;
            this.invaderCurrentDropDistance = 0;
        }
		
    }
		
	if(hitLeft) {
		this.invaderCurrentVelocity += this.invaderAcceleration;
		this.invaderVelocity = {x: 0, y:this.invaderCurrentVelocity };
		this.invadersAreDropping = true;
		this.invaderNextVelocity = {x: this.invaderCurrentVelocity , y:0};
	}
	
	 if(hitRight) {
		this.invaderCurrentVelocity += this.invaderAcceleration;
		this.invaderVelocity = {x: 0, y:this.invaderCurrentVelocity };
		this.invadersAreDropping = true;
		this.invaderNextVelocity = {x: -this.invaderCurrentVelocity , y:0};
	}
	
};