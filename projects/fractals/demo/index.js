const WIDTH = 1080
const HEGIHT = 720

function setup() {
  createCanvas(WIDTH, HEGIHT)
}

function draw() {
  background(0, 0, 0)
  noFill()
  stroke('#ffff')
  drawCircle(WIDTH / 2, HEGIHT / 2, 200, 200)
}

const drawCircle = (x, y, d) => {
  ellipse(x, y, d, d)
  if (d > 10) {
    const newD = d / 2
    drawCircle(x + newD / 2 + newD, y, newD, newD)
    drawCircle(x - newD / 2 - newD, y, newD, newD)
    drawCircle(x, y - newD / 2 - newD, newD, newD)
    drawCircle(x, y + newD / 2 + newD, newD, newD)
  }
}
