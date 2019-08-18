/* - Version 2.0 - 2-Feb-2019
 * Game.js
 * Main script file for js game
 * This version uses the gameUtils.js file
 * This version uses the input.js, resources.js and sprite.js
 * Adapted from http://jlongster.com/Making-Sprite-based-Games-with-Canvas

 Make a copy of this file for reference

 */

/* 1. Global Variable Declaration
*/
var gameCanvas = new myCanvas('game_canvas');
var gameSpeed = 5;
var center = {x:gameCanvas.width / 2, y:gameCanvas.height / 2};
/*User global variables*/

/* 2. Load the sprite sheets and images into a resources array
-use a comma separated list, as per example
*/
resources.load([
  'images/',
]);
resources.onReady(init);

/* 3. Game Objects*/
//Singletons
var player = {
  speed: gameSpeed, 
  pos: {x:center.x-32,y:center.y-62},
  sprite: new Sprite('images/.png', 
    [0, 0], 
    [64, 95], //size_in_img[x,y]
    15, 
    [0, 1, 2, 1],
    'horizontal',
    false, 
    0, 
    [1,1],
    1, 
    {x:0, y:15}, 
  ),
};

//Background
var background = {
  speed: 0,
  pos: {x: 0,y: 0},
  sprite: new Sprite('images/field_map.gif', [0, 0], [1024, 768])
};

//Arrays
var bullets = [];
var explosions = [];


/* 4. Settings for game logic
 *
 */
var gameOver = false;
var score = 0;
var lives = 3;

/* 5.  Getting ready to load the game
*/
function init() {
  reset();
  lastTime = Date.now();
  gameLoop();
}

function reset() {
  gameOver = false;
  lives = 3;
  score = 0;

  alien_timer = 2;
};


function gameLoop() {
  var now = Date.now();
  var dt = (now - lastTime) / 1000.0;
  if (dt > 0.15) {
    dt = 0.15;
  } 

  fall_time += dt;
  update(dt);
  render();
  lastTime = now;
  if (!gameOver) {
    requestAnimationFrame(gameLoop); 
  }
};


function update(dt) {

  /*
  Step 1 - handle keyboard inputs in the gameLoop
  */
  handleInput(dt); //keyboard logic in this function

  /*
  Step 2 - update any animations (not movement, animations, like moving legs)
    player.sprite.update(dt);
  */

  /*
  Step 3 - Calculate all new locations
  - check if off screen
  */

  /*
    Step 4 - Check collisions
     - in here you would then fire up explosions etc...just other objects!
     - you would also remove old objects here
  */

   /*
  Step 5 - Create new objects [eg bad guys, cars, rocks, whatever]
  */

}

function render() {
  /*
  This is the function where all the objects are deleted and redrawn
  */

  gameCanvas.clear();
  // renderEntity(background);

  /*
  update objects
    Singletons: renderEntity(name);
    Multiples (ie arrays): renderEntities(array_name);
  */

  /*
  Other things to do
   - Update HTML elements, such as score, lives etc...
   */
  document.getElementById('score').innerHTML = score;
}



/*Variables specific to keyboard interaction*/
var curKey = null;
var moveSize = 0.05;

function handleInput(dt) {
  /*
    Arrow keys are labelled
    'DOWN' 'UP' 'LEFT' 'RIGHT'
    'SPACE' is also defined

    All other keys are their character code
    If you want to define other special keys see jsLib\input.js
    Eg:

    if(input.isDown('D')){
      //Your logic here - ie what to do when D is pressed
      curKey = 'D';
    }
  */
}

/*
  Mouse Functions - Add functionality to events here

    pos is object {x,y} in canvas-relative pixels
    button is 0=left, 1=centre, 2=right
    event allows you to detect many other things
    -Eg event.ctrlKey is true if the ctrl key was pressed while mouse click happened
    -see https://developer.mozilla.org/en-US/docs/Web/Events/click
*/
function handleMouseMove(pos, event) {
}
function handleMouseScroll(pos, event) {
}
function handleMouseClick(pos, button, event) {
}
function handleMouseDblClick(pos, button, event){
}
function handleMouseDown(pos, button, event){
}
function handleMouseUp(pos, button, event){
}

/*
  Create custom functions here to simplify game logic in the loop
*/
function loseLife() {

  //take a life away
  lives--;

  if (lives == 0) {
    gameOver = true;
  } else {
    // playerReset();
  }

}
