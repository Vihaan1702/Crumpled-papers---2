const Engine = Matter.Engine;
   const World = Matter.World;
   const Bodies = Matter.Bodies;
   const Body = Matter.Body;
   
   var groundObject,paperObject,dustbinObj;	
   var world;

   
   
   function setup() {
	   createCanvas(1600, 700);
	   rectMode(CENTER);
   
   
	   engine = Engine.create();
	   world = engine.world;
	   dustbinObj=new Dustbin(1200,650);
	   paperObject=new Paper(250,350,70);
	   groundObject=new Ground(width/2,690,width,10);
	   
	  
	   
	   
	   //Create a Ground
	   
   
	   
   
	   Engine.run(engine);
   
	 
   }
   
   
   function draw() {
	 rectMode(CENTER);
	 background(180);
	 paperObject.display();
	 dustbinObj.display();
	 
	 groundObject.display();

	 

	
	
	
	 
	
	 
	 
	
   }
   
   function keyPressed() {
		 if (keyCode === UP_ARROW) {
   
		   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:255,y:-250});
	   
		 }
   }

