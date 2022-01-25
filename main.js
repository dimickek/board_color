const container = document.querySelector('#board')
const SQUARES_NUMBER = 1000
const colors = [
  '#F4A460',
  '#00FFFF',
  '#66CDAA',
  '#FF0000',
  '#F08080',
  '#BC8F8F',
  '#DEB887',
  '#F5DEB3',
  '#FFE4C4',
  '#00008B',
  '#00BFFF',
]

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => {
    setColor(square)
  })

  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })

  board.append(square)
}

function setColor(elem) {
  const color = getRandomColor()
  elem.style.backgroundColor = color
  elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elem) {
  elem.style.backgroundColor = '#dbdbdb'
  elem.style.boxShadow = '0 0 2px #dbdbdb'
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
