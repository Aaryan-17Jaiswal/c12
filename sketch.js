var garden,rabbit;
var gardenImg,rabbitImg;

var apple,appleImg;
var leaf, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

  var select_Sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0){
    if(select_Sprites == 1){
      Createapple();
    }
    else {
      Createleaves(); 
    }
  }

   drawSprites();
}

function Createapple(){
  
  apple = createSprite(random(50,350), 40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.1;
  apple.velocityY = 3;
  apple.lifetime = 150;

}

function Createleaves(){

  leaf = createSprite(random(0,350), 40,10,10);
  leaf.addImage(leafImg);
  leaf.scale = 0.1;
  leaf.velocityY = 3;
  leaf.lifetime = 150;

}
