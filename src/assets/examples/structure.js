export default {
    statements_and_comments: `// The size function is a statement that tells the computer 
    // how large to make the window.
    // Each function statement has zero or more parameters. 
    // Parameters are data passed into the function
    // and are used as values for telling the computer what to do.
    size(640, 360);
    
    // The background function is a statement that tells the computer
    // which color (or gray value) to make the background of the display window 
    background(204, 153, 0);`,

    coordinates: `// Sets the screen to be 640 pixels wide and 360 pixels high
    size(640, 360);
    
    // Set the background to black and turn off the fill color
    background(0);
    noFill();
    
    // The two parameters of the point() method each specify coordinates.
    // The first parameter is the x-coordinate and the second is the Y 
    stroke(255);
    point(width * 0.5, height * 0.5);
    point(width * 0.5, height * 0.25); 
    
    // Coordinates are used for drawing all shapes, not just points.
    // Parameters for different functions are used for different purposes.
    // For example, the first two parameters to line() specify 
    // the coordinates of the first endpoint and the second two parameters 
    // specify the second endpoint
    stroke(0, 153, 255);
    line(0, height*0.33, width, height*0.33);
    
    // By default, the first two parameters to rect() are the 
    // coordinates of the upper-left corner and the second pair
    // is the width and height
    stroke(255, 153, 0);
    rect(width*0.25, height*0.1, width * 0.5, height * 0.8);`,

    width_and_height: `void setup() {
        size(640, 360);
      }
      
      void draw() {
        background(127);
        noStroke();
        for (int i = 0; i < height; i += 20) {
          fill(129, 206, 15);
          rect(0, i, width, 10);
          fill(255);
          rect(i, 0, 10, height);
        }
      }`,

    setup_and_draw: `int y = 100;

      // The statements in the setup() function 
      // execute once when the program begins
      void setup() {
        size(640, 360);  // Size must be the first statement
        stroke(255);     // Set line drawing color to white
        frameRate(30);
      }
      // The statements in draw() are executed until the 
      // program is stopped. Each statement is executed in 
      // sequence and after the last line is read, the first 
      // line is executed again.
      void draw() { 
        background(0);   // Clear the screen with a black background
        y = y - 1; 
        if (y < 0) { 
          y = height; 
        } 
        line(0, y, width, y);  
      } `,

    no_loop: `float y;

    // The statements in the setup() function 
    // execute once when the program begins
    void setup() 
    {
      size(640, 360);  // Size should be the first statement
      stroke(255);     // Set line drawing color to white
      noLoop();
      
      y = height * 0.5;
    }
    
    // The statements in draw() are executed until the 
    // program is stopped. Each statement is executed in 
    // sequence and after the last line is read, the first 
    // line is executed again.
    void draw() 
    { 
      background(0);   // Set the background to black
      y = y - 1; 
      if (y < 0) { y = height; } 
      line(0, y, width, y);  
    } `,

    loop: `float y = 100;
 
    // The statements in the setup() function 
    // run once when the program begins
    void setup() {
      size(640, 360);  // Size should be the first statement
      stroke(255);     // Set stroke color to white
      noLoop();
      
      y = height * 0.5;
    }
    
    // The statements in draw() are run until the 
    // program is stopped. Each statement is run in 
    // sequence and after the last line is read, the first 
    // line is run again.
    void draw() { 
      background(0);   // Set the background to black
      line(0, y, width, y);  
      
      y = y - 1; 
      if (y < 0) { 
        y = height; 
      } 
    } 
    
    void mousePressed() {
      loop();
    }`,

    redraw: `float y;
 
    // The statements in the setup() function 
    // execute once when the program begins
    void setup() {
      size(640, 360);  // Size should be the first statement
      stroke(255);     // Set line drawing color to white
      noLoop();
      y = height * 0.5;
    }
    
    // The statements in draw() are executed until the 
    // program is stopped. Each statement is executed in 
    // sequence and after the last line is read, the first 
    // line is executed again.
    void draw() { 
      background(0);   // Set the background to black
      y = y - 4; 
      if (y < 0) { y = height; } 
      line(0, y, width, y);  
    } 
    
    void mousePressed() {
      redraw();
    }`,

    functions: `void setup() {
        size(640, 360);
        background(51);
        noStroke();
        noLoop();
      }
      
      void draw() {
        drawTarget(width*0.25, height*0.4, 200, 4);
        drawTarget(width*0.5, height*0.5, 300, 10);
        drawTarget(width*0.75, height*0.3, 120, 6);
      }
      
      void drawTarget(float xloc, float yloc, int size, int num) {
        float grayvalues = 255/num;
        float steps = size/num;
        for (int i = 0; i < num; i++) {
          fill(i*grayvalues);
          ellipse(xloc, yloc, size - i*steps, size - i*steps);
        }
      }`,

    recursion: `void setup() {
        size(640, 360);
        noStroke();
        noLoop();
      }
      
      void draw() {
        drawCircle(width/2, 280, 6);
      }
      
      void drawCircle(int x, int radius, int level) {                    
        float tt = 126 * level/4.0;
        fill(tt);
        ellipse(x, height/2, radius*2, radius*2);      
        if(level > 1) {
          level = level - 1;
          drawCircle(x - radius/2, radius/2, level);
          drawCircle(x + radius/2, radius/2, level);
        }
      }`,

    creategraphics: `PGraphics pg;

      void setup() {
        size(640, 360);
        pg = createGraphics(400, 200);
      }
      
      void draw() {
        fill(0, 12);
        rect(0, 0, width, height);
        fill(255);
        noStroke();
        ellipse(mouseX, mouseY, 60, 60);
        
        pg.beginDraw();
        pg.background(51);
        pg.noFill();
        pg.stroke(255);
        pg.ellipse(mouseX-120, mouseY-60, 60, 60);
        pg.endDraw();
        
        // Draw the offscreen buffer to the screen with image() 
        image(pg, 120, 60); 
      }`
}