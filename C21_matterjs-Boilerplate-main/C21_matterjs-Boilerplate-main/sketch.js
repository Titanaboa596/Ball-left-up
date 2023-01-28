const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground;
var left;
var right;
var top1;
var ball;
var b1, b2;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  b1 = createImg('right.png')
  b1.position(220,30)
  b1.size(50,50)
  b1.mouseClicked(hforce)

  b2 = createImg('up.png')
  b2.position(20,30)
  b2.size(50,50)
  b2.mouseClicked(vforce)

  ground = new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top1 = new Ground(200,10,400,20);
  var ballOptions = {
    restitution:0.95
  }
  ball = Bodies.circle(200,100,20,ballOptions)
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  left.show();
  right.show();
  top1.show();
  Engine.update(engine);
}
function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

