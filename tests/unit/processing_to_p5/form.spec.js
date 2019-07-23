import processing_to_p5 from "../../../src/utils/processing_to_p5";

test("empty", () => {
  expect(processing_to_p5("")).toBe("");
});

test("Points and Lines", () => {
  expect(
    processing_to_p5(
      `
int d = 70;
int p1 = d;
int p2 = p1+d;
int p3 = p2+d;
int p4 = p3+d;

size(640, 360);
noSmooth();
background(0);
translate(140, 0);

// Draw gray box
stroke(153);
line(p3, p3, p2, p3);
line(p2, p3, p2, p2);
line(p2, p2, p3, p2);
line(p3, p2, p3, p3);

// Draw white points
stroke(255);
point(p1, p1);
point(p1, p3); 
point(p2, p4);
point(p3, p1); 
point(p4, p2);
point(p4, p4);
`.trim()
    )
  ).toBe(
    `
function setup() { 
let d = 70;
let p1 = d;
let p2 = p1+d;
let p3 = p2+d;
let p4 = p3+d;

createCanvas(640, 360);
noSmooth();
background(0);
translate(140, 0);

// Draw gray box
stroke(153);
line(p3, p3, p2, p3);
line(p2, p3, p2, p2);
line(p2, p2, p3, p2);
line(p3, p2, p3, p3);

// Draw white points
stroke(255);
point(p1, p1);
point(p1, p3); 
point(p2, p4);
point(p3, p1); 
point(p4, p2);
point(p4, p4);
}
`.trim()
  );
});

test("Shape Primitives", () => {
  expect(
    processing_to_p5(
      `
size(640, 360);
background(0);
noStroke();

fill(204);
triangle(18, 18, 18, 360, 81, 360);

fill(102);
rect(81, 81, 63, 63);

fill(204);
quad(189, 18, 216, 18, 216, 360, 144, 360);

fill(255);
ellipse(252, 144, 72, 72);

fill(204);
triangle(288, 18, 351, 360, 288, 360); 

fill(255);
arc(479, 300, 280, 280, PI, TWO_PI);
`.trim()
    )
  ).toBe(
    `
function setup() { 
createCanvas(640, 360);
background(0);
noStroke();

fill(204);
triangle(18, 18, 18, 360, 81, 360);

fill(102);
rect(81, 81, 63, 63);

fill(204);
quad(189, 18, 216, 18, 216, 360, 144, 360);

fill(255);
ellipse(252, 144, 72, 72);

fill(204);
triangle(288, 18, 351, 360, 288, 360); 

fill(255);
arc(479, 300, 280, 280, PI, TWO_PI);
}
`.trim()
  );
});

test("Pie Chart", () => {
  expect(
    processing_to_p5(
      `
int[] angles = { 30, 10, 45, 35, 60, 38, 75, 67 };

void setup() {
  size(640, 360);
  noStroke();
  noLoop();  // Run once and stop
}

void draw() {
  background(100);
  pieChart(300, angles);
}

void pieChart(float diameter, int[] data) {
  float lastAngle = 0;
  for (int i = 0; i < data.length; i++) {
    float gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(data[i]));
    lastAngle += radians(data[i]);
  }
}
`.trim()
    )
  ).toBe(
    `
let angles = [ 30, 10, 45, 35, 60, 38, 75, 67 ];

function setup() {
  createCanvas(640, 360);
  noStroke();
  noLoop();  // Run once and stop
}

function draw() {
  background(100);
  pieChart(300, angles);
}

function pieChart(diameter, data) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    let gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(data[i]));
    lastAngle += radians(data[i]);
  }
}
`.trim()
  );
});

