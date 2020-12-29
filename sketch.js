//Variables for the hands and angles
var hr, mn, sc;
var hrAngle, mnAngle, scAngle;
var angleMode;

function setup() {
  createCanvas(400,400);

    //Set the angle to degrees
    angleMode(DEGREES);

}

function draw() {
  background(0);

    //Start from the beginning
    translate(200, 200);
  
    //What each variables represent
    hr = hour();
    mn = minute();
    sc = second();

    //Create hour hand(s) angle(s)
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360);
    hrAngle = map(hr %12, 0, 12, 0, 360);

    //Draw the second hand
    push()  
    rotate(scAngle);
    stroke(255, 0, 0);
    strokeWeight(7);
    line(0, 0, 100, 0);
    pop();

    //Draw the minute hand
    push()  
    rotate(mnAngle);
    stroke(0, 255, 0);
    strokeWeight(7);
    line(0, 0, 80, 0);
    pop();

    //Draw the hour hand
    push()  
    rotate(hrAngle);
    stroke(0, 0, 255);
    strokeWeight(7);
    line(0, 0, 60, 0);
    pop();

    //Properties instruction for all the arcs
    strokeWeight(10);
    noFill();
    
    //Draw the hour hand arc
    stroke(0, 0, 255);
    arc(0, 0, 250, 250, 0, hrAngle);
        
    //Draw the minute hand arc
    stroke(0, 255, 0);
    arc(0, 0, 280, 280, 0, mnAngle);

    //Draw the seconds hand arc
    stroke(255, 0, 0);
    arc(0, 0, 300, 300, 0, scAngle);

}