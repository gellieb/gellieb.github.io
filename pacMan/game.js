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

// Pseudocode
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
//
//
// Initial Code

var canvas;
var context;
var WIDTH = 500;
var HEIGHT = 500;
var dotsEatenCount = 0;

var pacMan= {posX: 400, posY: 20, width: 10};
var mazeImg = new Image();




// var pacStartX = 400;
// var pacStartY = 20;

// var collision = 0;

// var pacMan;
// var ghost;
// var dot;
// var dotsEatenCount = 0;
// var maxDotsInRound = 20;
// var moveDirection = 'up';

// var pacManHeight = 20;
// var pacManWidth = 20;



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
  mazeImg.src = "http://www.hereandabove.com/cgi-bin/maze?20+20+20+2+10+0+0+0+255+255+255";
  return setInterval(draw, 10);
}

function draw() {
  clear();
  context.beginPath();
  context.arc(pacMan.posX, pacMan.posY, pacMan.width, 0, 2*Math.PI, true);
  context.closePath();
  context.fillStyle = "yellow";
  context.fill();
}


function clear() {
  context.clearRect(0,0,WIDTH,HEIGHT);
  context.drawImage(mazeImg,0,0);
}






// Refactored Code






// Reflection
//
//
//
//
//
//
//
//