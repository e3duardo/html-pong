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

		this.ball.startRandom();

		document.addEventListener("keydown", e => this.movePlayer(e));

		this.playingInterval = setInterval(this.update, 1000/60);
	}

	update = ()=>{
		this.ball.update();
	}

	movePlayer = (e)=>{

		switch (e.key) {
			case "q":
				this.player1.moveUp();
			break;
			case "a":
				this.player1.moveDown();
			break;
			case "ArrowUp":
				this.player2.moveUp();
			break;
			case "ArrowDown":
				this.player2.moveDown();
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
