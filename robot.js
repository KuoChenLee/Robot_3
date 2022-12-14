class Robot{
	constructor(args){
		let def={
			p:createVector(width/2,height/2),
			colors:[random(colors),random(colors),
							random(colors),random(colors),
						 	random(colors),random(colors),
							random(colors),random(colors),
							random(colors),random(colors),
						 	random(colors),random(colors),
							random(colors),random(colors),
						 	random(colors),random(colors),],
			//亂數的大小
			size:createVector(
				random(500,200),
				random(200,300)
			),
			//亂數的眼睛
			eyeSize:createVector(
				random(10,50),
				random(50,100)
			),
			borderRadius:random(200),
			scale:random(1),
			randomId:random(100000000)
			
		}
		Object.assign(def,args)
		Object.assign(this,def)
		
	}
	//繪製
	draw(){
		push()
		rectMode(CENTER);
		translate(this.p.x,this.p.y);
		// translate(this.size.x,)
		rotate(sin(frameCount/30+this.randomId)/2)
		scale(0.35)
		
		
		noStroke()
		//Head
		fill(this.colors[0])
		rect(0,0,this.size.x,this.size.y,this.borderRadius)
		fill(this.colors[1]);
		//eyes
		circle(-100,0,60+this.eyeSize.x);
		fill(this.colors[2]);
		circle(100,0,60+this.eyeSize.y);

		// rotate()
		//mouth
		fill(this.colors[3]);
		rect(0,100,200,30);
		//nose
		fill(this.colors[4]);
		rect(0,10,30,40);
		//ears
		fill(this.colors[5]);
		rect(-this.size.x/2,10,50,125);
		fill(this.colors[6]);
		rect(this.size.x/2,10,50,125);



		//眉毛
		push()
			fill(this.colors[7]);
			rotate(0.3+sin(frameCount/30)/5)
			rect(-90,-100,150,30);
		pop()
		push()
			fill(this.colors[8]);
			rotate(-0.25+sin(frameCount/50)/5)
			rect(100,-100,150,30);
		pop()
		
		pop()
	}
	//資料相關的更新
	update(){
	
	}
}