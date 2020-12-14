
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraint = Matter.MouseConstraint
const Constraint = Matter.Constraint
const Mouse = Matter.Mouse

var bob1,bob2,bob3,bob4,bob5
var string1,string2,string3,string4,string5

function preload()
{
	
}

function setup() {
	 canvas = createCanvas(windowWidth/ 2, windowHeight/ 1.5);
	engine = Engine.create();
	world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
   mouse : canvasmouse
  }	;
mConstraint = MouseConstraint.create(engine, options);
World.add(world,mConstraint);

  bob1 = new Pendulum(50,400,"blue");
	bob2 = new Pendulum(100,400,"blue");
	bob3 = new Pendulum(150,400,"blue");
	bob4 = new Pendulum(200,400,"blue");
	bob5 = new Pendulum(250,400,"blue");
	string1 = new Sling(bob1.body,{x:40,y:20});
	string2 = new Sling(bob2.body,{x:80,y:20});
	string3 = new Sling(bob3.body,{x:120,y:20});
	string4 = new Sling(bob4.body,{x:160,y:20});
	string5 = new Sling(bob5.body,{x:200,y:20});
  
	Engine.run(engine);
}


function draw() {
  background(0);
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  drawSprites();
 
}
function mouseDragged(){

Matter.Body.setPosition(pendulum.body,{x: mouseX,y: mouseY});

}