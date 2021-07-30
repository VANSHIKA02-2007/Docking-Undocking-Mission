var iss, issImg, spacecraft, hasDocked, bgImg;

function preload()
{
  issImg = loadImage("iss.png");
  spacecraft1 = loadImage("spacecraft1.png");
  spacecraft2 = loadImage("spacecraft2.png");
  spacecraft3 = loadImage("spacecraft3.png");
  spacecraft4 = loadImage("spacecraft4.png");
  bgImg = loadImage("spacebg.jpg");

  s = loadSound("s.wav");
  s1 = loadSound("s1.wav");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  bg = createSprite(displayWidth/2,displayHeight/2,1000,1000);
  bg.addImage(bgImg);
  bg.scale = 2.2;

  iss = createSprite(600,200,40,40);
  iss.addImage(issImg);
  spacecraft = createSprite(675,650,40,40);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale = 0.5;
  
}

function draw() {
  background(0,2,14);  

  hasDocked = false;

  if(!hasDocked)
  {
    if(keyCode === LEFT_ARROW)
    {
      spacecraft.addImage(spacecraft3);
      spacecraft.x = spacecraft.x - 0.5;
      s1.play();
    }

    if(keyCode === RIGHT_ARROW)
    {
      spacecraft.addImage(spacecraft4);
      spacecraft.x = spacecraft.x + 0.5;
      s1.play();
    }

    if(keyCode === DOWN_ARROW)
    {
      spacecraft.addImage(spacecraft2);
      s.play();
    }

    if(keyCode === UP_ARROW)
    {
      spacecraft.addImage(spacecraft2);
      spacecraft.y = spacecraft.y - 0.5;
      s1.play();
    }
  }

  drawSprites();
}