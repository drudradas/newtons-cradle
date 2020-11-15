
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1,bob1,bob2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new roof(400,100,800,20);
	bob1 = new bob(320,500,40);
	bob2 = new bob(360,500,40);
	bob3 = new bob(400,500,40);
	bob4 = new bob(440,500,40);
	rope1 = new rope(bob1.body,roof1.body,-150,0)
	rope2 = new rope(bob2.body,roof1.body,-75,0)
	rope3 = new rope(bob3.body,roof1.body,0,0)

	rope4 = new rope(bob4.body,roof1.body,75,0)


	console.log(rope1)
	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  roof1.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}



