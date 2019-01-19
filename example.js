var spot = {
  x: 100,
  y: 0
};

var col = {
  r: 255,
  g: 0,
  b: 0
};

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  for (var i = 0; i < 1; i++) {
    col.r = random(10, 255);
    col.g = 0;
    col.b = random(10, 190);
    spot.x = random(0, width);
    spot.y = random(0, height);
    fill(col.r, col.g, col.b);
    ellipse(spot.x, spot.y, 10, 10);
    noStroke();
  }
}

//////
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
}
function draw() {
  background(220);
  var color1 = color(0, 0, 153);
  var color2 = color(204, 51, 0);

  setGradient(0, 0, windowWidth, windowHeight, color1, color2, 'Y');
  for (var i = 0; i < 50; i++) {
    var x = random(windowWidth);
    var y = random(windowHeight - 200);
    noStroke();
    fill(255, 255, 0);
    ellipse(x, y, 2, 2);
  }
}
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == 'Y') {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis == 'X') {
    // Left to right gradient
    for (let j = x; j <= x + w; j++) {
      var inter2 = map(j, x, x + w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y + h);
    }
  }
}

////
var spot = {
  x: 100,
  y: 0
};

var col = {
  r: 255,
  g: 0,
  b: 0
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  frameRate(8);
  //for (var i = 0; i < 1; i++) {
  col.r = random(10, 100);
  col.g = 0;
  col.b = random(10, 190);
  spot.x = random(0, width);
  spot.y = random(0, height);
  fill(col.r, col.g, col.b);
  ellipse(spot.x, spot.y, 10, 10);
  noStroke();
  //}
}
////
let a = 0;
let b = 0;

function setup() {
  createCanvas(720, 400);
  stroke(255);
  //a = height / 2;
  //noLoop();
}

function draw() {
  background(51);
  for (var i = 0; i < 5; i++) {
    line(20, 0, 20, a);
    line(40, 0, 40, b);
    line(60, 0, 60, a);
    line(80, 0, 80, b);
    a++;
    b++;
    if (a > 200) {
      a = 200;
      ellipse(20, 200, 10, 10);
    }
    if (b > 100) {
      b = 100;
    }
  }
}
function test() {
  for (var i = 0; i < 1; i++) {
    line(40, 0, 40, b);
    line(80, 0, 80, b);
    b++;
    if (b > 100) {
      b = 100;
    }
  }
}
//
let a = 0;
let b = 0;
let col = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  test();
  for (var i = 0; i < 10; i++) {
    line(20, 0, 20, a);

    line(60, 0, 60, a);

    a++;

    if (a > 200) {
      a = 200;

      col = random(0.1);
      fill('red');
      ellipse(20, 200, 10, 10);
      ellipse(60, 200, 10, 10);
      return;
    }
  }
}

function test() {
  for (var i = 0; i < 5; i++) {
    line(40, 0, 40, b);
    line(80, 0, 80, b);
    b++;
    if (b > 100) {
      b = 100;
      fill(col);
      ellipse(40, 100, 10, 10);
      ellipse(80, 100, 10, 10);
      return;
    }
  }
}
