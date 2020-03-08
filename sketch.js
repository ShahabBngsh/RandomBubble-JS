var canvasX=512, canvasY=256;
const numOfCircles = 500;
let c = [];
var i = 0, x, y;
function setup() {
    createCanvas(canvasX, canvasY);
    frameRate(30);
}

function draw() {
  background(0);
  newCircle();
  for(var j = 0; j<i; j++) {
    c[j].grow(c, i);
    c[j].show();
  }
}

function newCircle() {
  var isInsideCircle = false;
  if(i < numOfCircles) {
    x = random(2, 510);
    y = random(2, 254);
    for(var j=0; j<i; j++){
      if(dist(x, y, 0, c[j].x, c[j].y, 0) < (c[j].r) ){
        isInsideCircle = true;
      }
    }
    if(!isInsideCircle){
      c[i] = new Circle(x, y);
      i++;
    }
  }
}