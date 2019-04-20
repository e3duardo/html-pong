class Player {
	constructor(game, n) {
		this.n = n;
		this.playerTag = document.querySelector('.Player'+n);
		this.game = game;
		this.lastMove = 0;
		this.score = 0;

	}

	tickScore = ()=>{
		this.score++;
		document.querySelector('.ScorePlayer'+this.n).innerHTML=this.score;
	}

	update = ()=>{
	}

	moveUp = ()=>{
		this.lastMove = 1;
		this.playerTag.style.top = this.playerTag.offsetTop-(this.game.scaleY*2)+'px';

		if(this.playerTag.offsetTop < 0){
			this.playerTag.style.top = 0;
		}
	}
	moveDown = ()=>{
		this.lastMove = -1;
		this.playerTag.style.top = this.playerTag.offsetTop+(this.game.scaleY*2)+'px';

		if(this.playerTag.offsetTop+this.playerTag.offsetHeight > this.game.height){
			this.playerTag.style.top = this.game.height-this.playerTag.offsetHeight+'px';
		}
	}

	get isGoingUp (){
		return this.lastMove > 0;
	}
	get isGoingDown (){
		return this.lastMove < 0;
	}

	get colideWithY (){
		if(this.game.ball == undefined){
			return false;
		}
		const colideWithTop = this.y - this.game.ball.height <= this.game.ball.y * this.game.scaleY;
		const colideWithBottom = this.y + this.height + this.game.ball.height >= this.game.ball.y * this.game.scaleY;
		return colideWithTop && colideWithBottom;
	}
	get colideWithLeft (){
		if(this.game.ball == undefined){
			return false;
		}
		const colideWithLeft = this.game.ball.x * this.game.scaleX <= this.x + this.width;
		return colideWithLeft;
	}
	get colideWithRight (){
		if(this.game.ball == undefined){
			return false;
		}
		const colideWithRight = (this.game.ball.x * this.game.scaleX) + this.game.ball.width >= this.x ;
		return colideWithRight;
	}

	get x (){
		return this.playerTag.offsetLeft;
	}
	get y (){
		return this.playerTag.offsetTop;
	}
	get width (){
		return this.playerTag.offsetWidth;
	}
	get height (){
		return this.playerTag.offsetHeight;
	}
}

export {Player as default};
