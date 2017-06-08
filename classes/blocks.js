function Blocks(ctx){

	this.ctx = ctx;
	this.width = 75;
	this.height = 75;
	this.y = 350;
	this.padding = 200;
	this.blocktotal = 3;
	
	for(var i = 0; i < this.blocktotal; i++) {
		blocks.push(new Block(this.ctx, (this.padding * i) + 50, this.y, this.width, this.height, '#fff'));		
	}
}

Blocks.prototype.render = function(){
	for(var i = 0; i < blocks.length; i++) {
		blocks[i].render();
	}
};


Blocks.prototype.reset = function(){
	
	blocks = [];

	for(var i = 0; i < this.blocktotal; i++) {
		blocks.push(new Block(this.ctx, (this.padding * i) + 50, this.y, this.width, this.height, '#fff'));		
	}

}