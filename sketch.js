var suf1,suf2,suf3,suf4;
var box;
var inviWall1,inviWall2,inviWall3;

function setup(){
    createCanvas(800,400);

    //create 4 different surfaces
    suf1 = createSprite(100,390, 170,20);
    suf1.shapeColor = ('blue');
    suf2 = createSprite(300,390,170,20);
    suf2.shapeColor = ('orange');
    suf3 = createSprite(500,390,170,20);
    suf3.shapeColor = ('pink');
    suf4 = createSprite(700,390,170,20);
    suf4.shapeColor = ('green');

    //create box sprite and give velocity
    box = createSprite(random(20,750));
    box.shapeColor = ('white');
    box.scale = 0.6;
    box.velocityY = 4;
    box.velocityX = 4;
    
    //creating invi walls

    inviWall1 = createSprite(400,0,800,5);
    inviWall1.visible = false;

    inviWall2 = createSprite(0,200,5,400);
    inviWall2.visible = false;

    inviWall3 = createSprite(800,200,5,400);
    inviWall3.visible = false;
}

function draw() {
    background('yellow');
    
    //add condition to check if box touching surface and make it box
     if(suf1.isTouching(box) && box.bounceOff(suf1)) {
         box.shapeColor = ('blue');
         
     }

     if(suf2.isTouching(box) && box.bounceOff(suf2)) {
        box.shapeColor = ('orange');
    }

    if(suf3.isTouching(box) && box.bounceOff(suf3)) {
        box.shapeColor = ('pink');
    }

    if(suf4.isTouching(box) && box.bounceOff(suf4)) {
        box.shapeColor = ('green');
    }
     //creating invi walls

    if(inviWall1.isTouching(box) && box.bounceOff(inviWall1)) {
    }

    if(inviWall2.isTouching(box) && box.bounceOff(inviWall2)) {
    }

    if(inviWall3.isTouching(box) && box.bounceOff(inviWall3)) {
    }


    drawSprites();
}
