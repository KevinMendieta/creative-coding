const WIDTH = 1080
const HEIGHT = 720

function setup() {
  createCanvas(WIDTH, HEIGHT)
  background(0)
  noFill()
}

function draw() {
  drawCircle(WIDTH / 2, HEIGHT / 2, 250, 250)
}

const drawCircle = (x, y, d) => {
  pickColor()
  ellipse(x, y, d, d)
  if (d > 10) {
    const newD = d / 2
    drawCircle(x + d / 2 + newD / 2, y, newD, newD)
    drawCircle(x - d / 2 - newD / 2, y, newD, newD)
    drawCircle(x, y + d / 2 + newD / 2, newD, newD)
    drawCircle(x, y - d / 2 - newD / 2, newD, newD)
  }
}

const pickColor = () => {
  const r = floor(random(0,255)),
    g = floor(random(0,255)),
    b = floor(random(0,255)) 

    stroke(r, g, b)
}
