export default function sketch(p) {
  var hue;
  let a = 0;
  let b = 0;
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSL, 360);
    hue = 0;
  };
  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
  p.draw = function() {
    //p.background(220);
    //   test();
    //   for (var i = 0; i < 10; i++) {
    //     p.line(20, 0, 20, a);
    //     p.line(60, 0, 60, a);
    //     a++;
    //     if (a > 200) {
    //       a = 200;
    //       //col = random(0.1);
    //       p.fill('red');
    //       p.ellipse(20, 200, 10, 10);
    //       p.ellipse(60, 200, 10, 10);
    //       return;
    //     }
    //   }
    //   function test() {
    //     for (var i = 0; i < 5; i++) {
    //       p.line(40, 0, 40, b);
    //       p.line(80, 0, 80, b);
    //       b++;
    //       if (b > 100) {
    //         b = 100;
    //         p.fill('blue');
    //         p.ellipse(40, 100, 10, 10);
    //         p.ellipse(80, 100, 10, 10);
    //         return;
    //       }
    //     }
    //   }
  };
  p.mouseMoved = function() {
    hue > 360 ? (hue = 0) : (hue += 10);
    p.noStroke(); //remove outline
    p.fill(hue, 200, 200, 15); // fill the color, (color(0=red),vividness,brightness)
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
  p.touchMoved = function() {
    // for mobile
    hue > 360 ? (hue = 0) : (hue += 10);
    p.noStroke(); //remove outline
    p.fill(hue, 200, 200, 15); // fill the color, (color(0=red),vividness,brightness)
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
  p.mouseWheel = function() {
    hue > 360 ? (hue = 0) : (hue += 10);
    p.noStroke(); //remove outline
    p.fill(hue, 200, 200, 15); // fill the color, (color(0=red),vividness,brightness)
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
}
