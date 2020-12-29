const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  
  ground= new Ground(400,400,800,20)
  dustbin1= new Dustbin(600,385,150,10)
  dustbin2=new Dustbin(525,340,10,100)
  dustbin3= new Dustbin(675,340,10,100)
  paper= new Paper(100,390,30)

}


function draw() {
  background("black");  
  Engine.update(engine);
  ground.display()
dustbin1.display()
dustbin2.display()
dustbin3.display()
paper.display()
  drawSprites();

}
function keyPressed(){
 if( keyCode === UP_ARROW ){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
 }
}