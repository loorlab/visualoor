
/* Demo 1 */
/*function setup() {
    createCanvas(1920, 600);
    line(15, 25, 70, 90);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}*/

/* Demo 2 */
function setup() {
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
  background(200);
  ellipse(width/2, height/2, 50, 50);
}