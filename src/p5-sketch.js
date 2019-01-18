export default function sketch(p) {
  var hue;
  var smallPoint;
  var largePoint;
  var color = [10, 20, 30];
  p.setup = function() {
    console.log("setup!");
    // p.background(50);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSL, 360);
    hue = 0;
    smallPoint = 20;
    largePoint = 100;
    console.log(p.random(1));
  };
  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
  p.draw = function() {
    //p.background(220);
  };
  p.mouseMoved = function() {
    hue > 360 ? (hue = 0) : (hue += 10);

    //p.colorMode(p.HSL, 360); // use HSL color, not rgb nor　#00000

    p.noStroke(); //remove outline
    p.fill(hue, 200, 200, 15); // fill the color, (color(0=red),vividness,brightness)
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
}
