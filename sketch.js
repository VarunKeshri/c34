const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var box1, box2, box3, box4, box5, box6, box7, box8, box9,
box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20
var ball1, rope1, engine, world, ground1

function setup() {
  createCanvas(3000,800);
 engine=Engine.create();
 world=engine.world
 box1=new box(900,100,70,70)
 box2=new box(900,100,70,70)
 box3=new box(900,100,70,70)
 box4=new box(900,100,70,70)
 box5=new box(900,100,70,70)
 box6=new box(900,100,70,70)
 box7=new box(800,100,70,70)
 box8=new box(800,100,70,70)
 box9=new box(800,100,70,70)
 box10=new box(800,100,70,70)
 box11=new box(800,100,70,70)
 box12=new box(800,100,70,70)
 box13=new box(700,100,70,70)
 box14=new box(700,100,70,70)
 box15=new box(700,100,70,70)
 box16=new box(700,100,70,70)
 box17=new box(700,100,70,70)
 box18=new box(700,100,70,70)
 box19=new box(700,100,70,70)
 box20=new box(700,100,70,70)
ball1=new ball(20,200,80,80)
ground1=new ground(600,600,1200,20)
rope1=new rope(ball1.body,{x:500,y:50})

}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
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
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  ball1.display()
  rope1.display()
  ground1.display()

}