//Create variables here
var dog, happyDog;
var database; 
var foodS, foodStock;

function preload(){
//load images here
  dog=loadImage("Dog.png");
  happyDog=loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();

  dog = createSprite(250,250,10,10);
  dog = addImage(dog);
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  Text("NOTE:Press UP_ARROW To Feed Drago Milk",100,50);

  if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  textsize(3);
  Fill (255);
  stroke ("green");

}

function  readStock(data){
  foodS=data.val
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}



