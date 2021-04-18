var jerry; 
var rat_Image; 
function preload() 
{ 
    //load the images here 
    rat_Image=loadImage("jerryOne.png"); 
} 
function setup(){
     createCanvas(1000,800); 
     //create tom and jerry sprites here 
     jerry=createSprite(500,300,50,40); 
     jerry.addImage("jerryimage",rat_Image); 
     } 
function draw() { 
    background("blue"); 
    //Write condition here to evalute if tom and jerry collide 
    drawSprites(); 
} 
function keyPressed(){ 
    //For moving and changing animation write code here 
}