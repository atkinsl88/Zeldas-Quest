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
  const levelDisplay = document.querySelector('#level-display')
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
  let points = 0
  let lives = 5

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

    if (cells[linkPosition].classList.contains('gannon') || 
        cells[linkPosition].classList.contains('robot')) {
      console.log('you have been hit')
      return cells[linkPosition].classList.remove('link') ||
      cells[linkPosition = lives -= 1].classList.contains('gannon', 'robot') ||
      cells[linkPosition = 94].classList.add('link')
    }

    if (cells[linkPosition].classList.contains('bonus')) {
      console.log('you have been hit the bonus')
      return cells[bonusPosition].classList.remove('bonus') ||
      cells[bonusPosition = points += 1000].classList.contains('bonus')
    }

    if (cells[linkPosition].classList.contains('zelda')) {
      console.log('you win')
      return cells[zeldaPosition].classList.add('zeldaLink') ||
      cells[zeldaPosition = points += 5000].classList.contains('zelda') ||
      cells[linkPosition = levels += 1].classList.contains('zelda')
    }

    pointsDisplay.textContent = points
    livesDisplay.textContent = lives
    levelDisplay.textContent = levels

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
    const timer = setInterval(() => {
      // if (totalEnemies > 10) {
      //   clearInterval(timer) 
      //   cells[enemyPosition].classList.remove(randomEnemy)
      //   // alert(score)
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
  console.log(playSound, 'called!')

}
window.addEventListener('DOMContentLoaded', init)