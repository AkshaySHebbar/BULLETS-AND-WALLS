var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)

  bullet=createSprite(50, 200, 40, 20);
  wall=createSprite(150,200,thickness,height/2);


  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
 
 if(wall.x=bullet.x<(bullet.width+wall.width)/2)
 {
  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;

  if (deformation>180)
 {
   bullet.shapeColor=color(255,0,0)
 }

 if (deformation<180 && deformation>100)
 {
   bullet.shapeColor=color("white")
 }

 if (deformation<100)
 {
   bullet.shapeColor=color(0,255,0)
 }
 }
 hascollided();

 if (hascollided(bullet,ball))
 {

  bullet.velocityX=0;
  var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);

 }

if(damage>10)
{

  wall.shapeColor=color(255,0,0);
}
if (damage<10)
{
  wall.shapeColor=color(0,255,0);

}

  drawSprites();
}




function hascollided(lbullet,lball)
{

bulletRightEdge=bullet.x +bullet.weight;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true

}
return false;

}