test("Regular Polygon", () => {
  expect(
    processing_to_p5(
      `
void setup() {
  size(640, 360);
}

void draw() {
  background(102);
  
  pushMatrix();
  translate(width*0.2, height*0.5);
  rotate(frameCount / 200.0);
  polygon(0, 0, 82, 3);  // Triangle
  popMatrix();
  
  pushMatrix();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 50.0);
  polygon(0, 0, 80, 20);  // Icosahedron
  popMatrix();
  
  pushMatrix();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -100.0);
  polygon(0, 0, 70, 7);  // Heptagon
  popMatrix();
}

void polygon(float x, float y, float radius, int npoints) {
  float angle = TWO_PI / npoints;
  beginShape();
  for (float a = 0; a < TWO_PI; a += angle) {
    float sx = x + cos(a) * radius;
    float sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
`.trim()
    )
  ).toBe(
    `
function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(102);
  
  push();
  translate(width*0.2, height*0.5);
  rotate(frameCount / 200.0);
  polygon(0, 0, 82, 3);  // Triangle
  pop();
  
  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 50.0);
  polygon(0, 0, 80, 20);  // Icosahedron
  pop();
  
  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -100.0);
  polygon(0, 0, 70, 7);  // Heptagon
  pop();
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
`.trim()
  );
});

test("Star", () => {
  expect(
    processing_to_p5(
      `
void setup() {
  size(640, 360);
}

void draw() {
  background(102);
  
  pushMatrix();
  translate(width*0.2, height*0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 70, 3); 
  popMatrix();
  
  pushMatrix();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 400.0);
  star(0, 0, 80, 100, 40); 
  popMatrix();
  
  pushMatrix();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5); 
  popMatrix();
}

void star(float x, float y, float radius1, float radius2, int npoints) {
  float angle = TWO_PI / npoints;
  float halfAngle = angle/2.0;
  beginShape();
  for (float a = 0; a < TWO_PI; a += angle) {
    float sx = x + cos(a) * radius2;
    float sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
`.trim()
    )
  ).toBe(
    `
function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(102);
  
  push();
  translate(width*0.2, height*0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 70, 3); 
  pop();
  
  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 400.0);
  star(0, 0, 80, 100, 40); 
  pop();
  
  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5); 
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle/2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
`.trim()
  );
});

test("Triangle Strip", () => {
  expect(
    processing_to_p5(
      `
int x;
int y;
float outsideRadius = 150;
float insideRadius = 100;

void setup() {
  size(640, 360);
  background(204);
  x = width/2;
  y = height/2;
}

void draw() {
  background(204);
  
  int numPoints = int(map(mouseX, 0, width, 6, 60));
  float angle = 0;
  float angleStep = 180.0/numPoints;
    
  beginShape(TRIANGLE_STRIP); 
  for (int i = 0; i <= numPoints; i++) {
    float px = x + cos(radians(angle)) * outsideRadius;
    float py = y + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py); 
    angle += angleStep;
  }
  endShape();
}
`.trim()
    )
  ).toBe(
    `
let x;
let y;
let outsideRadius = 150;
let insideRadius = 100;

function setup() {
  createCanvas(640, 360);
  background(204);
  x = width/2;
  y = height/2;
}

function draw() {
  background(204);
  
  let numPoints = int(map(mouseX, 0, width, 6, 60));
  let angle = 0;
  let angleStep = 180.0/numPoints;
    
  beginShape(TRIANGLE_STRIP); 
  for (let i = 0; i <= numPoints; i++) {
    let px = x + cos(radians(angle)) * outsideRadius;
    let py = y + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py); 
    angle += angleStep;
  }
  endShape();
}
`.trim()
  );
});

test("Bezier", () => {
  expect(
    processing_to_p5(
      `
void setup() {
  size(640, 360); 
  stroke(255);
  noFill();
}

void draw() {
  background(0);
  for (int i = 0; i < 200; i += 20) {
    bezier(mouseX-(i/2.0), 40+i, 410, 20, 440, 300, 240-(i/16.0), 300+(i/8.0));
  }
}
`.trim()
    )
  ).toBe(
    `
function setup() {
  createCanvas(640, 360); 
  stroke(255);
  noFill();
}

function draw() {
  background(0);
  for (let i = 0; i < 200; i += 20) {
    bezier(mouseX-(i/2.0), 40+i, 410, 20, 440, 300, 240-(i/16.0), 300+(i/8.0));
  }
}
`.trim()
  );
});
