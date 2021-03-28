const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World
const Constraint = Matter.Constraint
var box1
var box2
var box3
var box4
var box5
var box6
var box7
var box8
var box9
var box10
var box11
var box12
var box13
var box14
var box15

var world,engine
var join
var p1

function setup() {
  engine = Engine.create()
  world = engine.world
  createCanvas(1920,1080);
  box1 = new Box(300,450,30,30)
  box2 = new Box(1240,525,30,30)
  box3 = new Box(1260,525,30,30)
  box4 = new Box(1280,525,30,30)
  box5 = new Box(1300,525,30,30)
  box6 = new Box(1320,525,30,30)
  box7 = new Box(1340,525,30,30)
  box8 = new Box(1360,525,30,30)
  box9 = new Box(1380,525,30,30)
  box10 = new Box(1240,500,30,30)
  box11 = new Box(1260,500,30,30)
  box12 = new Box(1280,500,30,30)
  box13 = new Box(1300,500,30,30)
  box14 = new Box(1320,500,30,30)
  box15 = new Box(1340,500,30,30)

  join = new Slingshot(box1.body,{x:300,y:400})
  p1 = new Platform(750,550,1750,20)
}

function draw() {
  background(255,255,255);
  Engine.update(engine)  
  drawSprites();
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  join.display()
  p1.display()
}

function mouseDragged(){
Matter.Body.setPosition(box1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  join.fly()
}