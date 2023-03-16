var ball;
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,10,10);

}

function draw() 
{
  background(30);
 if (keyDown('left')) {
  ball.velocityX = -1;
  ball.velocityY = 0;
 }

 if (keyDown('right')) {
  ball.velocityX = 1;
  ball.velocityY = 0;
 }

 if (keyDown('up')) {
  ball.velocityY = -1;
  ball.velocityX = 0;
 }
 
 if (keyDown('down')) {
  ball.velocityY = 1;
  ball.velocityX = 0;
 }

 drawSprites()
}




