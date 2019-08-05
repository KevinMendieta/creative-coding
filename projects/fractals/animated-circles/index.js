const WIDTH = 1080
const HEIGHT = 960
const MAX_CHILDS = 8
let COUNT = 0
let CICLES = [[{x: WIDTH / 2, y: HEIGHT / 2, d: 250, type: 'central'}]]

function setup() {
  createCanvas(WIDTH, HEIGHT)
  background(0, 0, 0)
}

function draw() {
  frameRate(1)
  if (COUNT < MAX_CHILDS - 1) {
    CICLES.forEach(circles => {
      circles.forEach(({x, y, d}) => {
        noFill()
        stroke('#ffff')
        ellipse(x, y, d, d)
      })
    })
    console.log(CICLES[COUNT].length)
    CICLES[COUNT + 1] = []
    for(let i = 0; i < CICLES[COUNT].length; i++) {
      CICLES[COUNT + 1] = [...CICLES[COUNT + 1], ...generateCircles(CICLES[COUNT][i])]
    }
    COUNT = COUNT + 1
  } else {
    noLoop()
  }
}

const generateCircles = (circle) => {
  const {x, y, d, type} = circle
  const r = d / 2
  const newR = r / 2 
  if (type === 'up') {
    return [
      {x: x - newR - r, y: y, d: r, type: 'left'},
      {x: x + newR + r, y: y, d: r, type: 'rigth'},
      {x: x, y: y - newR - r, d: r, type: 'up'}
    ]
  } else if (type === 'down') {
    return [
      {x: x - newR - r, y: y, d: r, type: 'left'},
      {x: x + newR + r, y: y, d: r, type: 'rigth'},
      {x: x, y: y + newR + r, d: r, type: 'down'}
    ]
  } else if (type === 'left') {
    return [
      {x: x, y: y - newR - r, d: r, type: 'up'},
      {x: x, y: y + newR + r, d: r, type: 'down'},
      {x: x - newR - r, y: y, d: r, type: 'left'}
    ]
  } else if (type === 'rigth') {
    return [
      {x: x, y: y - newR - r, d: r, type: 'up'},
      {x: x, y: y + newR + r, d: r, type: 'down'},
      {x: x + newR + r, y: y, d: r, type: 'rigth'}
    ]
  } else {
    return [
      {x: x, y: y - newR - r, d: r, type: 'up'},
      {x: x, y: y + newR + r, d: r, type: 'down'},
      {x: x + newR + r, y: y, d: r, type: 'rigth'},
      {x: x - newR - r, y: y, d: r, type: 'left'}
    ]
  }
}
