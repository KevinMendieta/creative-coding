const FACTOR = 3
const MAX_ELEMENTS = 1080 / FACTOR
const ELEMENTS = []
let TEMP = []
let LEN = 0
let I = 1

function setup() {
  createCanvas(1080, 720)
  
  for(let i = 0; i < MAX_ELEMENTS; i++) {
    ELEMENTS[i] = floor(random(1, 100))
  }

  TEMP = [...ELEMENTS]
  LEN = TEMP.length - 1
  ELEMENTS.forEach((element, index) => {
    rect(FACTOR * index, 720 - (element * 5), FACTOR, element * 10)
  })
  console.log(ELEMENTS)
  //console.log(sort(ELEMENTS))
  frameRate(1)
}

function draw() {
  if (I <= LEN) {
    for (let j = 0; j < LEN; j = j + 2*I) {
      const from = j
      const mid = j + I - 1
      const to = min(j + 2 * I - 1, LEN)
      merge(ELEMENTS, TEMP, from, mid, to)

      background(0, 0, 0)
      stroke(0, 0, 0)
      fill('#ffff')
      ELEMENTS.forEach((element, index) => {
        rect(FACTOR * index, 720 - (element * 5), FACTOR, element * 10)
      })
    }
    I = I * 2
  } else {
    noLoop()
  }
}

const sort = elements => {
  const len = elements.length - 1
  const temp = [...elements]
  for(let i = 1; i <= len; i = i * 2) {
    for (let j = 0; j < len; j = j + 2*i) {
      const from = j
      const mid = j + i - 1
      const to = min(j + 2 * i - 1, len)
      merge(elements, temp, from, mid, to)
    }
  }
  return elements
}

const merge = (elements, temp, from, mid, to) => {
  let k = from, i = from, j = mid + 1
  while (i <= mid && j <= to) {
    if (elements[i] < elements[j]) {
      temp[k] = elements[i]
      i = i + 1
    } else {
      temp[k] = elements[j]
      j = j + 1
    }
    k = k + 1
  }

  while (i <= mid) {
    temp[k] = elements[i]
    k = k + 1
    i = i + 1
  }

  for (i = from; i <= to; i++) {
    elements[i] = temp[i]
  }
}
