
var tom,tomImage;
var jerry, jerryImage1,jerryImage2, jerryImage3;
var playGround, playGroundImage;

function preload() {
    playGroundImage = loadImage("images/garden.png");
    jerryImage1=loadAnimation("images/jerryOne.png");
    jerryImage2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImage3=loadAnimation("images/jerryFour.png");
    tomImage1= loadAnimation("images/tomOne.png");
    tomImage2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImage3= loadAnimation("images/tomFour.png");
}

function setup(){
    canvas = createCanvas(1000,800);

    //playGround = createSprite(500,400,1000,800);
    //playGround.scale = 1.2
    //playGround.addImage("ground",playGroundImage);
    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImage1);
    tom.addAnimation("tomLastImage", tomImage3);
    tom.addAnimation("tomRunning", tomImage2);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImage1);
    jerry.addAnimation("jerryLastImage", jerryImage3);
    jerry.addAnimation("teasing",jerryImage2);
    jerry.scale = 0.15;

   
}

function draw() {

    background(playGroundImage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage",tomImage3);
        
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage",jerryImage3);
    }  

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    jerry.changeAnimation("teasing",jerryImage2);
    tom.velocityX = -3; 
   
    tom.changeAnimation("tomRunning",tomImage2);
    
   
    //jerry.frameDelay = 25;
    
}

}
