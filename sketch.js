var trackImage, track;
var bomb, bombImage;
var power, powerImage
var energyDrink, energyDrinkImage
var runner1, runner1Image
var runner2, runner2Image
coin, coinImage

function preload(){
  //pre-load images
  trackImage = loadImage("path.png")
  bombImage = loadImage("bomb.png")
  powerImage = loadImage("power.png")
  energyDrinkImage = loadImage("energyDrink.png")
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImage = loadImage("coin.png")
  
}

function setup(){
  createCanvas(400,800);
  //create sprites here
  track = createSprite(200,200)
  track.addImage(trackImage)
  track.velocityY = 2
  track.scale = 2

  bomb = createSprite(200,120);
  bomb.addImage(bombImage)
  bomb.scale = 0.3

  //power = createSprite(108,550);
  //power.addImage(powerImage)
  //power.scale = 0.2

  //energyDrink = createSprite(170,530);
  //energyDrink.addImage(energyDrinkImage)
 // energyDrink.scale = 0.1
 // energyDrink.rotation = 10

  

  coin = createSprite(200,370);
  coin.addImage(coinImage)
  coin.scale = 0.5

  boy = createSprite(200,550,20,20);
  boy.addAnimation("JeffRunning",boyImg);
  boy.scale=0.08;

}

function draw() {
  background(0);
  
  if(track.x > 800){
    track.x = 400
  }

  drawSprites()

}
