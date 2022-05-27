var backgroundImg, background;
var playerImg, player;
var fireImg, fire;
var waterImg, water;
var candyImg, candy;
var pizzaImg, pizza;
var groundImg, Ground;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score = 0
var obstacleGroup, obstacle;
var treatGroup, treats;

function preload() {
  backgroundImg = loadImage("Background.png");
  playerImg = loadImage("player2.png");
  waterImg = loadImage("water droplet.png");
  fireImg = loadImage("fire2.png");
  groundImg = loadImage("black background.webp");
  candyImg = loadImage("candy.png");
  pizzaImg = loadImage("pizza.png")


}


function setup() {

  createCanvas(800, 500);

  background = createSprite(400, 300);
  background.addImage("Background", backgroundImg);
  background.scale = 1.2;
  background.velocityX = -4

  player = createSprite(200, 380, 50, 50);
  player.addImage("PlayingCharacter", playerImg)
  player.scale = 0.15

  // fire = createSprite(400,380,50,50);
  // fire.addImage("fire2.png",fireImg)
  // fire.scale = 0.11
  // fire.velocityX = -5
  // water = createSprite(500,380,50,50);
  // water.addImage("water droplet.png",waterImg)
  // water.scale = 0.16
  // water.velocityX = -5




  obstacleGroup = new Group();
  treatGroup = new Group();


  ground = createSprite(300, 490, 1500, 20)
  ground.shapeColor = "black";
  //ground.addImage("ground", groundImg);
  //ground.scale = 0.5;
  ground.x = ground.width / 2;
  ground.velocityX = -4;


  player.setCollider("rectangle",40,40,player.width,player.height);
  //player.debug = true
  

}




function draw() {

  if (background.x < 0) {
    background.x = background.width / 2;

  }

  
  //console.log(score);
  if (gameState == PLAY) {
    ground.velocityX = -4
    player.velocityY = player.velocityY + 0.5;
    // score = score + Math.round(frameCount/60)
    createObstacle();
    createTreat();
    ground.velocityX = -(4 + 3 * score / 100)

    if (ground.x < 0) {
      ground.x = ground.width / 2
    }
    
    if (keyDown("space") && player.y >= 170) {
      player.velocityY = -14;
    }
    if (treatGroup.isTouching(player)) {
      score = score + 5;
      treats.visible = false;
      //treatGroup.visible = false;
      obstacle.velocityX = obstacle.velocityX - 0.02;
    }

    if (keyDown("right_arrow")) {
      player.velocityX = 1

    }

    if (keyDown("left_arrow")) {
      player.velocityX = -1

    }
    if (obstacleGroup.isTouching(player)) {
      gameState = END
    }

  }
  else if (gameState == END) {
    console.log(gameState);
    ground.velocityX = 0
   // obstacleGroup.setVelocityXEach(0)
    obstacleGroup.destroyEach();
    treatGroup.destroyEach();
    player.visible = false;
   
  //  treats.visible = false;
    background.visible = false;
    textSize(30);
    fill("red");
    text("Game Over",250,250);
  }
  player.collide(ground);
  drawSprites();
  text("Score :" + score, 600, 100);

  
}

function keyPressed() {

  if (keyDown("right_arrow")) {
    player.velocityX = 1

  }

  if (keyDown("space")) {
    player.velocityY = 10

  }

  if (keyDown("left_arrow")) {
    player.velocityX = -1

  }

}

function createObstacle() {
  if (frameCount % 140 === 0) {
    obstacle = createSprite(600, 400, 10, 40)
    obstacle.scale = 0.085
    obstacle.velocityX = -4
    obstacle.lifetime = 200
    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1: obstacle.addImage("water droplet.png", waterImg);
        waterImg.scale = 0.14
        break;
      case 2: obstacle.addImage("fire2.png", fireImg);
        fireImg.scale = 0.07
        break;
      case 3: obstacle.addImage("water droplet.png", waterImg);
        waterImg.scale = 0.14
        break;
      case 4: obstacle.addImage("fire2.png", fireImg);
        fireImg.scale = 0.07
        break;
      case 5: obstacle.addImage("water droplet.png", waterImg);
        waterImg.scale = 0.14
        break;
      case 6: obstacle.addImage("fire2.png", fireImg);
        fireImg.scale = 0.07
        break;
      default: break;
    }
    obstacleGroup.add(obstacle)
  }
}

function createTreat() {
  if (frameCount % 85 === 0) {
    treats = createSprite(600, 100, 10, 40)
    treats.scale = 0.15;
    treats.velocityX = -4
    treats.lifetime = 200
    var rand = Math.round(random(1, 6));

    switch (rand) {
      case 1: treats.addImage("candy.png", candyImg);
        break;
      case 2: treats.addImage("pizza.png", pizzaImg);

        break;
      case 3: treats.addImage("candy.png", candyImg);

        break;
      case 4: treats.addImage("pizza.png", pizzaImg);

        break;
      case 5: treats.addImage("candy.png", candyImg);

        break;
      case 6: treats.addImage("pizza.png", pizzaImg);

        break;
      default: break;
    }
    treatGroup.add(treats);
  }
}

 function GAME_OVER(){
   if (gameState ==END) {
     
   }
 }
