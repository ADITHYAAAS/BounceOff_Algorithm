var movingrect, fixedrect, gameobject1, gameobject2;

function setup() {
  createCanvas(1200,800);
  
  fixedrect = createSprite(400, 100, 50, 100);
  movingrect = createSprite(400, 800,80,40);

  gameobject1 = createSprite(400,500,80,40);
  gameobject2 = createSprite(800,500,40,80);
  
  fixedrect.velocityY = +5;
  movingrect.velocityY = -5;

  gameobject1.velocityX = +5;
  gameobject2.velocityX = -5;

  fixedrect.shapeColor = "red";
  movingrect.shapeColor = "red";
}

function draw() {
  background(0);  

  bounceOff(movingrect,fixedrect);
  bounceOff(gameobject1,gameobject2);

  drawSprites();
}