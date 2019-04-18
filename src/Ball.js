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

		  console.log('ball')

		  this.x -= x;
		  this.y -= x;

		  if(this.y < 0){
			  this.y
		  }
		  this.start(x--, y--)

  }
}

export {Ball as default};
