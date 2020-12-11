const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var chain1;

var gameState;

function setup() {
 var canvas =  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  board = new Box(400,150,150,15);
  bob   = new Circle(450,300,15);
 

  chain1 = new SlingShot(board.body,bob.body);


}

function keyPressed(){
  if (keyCode === 32){
    gameState = "mouse";
  }}

  function keyPressed(){
    if(keyCode === 8){
      gameState = "Free"
    }
  }


function draw() {
  background(100);  
  
  Engine.update(engine);

  board.display();
  bob.display();
  chain1.display();

   if(gameState === "mouse"){
      Matter.Body.setPosition(bob.body,{x:mouseX , y:mouseY})
    };
   if(gameState ==="free"){
      Matter.Body.setPosition(bob.body,{x:400 , y:350})
    };

}

