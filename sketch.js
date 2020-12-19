var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);

  
  object1 = createSprite(300, 100,50,50);
  object1.shapeColor="orange";
  object1.velocityY = 5;

  gobject2 = createSprite(300, 300,50,50);
  gobject2.shapeColor="orange";
  gobject2.velocityY = -5;

}

function draw() {
  background(0);  

bounceOff(object1, gobject2);
 
   drawSprites();

}
