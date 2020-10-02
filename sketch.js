
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4,
bobObject5,ground,rope1,rope2,roof,rope3,rope4,rope5;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	  bobObject1=new Bob(300,500)
	  bobObject2=new Bob(340,500)
	  bobObject3=new Bob(380,500)
	  bobObject4=new Bob(420,500)
	  bobObject5=new Bob(460,500)

	roof=new Roof(380,200,10,30)


	 rope1=new Rope(bobObject1.body,{x:300,y:200})
	 rope2=new Rope(bobObject2.body,{x:340,y:200})
	 rope3=new Rope(bobObject3.body,{x:380,y:200}) 
	 rope4=new Rope(bobObject4.body,{x:420,y:200})
	 rope5=new Rope(bobObject5.body,{x:460,y:200})
	 
	 
 
   
}


function draw() {
  rectMode(CENTER);
  background(201,82,17);
  Engine.update(engine);
 
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  text(mouseX+ ":" +mouseY,10,15);
}


function mouseDragged(){

Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY})

}





