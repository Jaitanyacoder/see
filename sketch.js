const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var wall1, wall2, wall3, wall4;
var ball
var btn1, btn2
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  wall1 = new Ground(200,5,400,10)
  wall2 = new Ground(5,200,10,400)
  wall3 = new Ground(200,395,400,10)
  wall4 = new Ground(395,200,10,400)
  var options_ball = {

    restitution : 0.95

  }

  ball = Bodies.circle (200,200,20,options_ball)
  World.add(world, ball)


  btn1 = createImg("right.png")
  btn1.position(220,30)
  btn1.size(50,50)
  btn1.mouseClicked(hForce)

  btn2 = createImg("up.png")
  btn2.position(20,30)
  btn2.size(50,50)
  btn2.mouseClicked(vForce)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()
  ellipse (ball.position.x,ball.position.y,20)

}

function hForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0})
}


function vForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0,y:-0.05})
}