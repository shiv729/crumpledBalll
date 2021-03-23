//SHIVANi
const Constraint= Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paperBall;
var box;
var box1;
var box2;
var dustbin
var sling1;
function preload()
{
	dustbin= loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground= new Ground(width/2,height-10,width,20);
	Engine.run(engine);

	paperBall= new Paper(50,680,30);
	box= new Box(600,680,100,10);
	box1= new Box(550,650,10,50);
	box2= new Box(650,650,10,50);

	sling1= new launcher(paperBall.body, {x:100,y:450});
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  paperBall.display();
  box.display();
  box1.display();
  box2.display();
  sling1.display();
  imageMode(CENTER);
image(dustbin,600,600,130,175);

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(
			paperBall.body,
		    paperBall.body.position,
			{x:32.5,y:-32.5}
		)
		
	}
}
function mouseDragged(){
    Matter.Body.setPosition(paperBall.body, {x:mouseX,y:mouseY});
    //to set the position of the bird for temporary use

}
function mouseReleased(){
    sling1.fly(); // <<from slingshot.js; calling the function
    // calling the object not class
}

