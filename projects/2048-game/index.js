const WIDTH = 1080
const HEIGHT = 1080
const BOARD = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

function setup() {
  createCanvas(WIDTH, HEIGHT)
  const [x, y] = genCoords()
  BOARD[x][y] = 2
  const [x2, y2] = genCoords()
  BOARD[x2][y2] = 2
  console.table(BOARD)
}

function draw() {
  background(0, 0, 0)
  drawBoard()
}

const genCoords = () => {
  return [floor(random(0, 3)), floor(random(0, 3))]
}

const drawBoard = () => {
  textAlign(CENTER)
  const offSet = WIDTH * 0.1
  const xProp = WIDTH * 0.2, yProp = HEIGHT * 0.2
  textSize(xProp / 4)
  BOARD.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      noFill()
      stroke('#ffff')
      const x  = offSet + (cellIndex * xProp), y = offSet + (rowIndex * xProp)
      rect(x, y, xProp, xProp)
      fill('#ffff')
      stroke('#ffff')
      text(cell, x + xProp / 2, y + xProp / 2)
    })
  })
} 
