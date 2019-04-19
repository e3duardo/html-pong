import Ball from './Ball';
import Player from './Player';
// import Score from './Score';

class Game {
	constructor(){
		this.playing;
		this.playingInterval;

		this.stageTag = document.querySelector('.Stage');
		this.sceneTag = document.querySelector('.Scene');

		this.player1 = new Player(this, 1);
		this.player2 = new Player(this, 2);
		this.ball = new Ball(this);
		this.ball.start(-1,-1);

		// this.score = new Score(this);
		// this.food.randominize();

		document.addEventListener("keydown", e => this.movePlayer(e));

		this.playingInterval = setInterval(this.update, 1000/60);
	}

	update = ()=>{
		// this.snake.update();
		this.ball.update();
		// this.ball.move();
		// this.score.update();
	}

	play = (x, y)=>{
	// 	this.playingInterval = setInterval(this.update, 0);
	// 	this.playing = true;
	//
	// 	if(this.snake.autoMove != null || (x!=undefined && y!=undefined)){
	// 		if(x==undefined && y==undefined){
	// 			x=this.snake.autoMove.x;
	// 			y=this.snake.autoMove.y;
	// 		}
	// 		this.snake.move(x, y);
	// 		this.snake.autoMove = null;
	// 	}
	//
	// 	document.getElementById('play').innerHTML = "Pause";
	}

	pause = ()=>{
	// 	clearInterval(this.playingInterval);
	// 	this.playing = false;
	// 	document.getElementById('play').innerHTML = "Play";
	}

	movePlayer = (e)=>{

		switch (e.key) {
			case "ArrowUp":
				this.player1.moveUp();
			break;
			case "ArrowDown":
				this.player1.moveDown();
			break;
		}

	}

	get isPlaying (){
		return this.playing;
	}
	get width (){
		return this.sceneTag.offsetWidth;
	}
	get height (){
		return this.sceneTag.offsetHeight;
	}
	get scaleX (){
		return document.querySelector('.Ball').offsetWidth;
	}
	get scaleY (){
		return document.querySelector('.Ball').offsetHeight;
	}
}

export { Game as default };
