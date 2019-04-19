class Ball {
  constructor(game) {
	  this.ballTag = document.querySelector('.Ball');
	  this.game = game;
	  this.randominize();
	  this.x = Math.floor(this.game.width / this.game.scaleX / 2);
	  this.y = Math.floor(this.game.height / this.game.scaleY / 2);
  }

  randominize = ()=>{
	  this.x = Math.floor((Math.random() * (this.game.width / this.game.scaleX)));
	  this.y = Math.floor((Math.random() * (this.game.height / this.game.scaleY)));
  }

  update = ()=>{
	  this.ballTag.style.left = (this.x*this.game.scaleX) +'px';
	  this.ballTag.style.top = (this.y*this.game.scaleY) +'px';
  }

  start = (x, y)=>{
	  this.x += x;
	  this.y += y;

	  const colideTop = this.y <= 0;
	  const colideBottom = this.y >= this.game.height/this.game.scaleY - 1;
	  const colideLeft = this.x <= 0;
	  const colideRight = this.x >= this.game.width/this.game.scaleX - 1;

	  if(colideTop || colideBottom){
		  y = -y;
	  }
	  if(colideLeft || colideRight){
		  console.warn('game over');
		  x = -x;
	  }

	  setTimeout(()=>{
		  this.start(x, y)
	  },1000/10)

  }
}

export {Ball as default};
