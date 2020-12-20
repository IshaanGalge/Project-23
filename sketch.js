var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,Bottomground,ground2,ground1 ,engine,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	Bottomground=new Box(400,600,200,20)
	ground1=new Box(310,560,20,100)
	ground2=new Box(500,560,20,100)

	packageSprite=createSprite(width/2, 80, 50,50);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 300, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 300 , 5 , {restitution:0,isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(0);
  Bottomground.display()
  ground1.display()
  ground2.display()

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody, false)
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
    
  }
}



