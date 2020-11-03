
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groundSprite;
var plinko = [];
var particle;
var score = 0;
var particles=[];
var count = 0;
var gameState = "play"



function setup() {
	createCanvas(480,800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(240,750,480,20);

	ground2 = new Ground(60,650,10,200);

	ground3 = new Ground(140,650,10,200);

	ground4 = new Ground(220,650,10,200);

	ground5 = new Ground(300,650,10,200);

	ground6 = new Ground(380,650,10,200);

	
	for(var j = 40; j<=width; j=j+50){
		plinko.push(new Plinko(j,75))
	}

	for(var j = 15; j<=width; j=j+50){
		plinko.push(new Plinko(j,175))
	}

	for(var j = 40; j<=width; j=j+50){
		plinko.push(new Plinko(j,275))
	}

	for(var j = 15; j<=width; j=j+50){
		plinko.push(new Plinko(j,375))
	}

	for(var j = 40; j<=width; j=j+50){
		plinko.push(new Plinko(j,475))
	}

	

	
	Engine.run(engine);

}


function draw() {
 // rectMode(CENTER);
  background("black");
  //ellipseMode(RADIUS)

  ground.display();

  ground2.display();

  ground3.display();

  ground4.display();

  ground5.display();

  ground6.display();

  if (count === 5){
	  gameState = "end";
  }

  if (gameState === "end"){
	  textSize(30);
	  text("GameOver",200,350);
  }

 
  

  

  for (var i = 0; i < plinko.length; i++){
	  plinko[i].display();
  }



  if (particle!=null){
	  particle.display();

	  if (particle.body.position.y>760){
          if (particle.body.position.x<300){
			  score = score+100;
			  particle = null;
			  
		  }
		 
		  }


	  }
	  

	  if (particle!=null){
		particle.display();
  
		if (particle.body.position.y>760){
			if (particle.body.position.x<500){
				score = score+500;
				particle = null;
				
			}
		   
			}
  
  
		}

		if (particle!=null){
			particle.display();
	  
			if (particle.body.position.y>760){
				if (particle.body.position.x<400){
					score = score+50;
					particle = null;
					
				}
			   
				}
	  
	  
			}

			if (particle!=null){
				particle.display();
		  
				if (particle.body.position.y>760){
					if (particle.body.position.x>70&&particle.body.position.x<150){
						score = score+50;
						particle = null;
						
					}
				   
					}
		  
		  
				}

				if (particle!=null){
					particle.display();
			  
					if (particle.body.position.y>760){
						if (particle.body.position.x>150&&particle.body.position.x<230){
							score = score+500;
							particle = null;
							
						}
					   
						}
			  
			  
					}

					if (particle!=null){
						particle.display();
				  
						if (particle.body.position.y>760){
							if (particle.body.position.x>230&&particle.body.position.x<310){
								score = score+100;
								particle = null;
								
							}
						   
							}
				  
				  
						}

						if (particle!=null){
							particle.display();
					  
							if (particle.body.position.y>760){
								if (particle.body.position.x>310&&particle.body.position.x<390){
									score = score+200;
									particle = null;
									
								}
							   
								}
					  
					  
							}
					  
				  
			  
		  
	  
		
		
  
	
	
  

 textSize(35);
 fill("blue");
 text("score "+score,200,50);
 text("500",400,600);
 text("100",230,600);
 text("200",310,600);
 text("500",150,600);
 text("50",80,600);
 text("100",1,600);
 

  
  drawSprites();



  
	
	
 
 
}


function keyPressed(){
	if (gameState === "play"){
	if (keyCode===32){

		count++
	particle=new Particle(mouseX,10,10,10);
}
}
}