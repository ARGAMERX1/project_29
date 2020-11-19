const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,surafce;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var polygon,slingshot;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)
  ground = new Ground(200,190,800,5);
surafce = new Ground(260,100,290,10);

polygon = new Polygon(100,200,20);

slingshot = new SlingShot(polygon.body,{x:250, y:200});






block1 = new Box(370,40,40,30);
block2 = new Box(345,40,40,30);
block3 = new Box(315,40,40,30);
block4 = new Box(290,40,40,30);
block5 = new Box(265,40,40,30);
block6 = new Box(370,60,40,30);
block7 = new Box(370,80,40,30);
block8 = new Box(345,60,40,30);
block9 = new Box(345,80,40,30);
block10 = new Box(315,60,40,30);
block11 = new Box(315,80,40,30);
block12 = new Box(290,60,40,30);
block13 = new Box(290,80,40,30);
block14 = new Box(265,60,40,30);
block15 = new Box(265,80,40,30);
block16 = new Box();
block17 = new Box();
block18 = new Box();
block19 = new Box();
block20 = new Box();
}

function preload(){

}

function draw() {
  background("green");  




  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();

slingshot.display();
polygon.display();
surafce.display();
ground.display();  
drawSprites();
}
function mouseDragged(){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY}); 
}
function mouseReleased(){
    slingshot.fly();
}
