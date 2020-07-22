function init() {

  // * Game

  // DOM Elements
  const grid = document.querySelector('.grid')
  const start = document.querySelector('#loader-btn')
  const cells = []

  // Grid Values
  const width = 10
  const cellCount = width * width
  const enemyPositions = [10, 20, 30, 40, 50, 60, 70, 80]
  const levelsDisplay = document.querySelector('#level-display')
  const livesDisplay = document.querySelector('#life-display')
  const pointsDisplay = document.querySelector('#point-display')

  // Game Variables
  let linkPosition = 94
  let zeldaPosition = 3
  let enemyPosition = 0
  let totalEnemies = 0
  let randomEnemy = getRandomEnemyName()
  let bonusPosition = 0
  let randomBonus = getRandomBonusName()
  let levels = 1
  let lives = 5
  let points = 0
  let timer = null

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
        console.log('Do nothing') 
    }
    cells[linkPosition].classList.add('link')

    if (hasEnemy()) {
      console.log('you have been hit')
      removeLink()
      removeLife()
      linkPosition = 94
      addLink()
    }

    if (cells[linkPosition].classList.contains('bonus')) {
      console.log('you have been hit the bonus')
      removeBonus()
      addPoints(1000)
    }

    if (cells[linkPosition].classList.contains('zelda')) {
      console.log('you win')
      addPoints(5000)
      addLevel()
      removeLink()
      removeBonus()
      linkPosition = 94
      addBonus()
      addLink()
    }

    if (levels === 6) {
      alert('You win!', levels)
    }

    if (lives === 0) {
      console.log('Game over')
      alert('Game over!', lives)
    }

    levelsDisplay.textContent = levels
    livesDisplay.textContent = lives
    pointsDisplay.textContent = points

  }

  // Function - Add Link
  function addLink() {
    cells[linkPosition].classList.add('link')
  }

  // Function - Remove Link
  function removeLink() {
    cells[linkPosition].classList.remove('link')
  }

  // Function - Add Bonus
  function addBonus() {
    cells[bonusPosition].classList.add('bonus')
  }

  // Function - Remove Bonus
  function removeBonus() {
    cells[bonusPosition].classList.remove('bonus')
  }

  // Function - Update Points
  function addPoints(amount) {
    points += amount
    pointsDisplay.innerHTML = points
  }

  // Function - Update Level
  function addLevel() {
    levels++ 
    levelsDisplay.innerHTML = levels
  }

  // Function - Remove Life
  function removeLife() {
    lives--
    livesDisplay.innerHTML = lives
  }

  // Function - Has Enemy
  function hasEnemy() {
    return cells[linkPosition].classList.contains('gannon') || cells[linkPosition].classList.contains('robot')
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

  // Function - Create Enemies
  function createEnemies() {
    // enemyPosition = (Math.floor(Math.random() * (9 - 1) + 1)) * 10
    randomEnemy = getRandomEnemyName()
    enemyPositions.forEach(enemy => cells[enemyPosition + enemy].classList.add(randomEnemy))
  }

  // Function - Game Logic
  function startGame() {
    timer = setInterval(() => {
      // if (totalEnemies > 10) {
      //   clearInterval(timer) 
      //   cells[enemyPosition].classList.remove(randomEnemy)
      // }
      enemyPositions.forEach(enemy => cells[enemyPosition + enemy].classList.remove(randomEnemy))
      enemyPosition = enemyPosition + 1
      createEnemies()
      totalEnemies++
    }, 1000)
    createEnemies()
    bonusPosition = Math.floor(Math.random() * 100)
    randomBonus = getRandomBonusName()
    cells[bonusPosition].classList.add(randomBonus)
  }

  createGrid(linkPosition)
  start.addEventListener('click', startGame)
  zeldasPosition(zeldaPosition)

  document.addEventListener('keyup', handleKeyUp)


  // * Audio

  const playBtn = document.querySelector('#play-btn')
  const audio = document.querySelector('#audio')
  
  function playSound() {
    audio.src = 'audio/main-theme.mp3'
    audio.play()
  }

  playBtn.addEventListener('click', playSound)

}
window.addEventListener('DOMContentLoaded', init)