
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var Bin,Ground,Paper;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	

	Bin = new dustbin(1200,500);
	Paper = new paper(200,450,33);
	Ground = new ground(width/2,670,width,20);
	
	boundry = new boundry(1300,490,10,50);
	

	var render = Render.create({
		element: document.body,
	  engine: engine,
	  options: { 
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

 Paper.display();
 boundry.display();
   Bin.display();
  Ground.display();
   
   
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(Paper.body,Paper.body.position,{x:80,y:-80});
  
	}
}

