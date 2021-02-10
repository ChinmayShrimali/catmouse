var canvas,bg;
var tom,tomImg1,tomImg2,tomImg3;
var jerryImg1,jerryImg2,jerryImg3,jerry;

function preload() {
    //load the images here
bg = loadImage("images/garden.png")
tomImg1  = loadAnimation("images/cat1.png")
tomImg2  = loadAnimation("images/cat2.png","images/cat3.png")
tomImg3 = loadAnimation("images/cat4.png")

jerryImg1 =loadAnimation("images/mouse1.png")
jerryImg2=loadAnimation("images/mouse2.png")
jerryImg3= loadAnimation("images/mouse3.png")
}

function setup(){
    createCanvas(1000,650);
    //create tom and jerry sprites here
tom= createSprite(700,550);
tom.addAnimation ("tomSleeping",tomImg1) ;
tom.scale = 0.1;

jerry = createSprite(250,550);
jerry.addAnimation("jerryStanding",jerryImg2)
jerry.scale =0.1;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
