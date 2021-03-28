const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var myengine,myworld;
var ground,rope,ball;
var block1,block2,block3,block4,block5,block6,block7
function setup (){
  createCanvas(1200,800)
  myengine=Engine.create()
  myworld=myengine.world

  ground=new Ground(600,780,1200,20)
  ball=new Ball(400,250,40)
  rope=new Rope(ball.body,{x:400,y:50})
   block1=new Block(650,740,60,60)/block2=new Block(650,680,60,60)
  block3=new Block(650,620,60,60)
  //block4=new Block(650,560,60,60)
  block5=new Block(650,500,60,60)
  //block6=new Block(650,440,60,60)
 // block7=new Block(650,380,60,60)
 
}
function draw(){
  Engine.update(myengine)
  background("skyblue")
  ground.display()
  ball.display()
  rope.display()
   //block1.display()
  //block2.display()
  //block3.display()
  //block4.display()
  block5.display()
  //block6.display()
  //block7.display() 
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}