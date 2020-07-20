function init() {

  // * Game

  // DOM Elements
  const grid = document.querySelector('.grid')
  const start = document.querySelector('#loader-btn')
  const cells = []

  // Grid Values
  const width = 10
  const cellCount = width * width

  // Game Variables
  let linkPosition = 94
  let zeldaPosition = 4
  let enemyPosition = 0
  let randomEnemy = getRandomEnemyName()
  let bonusPosition = 0
  let randomBonus = getRandomBonusName()

  // Function - Link's Position
  function createGrid(linkPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cells.push(cell)
      // cell.innerHTML = i
      grid.appendChild(cell)
    }
    cells[linkPosition].classList.add('link')
  }

  // Function - Link's Movement
  function handleKeyUp(event) {

    cells[linkPosition].classList.remove('link')
    const x = linkPosition % width
    const y = Math.floor(linkPosition / width)

    switch (event.keyCode) { 
      case 39: 
        if (x < width - 1) linkPosition++
        break
      case 37:
        if (x > 0) linkPosition--
        break
      case 38:
        if (y > 0) linkPosition -= width
        break
      case 40:
        if (y < width - 1) linkPosition += width
        break
      default:
        console.log('invalid key do nothing') 
    }
    cells[linkPosition].classList.add('link') 
  }

  // Function - Zelda's Position
  function zeldasPosition(zeldaPosition) {
    cells[zeldaPosition].classList.add('zelda')
  }

  // Function - Random Enememy
  function getRandomEnemyName() {
    const names = ['gannon', 'robot']
    return names[Math.floor(Math.random() * names.length)]
  }

  // Function - Random Bonus
  function getRandomBonusName() {
    const bonusNames = ['bonus', 'speaker']
    return bonusNames[Math.floor(Math.random() * name.length)]
  }

  // Function = Game Logic
  function startGame() {
    enemyPosition = Math.floor(Math.random() * 100)
    randomEnemy = getRandomEnemyName()
    cells[enemyPosition].classList.add(randomEnemy)
    bonusPosition = Math.floor(Math.random() * 100)
    randomBonus = getRandomBonusName()
    cells[bonusPosition].classList.add(randomBonus)
  }


  createGrid(linkPosition)
  start.addEventListener('click', startGame)
  zeldasPosition(zeldaPosition)

  document.addEventListener('keyup', handleKeyUp)

}
window.addEventListener('DOMContentLoaded', init)