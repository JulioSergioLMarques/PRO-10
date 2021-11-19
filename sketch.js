var oceano,navio;
var oceanoImg,navioImg;

function preload(){
  oceanoImg = loadImage("sea.png");
  navioImg = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Movendo o fundo
  oceano=createSprite(400,200);
  oceano.addImage(oceanoImg);
  oceano.velocityX = -5;
  oceano.scale=0.3;

  
  navio = createSprite(130,200,30,30);
  navio.addAnimation("movingShip",navioImg);
  navio.scale =0.25;
  
}

function draw() {
  background(0);
  oceano.velocityX = -3;

  
  //código para redefinir o fundo
  if(oceano.x < 0){
    oceano.x = oceano.width/8;
  }
    
  drawSprites();
}