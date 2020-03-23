const WIDTH = 1080
const HEGIHT = 720

let slider

function setup() {
  slider = createSlider(1, 27, 1, 1)
  slider.position(10, 10)
  slider.style('width', '1000px')

  createCanvas(WIDTH, HEGIHT)
  background(0, 0, 0)
  noFill()

  stroke('#fffff')
  circle(WIDTH / 2, HEGIHT / 2, 500)

  stroke('#00CDFF')
  createPolygon(WIDTH / 2, HEGIHT / 2, 250, 4)

  noStroke()
  fill(0, 102, 153)
  textStyle(BOLD)
  textFont('Helvetica')
  textSize(40)
  text(`${calculatePI(1)} = arquimides pi`, 10, 60)
  fill('#F41343')
  text('3.1415926535897932 = pi', 10, 100)
  fill(0, 102, 153)
  text('N = 1', WIDTH / 2, HEGIHT / 2)
  text(`SIDES: 4`, 10, 650)
}

function touchEnded() {
  const numberOfSides = Math.pow(2, slider.value() + 1)
  console.log(slider.value())
  background(0, 0, 0)
  noFill()

  stroke('#fffff')
  circle(WIDTH / 2, HEGIHT / 2, 500)

  stroke('#00CDFF')
  createPolygon(WIDTH / 2, HEGIHT / 2, 250, (numberOfSides < 261000 ? numberOfSides : 260000))

  noStroke()
  fill(0, 102, 153)
  text(`${calculatePI(slider.value())} = arquimides pi`, 10, 60)
  fill('#F41343')
  text('3.1415926535897932 = pi', 10, 100)
  fill(0, 102, 153)
  text(`N = ${slider.value()}`, WIDTH / 2, HEGIHT / 2)
  text(`SIDES: ${numberOfSides}`, 10, 650)
}

const calculatePI = (numberOfSides) => {
  angleMode(DEGREES)
  const pi = Math.pow(2, numberOfSides + 1) * sin(45/(Math.pow(2, numberOfSides - 1)))
  angleMode(RADIANS)
  return pi
}

const createPolygon = (x, y, radius, numberOfSides) => {
  console.log(numberOfSides)
  const angle = TWO_PI / numberOfSides
  beginShape()
  for (let theta = 0; theta < TWO_PI; theta += angle) {
    const sx = x + cos(theta) * radius;
    const sy = y + sin(theta) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
