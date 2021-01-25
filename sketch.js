const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var gameState, engine, world;
var dustbin,paper;

function setup()
 {
  createCanvas(400, 400);
  rectMode(CENTER);

  gameState = "play";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 390, 100, 10);
  paper = new Paper(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,);
  World.add(world, ground);
}

function draw()
 {
    if (keyCode === UP_ARROW)
     {
      gameState = "play";
    }
  
  if (gameState === "play") 
  {
    background(0);
    rectMode(CENTER);
    dustbin.display();
    paper.display();
  }
}

function keyPressed()
{
  if (gameState === "play") 
  {
    Matter.Body.applyForce(paper.body, paper.body.position, 
      {
      x: 12,
      y: -13
    });
  }
}


