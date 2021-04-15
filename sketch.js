
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  

  
}


function draw() {

  
}






var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
 //loading animations and images 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
  //to create object monkey
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  //to create ground
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  console.log(ground.x);
  
  score = 0;
  
  //to create groups
  obstacleGroup = new Group();
  FoodGroup = new Group();
  
}


function draw() {
  
  //to calculate scores
  score = score + Math.round(getFrameRate()/60);

  //to clear screen and give it colour
  background("lightGreen"); 
  
  //to display scores
  //scores and objects to be displayed after background command
  // xPosition of 44 line less than 400(max size of canvas)
  text("SURVIVAL TIME:"+score, 200, 50);
  textSize(20);
  stroke("black");
  fill("black");
  
  //to make ground infinite
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  //to make the monkey jump
  if(keyDown("space")&& monkey.y >= 250) {
        monkey.velocityY = -12;
  }
  
  //to show fruits and obtacles by calling function
  spawnObstacles();
  spawnFruits();  
  
  //to give monkey gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //to make monkey collide with ground sprite
  monkey.collide(ground);
  
  
  //to stop everything if monkey touches obstacle  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
      
  }
  
 //to display sprites
  drawSprites();  
}

function spawnObstacles(){
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,325,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.setLifetime = -1;
    obstacle.velocityX = -3;
    obstacle.collide(ground);
    obstacleGroup.add(obstacle);
  }
}
function spawnFruits(){
  if(frameCount % 80 === 0){
   var banana = createSprite(400,120,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200));
    banana.velocityX = -8;
    banana.setLifetime = -1;
    
    FoodGroup.add(banana);
  }
}



