function SoundEfx(resource){
	this.resource = resource
	this.audio = new Audio(this.resource);
}

SoundEfx.prototype.play = function() {
	this.audio.play();
};