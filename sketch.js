const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


function preload() {
    getBackgroundImg();
}
function setup() {
  createCanvas(1200,400);
 engine = Engine.create();
 world = engine.world;

 ground = new ground(600,height,1200,400)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  ground.display();
 
   
  if(frameCount%60===0){
particles.push(new particle(random(width/2-30,width/2+30),10,10))

for (var j = 0; j < particles.length; j++) {
  particles[j].display();
}


  }
  drawSprites();
}