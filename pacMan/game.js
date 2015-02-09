// U3.W7: Design your own Code Combat Mission

// This is a solo challenge

// Pac-man -ish.
// Your mission description:
// Overall mission: Collect all the dots you can while avoiding the ghosts.
// Goals:
//    1. move up/down/left/right to collect dots.
//    2. collect them all before getting eaten by the ghost/touched by the ghost.
// Characters: pac-man, ghost.
// Objects: pacman, ghost, dots, maze(?)
// Functions:
//    1. move pacman up/down/left/right
//    2. collect dots.
//    3. when pacman and ghost encounter one another.
//    4. ghost following pacman when pacman within a certain radius from ghost. (?)
//

// Pseudocode (Overview)
//  Canvas will be rectangular.
//  (If I can figure it out, there will be a maze--a short one.)
//  pacMan will be a circle. perhaps 100x100 px.
//  The ghost will be rought the same size. A square or something.
//  pacMan starts at one end of the screen/possibly maze.
//  The ghost is in the center of the maze.
// Create a trail of dots following the route of the maze OR have dots pop up one at a time.
//  pacMan toggles around, following the trail of dots.
//  When pacMan touches the dot, it is collected.
// A point is awarded for every dot collected.
//  The ghost detects pacMan when it is within a given area/range/radius from the ghost.
//  The ghost will navigate through the maze(?) to catch pacMan.
//  The game is won if pacMan can collect all of the dots before being eaten by the ghost(s) or is touched by the ghost.
//  (Possibly later, the speed of the ghosts will increase or more ghosts will be introduced. Possibly time bonus offered. Possibly additional prizes.)
//
// Pseudocode for Movement
//  Calculate the new X & Y coordinates when using arrow keys.
//  When moving down, the Y coordinate will increase. Move up and the Y will decrease (closer to 0,0). X is unchanged.
//  When moving left, the X coordinate will decrease. Move right, X will increase.
//  Account for bumping into the lines. PacMan cannot cross over lines!
//
//  Pseudocode for Collision
//  When pixels change to black, they're touching/hovering the borders.
//
//
// Initial Code

var canvas;
var context;
var WIDTH = 500;
var HEIGHT = 500;
// var dotsEatenCount = 0;

var pacMan= {posX: 63, posY: 393, width: 8};
var step = 3; // step taken
var mazeImg = new Image();
var collision = 0;


// game keys
var SPACE = 32;
var LEFT_ARROW = 37;
var UP_ARROW = 38;
var RIGHT_ARROW = 39;
var DOWN_ARROW = 40;


//functions

function startGame() {
  canvas = document.getElementById("mazeCanvas");
  context = canvas.getContext("2d");
  mazeImg.src = "../imgs/mazeImg.png";
  return setInterval(draw, 10);
}

//creating pacMan
function draw() {
  clear();
  context.beginPath();
  context.arc(pacMan.posX, pacMan.posY, pacMan.width, 0, 2*Math.PI, true);
  context.closePath();
  context.fillStyle = "yellow";
  context.fill();
}

//reset
function clear() {
  context.clearRect(0,0,WIDTH,HEIGHT);
  context.drawImage(mazeImg,8,13);
}

// Listen for when the user presses a key down.
// arrow keys trigger "keydown" events


// this gets which key the user pressed
// (minX, minY) = (40,40)
// (maxX, maxY) = (460,460)
function movePacMan(event) {
  var key = event.which;
  switch (key) {
    case 37: //left arrow
      if (pacMan.posX > 40) {
        pacMan.posX -=step;
        clear();
        collides();
        if (collision === 1){
          pacMan.posX +=step;
          collision = 0;
        }
      }
      else if (pacMan.posX <= 40) {pacMan.posX = 40;}
      break;
    case 38: //up arrow
      if (pacMan.posY > 40) {
        pacMan.posY -=step;
        clear();
        collides();
        if (collision == 1){
          pacMan.posY +=step;
          collision = 0;
        }
      }
      else if (pacMan.posY <= 40) {pacMan.posY = 40;}
      break;

    case 39: //right arrow
      if (pacMan.posX < 460) {
        pacMan.posX +=step;
        clear();
        collides();
        if (collision==1){
          pacMan.posX-=step;
          collision=0;
        }
      }
      else if (pacMan.posX >= 460) {pacMan.posX = 460;}
      break;

    case 40: //down arrow
      if (pacMan.posY < 460) {
        pacMan.posY +=step;
        clear();
        collides();
        if (collision==1){
          pacMan.posY-=step;
          collision=0;
        }
      }
      else if (pacMan.posY >= 460) {pacMan.posY = 460;}
      break;
  }
}

function collides() {
  var imgd = context.getImageData(x,y,15,15);
  var pix = imgd.data;
  for (var p= 0; p<(4*15*15); p+=4){
    if (pix[p]=== 0 || pix[p+1]===0 || pix[p+2]===0)
    {
      collision = 1;
    }
    else
    {
      collision = 0;
    }
  }
}






// function checkForWalls(){
//   var imgd = context.getImageData(endX,endY,15,15);
//   var pixArr = imgd.data;
// // pixArr is an array of RGBA colors. For one pixel, there are 4 types of colors.
// //   //pixArr[0] = red pixel 1, pixArr[1] = green pixel 1, pixArr[2] = blue pixel 1, pixArr[3] = alpha pixel 1, pixArr[4] = ** red pixel 2 ** ...
//   for (var i= 0; p = pixArr.length, i < p; i+=4) {
//     if (pixArr[i] == 0) {//color is black (ie. touches








window.addEventListener("keydown", movePacMan, true);

// Refactored Code






// Reflection
// Good god! I need to take a break. Javascript is SOOOOOO unbelievably frustrating! There's no immediate way of checking what the syntax error or any error is. I was dumbfounded for DAYS on how to even approach, let alone attempt, this challenge. I plotted for those days to come up with a simple enough game. Finally it came down to just a mazerunner-ish game, mostly because I lacked the foundation to knock this out of the park, partially because I'm so frustrated, I don't know how to go on, and partially because I've been trying to solve the same damn problem for 5 hours to no avail.
// That being said, I did accomplish a lot. I learned a bit about Canvas API, drawing an image onto it, etc. I was super stoked to get the logic down for the borders. They definitely could've been cleaner and less hard-coded, but honestly having had a crash course in Javascript that totals to fewer than a handful of days, I'm satisfied. For now.
// I've been going on and on and researching how to overcome not ghosting through the walls, ahhh frustrating as hell!!! I *KNOW* it can be done with detecting the black pixels, and I've tried it again and again in a few different ways. Gosh. I don't know if my logic was off or something. But again, it comes down to not being able to check what the heck my error is.
// I did discover JSHint. But God. It's Sunday night and my eyes are bloodshot and my brain fried since I've been doing this for the last couple days.
//
//
//
//