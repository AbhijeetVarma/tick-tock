var hr ,sc,mn
var hrAngle , scAngle , mnAngle





function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
 angleMode(DEGREES)
}

function draw() {
  background(0); 
  
  hands() 
  drawSprites();
}

function hands(){
  translate(200,200)
  rotate(-90)
   sc = second()
   scAngle = map(sc,0,60,0,360)

   mn = minute()
   mnAngle = map(mn,0,60,0,360)

   hr = hour()
   hrAngle = map(hr%12,0,12,0,360)
   
   //angleMode(DEGREES)
  push()
  //angleMode(DEGREES)
  
rotate(scAngle)
stroke(255,0,0)
strokeWeight(7);
line(0,0,100,0)

  pop()

  push()
  //angleMode(DEGREES)
  rotate(hrAngle)
  stroke(0,225,0)
  strokeWeight(7);
  line(0,0,50,0)
    pop()

    push()
    //angleMode(DEGREES)
    rotate(mnAngle)
    stroke(0,0,225)
    strokeWeight(7);
    line(0,0,75,0)
    
      pop()

if(keyDown("a")){
  console.log(hr)
console.log(mn)
console.log(sc)
}
strokeWeight(7);
noFill()
stroke(255,0,0)
arc(0,0,300,300,0,scAngle)
stroke(0,0,255)
arc(0,0,320,320,0,mnAngle)
stroke(0,255,0)
arc(0,0,340,340,0,hrAngle)
  

}