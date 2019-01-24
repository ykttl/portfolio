export default function sketch(p) {
  var hue;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight * 0.8);
    p.colorMode(p.HSL, 360);
    hue = 0;
  };
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight * 0.8);
  };
  p.mouseMoved = () => {
    hue > 360 ? (hue = 0) : (hue += 10);
    p.noStroke(); //remove outline
    p.fill(hue, 200, 200, 15); // fill the color, (color(0=red),vividness,brightness)
    p.ellipse(p.mouseX, p.mouseY, 80, 80); // draw circle
  };
  p.touchMoved = () => {
    // for mobile
    hue > 360 ? (hue = 0) : (hue += 10);
    p.noStroke();
    p.fill(hue, 200, 200, 15);
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
}
