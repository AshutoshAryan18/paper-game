
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 640, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	//Create the Bodies Here.
	box1 = new Box(800,590);
	box2 = new Box(950,590);
	log1 = new Log(875,650);
	
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  log1.display();

 
  drawSprites();
}

function keypressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:50,y:20})
	}
}


