let pos = 0;
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];
let direction = 0;
const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = 'PacMan1.png';
  newimg.width = 100;

  // setting position 
  newimg.style.left = position.x;
  newimg.style.right = position.y;

  // adds a new Child image to game
  game.appendChild(newimg); 

  // returns the details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loops over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

//Boundary collision and bounce
function checkCollisions(item) {
  let posX = item.position.x;
  let posY = item.position.y;
  let velX = item.velocity.x;
  let velY = item.velocity.y;

  if (posX + velX + item.newimg.width > window.innerWidth || 
      posX + velX < 0 ) item.velocity.x = -item.velocity.x;
      //velX = - velX;

  if (posY + velY + item.newimg.height > window.innerHeight ||
      posY + velY < 0 ) item.velocity.y = -item.velocity.y;
      //velY = - velY;

}

// adds a new PacMan
function makeOne() {
  pacMen.push(makePac()); 
}
