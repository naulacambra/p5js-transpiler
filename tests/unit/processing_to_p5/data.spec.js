import processing_to_p5 from "../../../src/utils/processing_to_p5";

test("empty", () => {
  expect(processing_to_p5("")).toBe("");
});

test("Variables", () => {
  expect(
    processing_to_p5(
      `
size(640, 360);
background(0);
stroke(153);
strokeWeight(4);
strokeCap(SQUARE);

int a = 50;
int b = 120;
int c = 180;

line(a, b, a+c, b);
line(a, b+10, a+c, b+10);
line(a, b+20, a+c, b+20);
line(a, b+30, a+c, b+30);

a = a + c;
b = height-b;

line(a, b, a+c, b);
line(a, b+10, a+c, b+10);
line(a, b+20, a+c, b+20);
line(a, b+30, a+c, b+30);

a = a + c;
b = height-b;

line(a, b, a+c, b);
line(a, b+10, a+c, b+10);
line(a, b+20, a+c, b+20);
line(a, b+30, a+c, b+30);
`.trim()
    )
  ).toBe(
    `
function setup() { 
createCanvas(640, 360);
background(0);
stroke(153);
strokeWeight(4);
strokeCap(SQUARE);

let a = 50;
let b = 120;
let c = 180;

line(a, b, a+c, b);
line(a, b+10, a+c, b+10);
line(a, b+20, a+c, b+20);
line(a, b+30, a+c, b+30);

a = a + c;
b = height-b;

line(a, b, a+c, b);
line(a, b+10, a+c, b+10);
line(a, b+20, a+c, b+20);
line(a, b+30, a+c, b+30);

a = a + c;
b = height-b;

line(a, b, a+c, b);
line(a, b+10, a+c, b+10);
line(a, b+20, a+c, b+20);
line(a, b+30, a+c, b+30);
}
`.trim()
  );
});

test("Integers Floats", () => {
  expect(
    processing_to_p5(
      `
int a = 0;      // Create a variable "a" of the datatype "int"
float b = 0.0;  // Create a variable "b" of the datatype "float"

void setup() {
  size(640, 360);
  stroke(255);
}

void draw() {
  background(0);
  
  a = a + 1;
  b = b + 0.2; 
  line(a, 0, a, height/2);
  line(b, height/2, b, height);
  
  if(a > width) {
    a = 0;
  }
  if(b > width) {
    b = 0;
  }
}
`.trim()
    )
  ).toBe(
    `
let a = 0;      // Create a variable "a" of the datatype "int"
let b = 0.0;  // Create a variable "b" of the datatype "float"

function setup() {
  createCanvas(640, 360);
  stroke(255);
}

function draw() {
  background(0);
  
  a = a + 1;
  b = b + 0.2; 
  line(a, 0, a, height/2);
  line(b, height/2, b, height);
  
  if(a > width) {
    a = 0;
  }
  if(b > width) {
    b = 0;
  }
}
`.trim()
  );
});

test("True/False", () => {
  expect(
    processing_to_p5(
      `
boolean b = false;

size(640, 360);
background(0);
stroke(255);

int d = 20;
int middle = width/2;

for (int i = d; i <= width; i += d) {
  
  if (i < middle) {
    b = true;
  } else {
    b = false;
  }
  
  if (b == true) {
    // Vertical line
    line(i, d, i, height-d);
  }
  
  if (b == false) {
    // Horizontal line
    line(middle, i - middle + d, width-d, i - middle + d);
  }
}
`.trim()
    )
  ).toBe(
    `
function setup() { 
let b = false;

createCanvas(640, 360);
background(0);
stroke(255);

let d = 20;
let middle = width/2;

for (let i = d; i <= width; i += d) {
  
  if (i < middle) {
    b = true;
  } else {
    b = false;
  }
  
  if (b == true) {
    // Vertical line
    line(i, d, i, height-d);
  }
  
  if (b == false) {
    // Horizontal line
    line(middle, i - middle + d, width-d, i - middle + d);
  }
}
}
`.trim()
  );
});

