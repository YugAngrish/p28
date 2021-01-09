
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var slingshot , rock , tree , boy;
var m1,m2,m3,m4,m5,m6;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   rock = new Rock(200,500)
  // World.add(world,rock)
  //slingshot = new Slingshot(rock.body,{x:200,y:100})

  tree = new Tree(600,400)

  boy = new Kid(100,550)

  m1 = new Mango(500,430)
  m2 = new Mango(500,300)
  m3 = new Mango(530,350)
  m4 = new Mango(600,430)
  m5 = new Mango(650,390)
  m6 = new Mango(700,350)
//World.add(world,slingshot);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  
  background("white");
  
  drawSprites();
   tree.display()
 // slingshot.display()
  rock.display();
  boy.display();
  m1.display();
  m2.display();
m3.display();
m4.display();
m5.display();
m6.display();
}