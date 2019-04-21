class Ball {
	constructor(game) {
		this.ballTag = document.querySelector('.Ball');
		this.game = game;
		this.x = 0;
		this.y = 0;
		this.reset();
	}

	reset = ()=>{
		this.x = Math.floor(this.game.width / this.game.scaleX / 2);
		this.y = Math.floor(this.game.height / this.game.scaleY / 2);
	}

	update = ()=>{
		this.ballTag.style.left = (this.x*this.game.scaleX) +'px';
		this.ballTag.style.top = (this.y*this.game.scaleY) +'px';
	}

	startRandom = ()=>{
		const x = Math.floor(Math.random() * 2)-1;
		const y = Math.floor(Math.random() * 2)-1;

		this.start(x>0?1:-1, y>0?1:-1);
	}

	start = (x, y)=>{
		this.x += x;
		this.y += y;

		const colideSceneTop = this.y <= 0;
		const colideSceneBottom = this.y >= this.game.height/this.game.scaleY - 1;
		const colideSceneLeft = this.x <= 0;
		const colideSceneRight = this.x >= this.game.width/this.game.scaleX - 1;

		const colidePlayer1 = this.game.player1.colideWithY && this.game.player1.colideWithLeft;
		const colidePlayer2 = this.game.player2.colideWithY && this.game.player2.colideWithRight;

		if(colideSceneTop || colideSceneBottom){
			y = -y;
		}
		if(colidePlayer1 || colidePlayer2){
			x = -x;
		}

		if(colideSceneLeft){
			this.game.player2.tickScore();
		}
		if(colideSceneRight){
			this.game.player1.tickScore();
		}
		if(colideSceneLeft || colideSceneRight){
			this.reset();
			this.startRandom();
			return;
		}

		setTimeout(()=>{
			this.start(x, y)
		},1000/3)
	}

	get width (){
		return this.ballTag.offsetWidth;
	}
	get height (){
		return this.ballTag.offsetHeight;
	}
}

export {Ball as default};
