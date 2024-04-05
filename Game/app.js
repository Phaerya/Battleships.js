const optionContainer = document.querySelector('.option-container')
const flipButton = document.querySelector('#flip-button')
const gamesBoardContainer = document.querySelector('#gamesboard-container')

// Option choosing
let angle = 0
function flip () {
  const optionShips = Array.from(optionContainer.children)
  angle = angle === 0 ? 90 : 0
  optionShips.forEach(function (optionShip) {
    optionShip.style.transform = `rotate(${angle}deg)`
  })
}

flipButton.addEventListener('click', flip)

// Creating boards
const width = 10

function createBoard (color, user) {
  const gameBoardContainer = document.createElement('div')
  gameBoardContainer.classList.add('game-board')
  gameBoardContainer.style.backgroundColor = color
  gameBoardContainer.id = user

  for (let i = 0; i < width * width; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    block.id = i
    gameBoardContainer.append(block)
  }
  gamesBoardContainer.append(gameBoardContainer)
}

createBoard('aqua', 'player')
createBoard('pink', 'computer')

class Ship {
  constructor (name, length) {
    this.name = name
    this.length = length
  }
}

const destroyer = new Ship('destroyer', 2)
const submarine = new Ship('submarine', 3)
const cruiser = new Ship('submarine', 3)
const battleship = new Ship('submarine', 4)
const carrier = new Ship('submarine', 5)

const ships = [destroyer, submarine, cruiser, battleship, carrier]

function addShipPiece (ship) {
  const allBoardBlocks = document.querySelectorAll('#computer div')
  const randomBoolean = Math.random() < 0.5
  const isHorizontal = randomBoolean
  const randomStartIndex = Math.floor(Math.random() * width * width)

  const shipBlocks = []

  for (let i = 0; i < ship.length; i++) {
    if (isHorizontal) {
      shipBlocks.push(allBoardBlocks[Number(randomStartIndex) + i])
    } else {
      shipBlocks.push(allBoardBlocks[Number(randomStartIndex) = i * width])
    }
  }
}

addShipPiece()
