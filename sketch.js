
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	paper = new Paper(100,310,30);
	
	
	var options={
		isStatic: true,
	}

	ground=Bodies.rectangle(width/2,325,width,50,options);
    World.add(world,ground);

    d1=new Dustbin(600,300,250,25);
	d2=new Dustbin(475,250,25,150);
	d3=new Dustbin(725,250,25,150);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();

  d1.display();
  d2.display();
  d3.display();
  
  push();
  fill("brown");
  rectMode(CENTER),
  rect(width/2,325,width,50);
  pop();
  drawSprites();
 
}



function keyPressed(){
	if(keyDown(UP_ARROW)){
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:100 ,y:-200});	
	}
}