test("Characters Strings", () => {
  expect(
    processing_to_p5(
      `
char letter;
String words = "Begin...";

void setup() {
  size(640, 360);
  // Create the font
  textFont(createFont("SourceCodePro-Regular.ttf", 36));
}

void draw() {
  background(0); // Set background to black

  // Draw the letter to the center of the screen
  textSize(14);
  text("Click on the program, then type to add to the String", 50, 50);
  text("Current key: " + letter, 50, 70);
  text("The String is " + words.length() +  " characters long", 50, 90);
  
  textSize(36);
  text(words, 50, 120, 540, 300);
}

void keyTyped() {
  // The variable "key" always contains the value 
  // of the most recent key pressed.
  if ((key >= 'A' && key <= 'z') || key == ' ') {
    letter = key;
    words = words + key;
    // Write the letter to the console
    println(key);
  }
}
`.trim()
    )
  ).toBe(
    `
let letter;
let words = "Begin...";

function setup() {
  createCanvas(640, 360);
  // Create the font
//   textFont(createFont("SourceCodePro-Regular.ttf", 36));		// https://github.com/processing/p5.js/issues/3706#issuecomment-487367169
}

function draw() {
  background(0); // Set background to black

  // Draw the letter to the center of the screen
  textSize(14);
  text("Click on the program, then type to add to the String", 50, 50);
  text("Current key: " + letter, 50, 70);
  text("The String is " + words.length +  " characters long", 50, 90);
  
  textSize(36);
  text(words, 50, 120, 540, 300);
}

function keyTyped() {
  // The variable "key" always contains the value 
  // of the most recent key pressed.
  if ((key >= 'A' && key <= 'z') || key == ' ') {
    letter = key;
    words = words + key;
    // Write the letter to the console
    console.log(key);
  }
}
`.trim()
  );
});

test("Variable Scope", () => {
  expect(
    processing_to_p5(
      `
int a = 80;  // Create a global variable "a"

void setup() {
  size(640, 360);
  background(0);
  stroke(255);
  noLoop();
}

void draw() {
  // Draw a line using the global variable "a"
  line(a, 0, a, height);
  
  // Create a new variable "a" local to the for() statement 
  for (int a = 120; a < 200; a += 2) {
    line(a, 0, a, height);
  }
  
  // Create a new variable "a" local to the draw() function
  int a = 300;
  // Draw a line using the new local variable "a"
  line(a, 0, a, height);  
  
  // Make a call to the custom function drawAnotherLine()
  drawAnotherLine();
  
  // Make a call to the custom function setYetAnotherLine()
  drawYetAnotherLine();
}

void drawAnotherLine() {
  // Create a new variable "a" local to this method
  int a = 320;
  // Draw a line using the local variable "a"
  line(a, 0, a, height);
}

void drawYetAnotherLine() {
  // Because no new local variable "a" is set, 
  // this line draws using the original global
  // variable "a", which is set to the value 80.
  line(a+2, 0, a+2, height);
}
`.trim()
    )
  ).toBe(
    `
let a = 80;  // Create a global variable "a"

function setup() {
  createCanvas(640, 360);
  background(0);
  stroke(255);
  noLoop();
}

function draw() {
  // Draw a line using the global variable "a"
  line(a, 0, a, height);
  
  // Create a new variable "a" local to the for() statement 
  for (let a = 120; a < 200; a += 2) {
    line(a, 0, a, height);
  }
  
  // Create a new variable "a" local to the draw() function
  let a = 300;
  // Draw a line using the new local variable "a"
  line(a, 0, a, height);  
  
  // Make a call to the custom function drawAnotherLine()
  drawAnotherLine();
  
  // Make a call to the custom function setYetAnotherLine()
  drawYetAnotherLine();
}

function drawAnotherLine() {
  // Create a new variable "a" local to this method
  let a = 320;
  // Draw a line using the local variable "a"
  line(a, 0, a, height);
}

function drawYetAnotherLine() {
  // Because no new local variable "a" is set, 
  // this line draws using the original global
  // variable "a", which is set to the value 80.
  line(a+2, 0, a+2, height);
}
`.trim()
  );
});

test("Datatype Conversion", () => {
  expect(
    processing_to_p5(
      `
size(640, 360);
background(0);
noStroke();

textFont(createFont("SourceCodePro-Regular.ttf",24));

char c;    // Chars are used for storing alphanumeric symbols
float f;   // Floats are decimal numbers
int i;     // Integers are values between 2,147,483,647 and -2147483648
byte b;    // Bytes are values between -128 and 128

c = 'A';
f = float(c);      // Sets f = 65.0
i = int(f * 1.4);  // Sets i to 91
b = byte(c / 2);   // Sets b to 32

//println(f);
//println(i);
//println(b);

text("The value of variable c is " + c, 50, 100);
text("The value of variable f is " + f, 50, 150);
text("The value of variable i is " + i, 50, 200);
text("The value of variable b is " + b, 50, 250);
`.trim()
    )
  ).toBe(
    `
`.trim()
  );
});

test("", () => {
  expect(
    processing_to_p5(
      `
`.trim()
    )
  ).toBe(
    `
`.trim()
  );
});
