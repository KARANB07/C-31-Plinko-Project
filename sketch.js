var part=[]
var divisions=[]
var plinkos=[] 
var particles=[]
var divH=300;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body=Matter.Body

var engine, world;







function setup() {
  createCanvas(480,800);
  engine = Engine.create();
world = engine.world;
  //createSprite(400, 200, 50, 50);
  Engine.run(engine)
  g=new Ground(200,800,100000,10)
  p=new par(200,200,200,200)
  for (var k=0;k<=width; k=k+80){
    divisions.push(new division(k, height-divH/2, 10, divH))
  
  }
  for(var a=40;a<=width;a=a+50){
    plinkos.push(new pli(a,75))
  }
  for(var b=15;b<=width;b=b+50){
    plinkos.push(new pli(b,175))
  }
  for(var d=40;d<=width;d=d+50){
    plinkos.push(new pli(d,275))
  }
  for(var c=15;c<=width;c=c+50){
    plinkos.push(new pli(c,375))
  }


  //for(var k = 0; k <=width; k = k+80){
   // divisions.push(new division(k, height-divH/2, 10, divH));
 // }
  
  
}

function draw() {
  background(255,10,10);  
  g.display();
  p.display();
  for(var k = 0; k<divisions.length;k++){
    divisions[k].display();
 }
 for (var a=0;a<plinkos.length;a++){
   plinkos[a].display();
 }
 for (var b=0;b<plinkos.length;b++){
  plinkos[b].display();
}
 
for (var c=0;c<plinkos.length;c++){
  plinkos[c].display();
}
 
for (var d=0;d<plinkos.length;d++){
  plinkos[d].display();
}
for (var e=0;e<particles.length;e++){
  particles[e].display();
}
 
 spawn();
  drawSprites();
}


function spawn(){
  if(frameCount%60===0){
    
      particles.push(new par(random(0,400),10))
    
  }
}