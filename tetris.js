const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");

context.scale(20, 20);

const matrix = [[0, 0, 0], [1, 1, 1], [0, 1, 0]];

function draw() {
  // defining PlayScreen, BGcolor, dimensions, this will also clear the canvas every Frame

  context.fillStyle = "#000";
  context.fillRect(0, 0, canvas.clientWidth, canvas.height);
  drawMatrix(player.matrix, player.pos);
}

function drawMatrix(matrix, offset) {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        context.fillStyle = "red";
        //Will draw a Rect on position x and y with width 1 and height 1
        context.fillRect(x + offset.x, y + offset.y, 1, 1);
      }
    });
  });
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;

  dropCounter += deltaTime;
  //Drop every Secound
  if (dropCounter > dropInterval) {
      player.pos.y++; 
      dropCounter = 0;
  }
  console.log(dropCounter)
  draw();
  requestAnimationFrame(update);
}

const player = {
  pos: { x: 5, y: 5 },
  matrix: matrix
};

update();
