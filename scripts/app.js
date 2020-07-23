function init() {

  // * DOM Elements
  const grid = document.querySelector('.grid')
  const start = document.querySelector('#loader-btn')
  const cells = []

  // * Grid Values
  const width = 10
  const cellCount = width * width
  const enemyPositions = [10, 20, 30, 40, 50, 60, 70, 80]
  const levelsDisplay = document.querySelector('#level-display')
  const livesDisplay = document.querySelector('#life-display')
  const pointsDisplay = document.querySelector('#point-display')

  // * Game Variables
  let linkPosition = 94
  const zeldaPosition = 3
  let enemyPosition = 0
  let totalEnemies = 0
  let randomEnemy = getRandomEnemyName()
  let bonusPosition = 0
  let randomBonus = getRandomBonusName()
  let levels = 1
  let lives = 5
  let points = 0
  let timer = null

  // * Functions for charchters, enemies and items
  // Function - Link's Position
  function createGrid(linkPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cells.push(cell)
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
      randomBonusPosition()
      addLink()
    }
    gameWin()
    gameLoose()
    levelsDisplay.textContent = levels
    livesDisplay.textContent = lives
    pointsDisplay.textContent = points
  }

  // * Winning or loosing function
  // Game win
  function gameWin() {
    if (levels === 6) {
      winFadeIn()
      // removeAllEnemies()
      // removeLink()
      // removeBonus()
    }
  }

  // Game loose
  function gameLoose() {
    if (lives === 0) {
      looseFadeIn()
      removeAllEnemies()
      removeLink()
      removeBonus()
    }
  }

  // * Functions for Collision Logic
  // Function - Add Link
  function addLink() {
    cells[linkPosition].classList.add('link')
  }

  // Function - Remove Link
  function removeLink() {
    cells[linkPosition].classList.remove('link')
  }

  // Function - Random Bonus
  function randomBonusPosition() {
    bonusPosition = Math.floor(Math.random() * 100)
    randomBonus = getRandomBonusName()
    cells[bonusPosition].classList.add(randomBonus)
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

  // Function - Restart Points
  function restartPoints() {
    points -= points
    pointsDisplay.innerHTML = points
  }

  // Function - Restart Level
  function restartLevel() {
    levels -= levels
    levelsDisplay.innerHTML = levels
  }

  // Function - Restart Level
  function restartLives() {
    lives -= lives
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
    const bonusNames = ['bonus']
    return bonusNames[Math.floor(Math.random() * name.length)]
  }

  // * Functions for Enemy Movement
  // Function - Remove Enemies
  function removeAllEnemies() {
    clearInterval(timer)
    removeEnemies()
  }

  // Function - Remove Enemies + 1
  function removeEnemies() {
    enemyPositions.forEach(enemy => cells[enemyPosition + enemy].classList.remove(randomEnemy))
  }

  // Function - Create Enemies
  function createEnemies() {
    randomEnemy = getRandomEnemyName()
    enemyPositions.forEach(enemy => cells[enemyPosition + enemy].classList.add(randomEnemy))
  }

  function moveEnemies() {
    enemyPosition = 0
    timer = setInterval(() => {
      removeEnemies()
      enemyPosition = enemyPosition + 1
      createEnemies()
      totalEnemies++
      console.log('enemyPosition moving', enemyPosition)
      if (totalEnemies === 10) {
        clearInterval(timer)
        totalEnemies = 0
        cells.forEach(cell => cell.classList.remove('gannon', 'robot'))
        moveEnemies()
      }
    }, 500)
  }

  // * Functions for Game Logic
  // Function - Enemy Logics
  function gameLogic() {
    moveEnemies()
    createEnemies()
    randomBonusPosition()
  }

  // * Listeners
  createGrid(linkPosition)
  zeldasPosition(zeldaPosition)
  start.addEventListener('click', gameLogic)
  document.addEventListener('keyup', handleKeyUp)



  // * Audio
  // Variables
  const playBtn = document.querySelector('#play-btn')
  const audio = document.querySelector('#audio')
  
  // Function
  function playSound() {
    audio.src = 'audio/main-theme.mp3'
    audio.play()
  }

  // Listener
  playBtn.addEventListener('click', playSound)



  // * Introduction
  // Variables
  const loaderBtn = document.querySelector('#loader-btn')
  const loader = document.querySelector('#loader1')

  // Function
  function fadeOut() {
    loader.style.opacity = '0'
  }

  // Listener
  loaderBtn.addEventListener('click', fadeOut)



  // * Fade In - Win
  // Fade In - Variable
  const winFade = document.querySelector('#win1')

  // Fade In - Function
  function winFadeIn() {
    if (gameWin === gameWin) {
      winFade.style.opacity = '1'
      removeAllEnemies()
      removeLink()
      removeBonus() 
    }
  }

  // * Fade In - Loose
  // Fade In Variable
  const looseFade = document.querySelector('#loose1')

  // Fade In Function
  function looseFadeIn() {
    if (gameLoose === gameLoose) {
      looseFade.style.opacity = '1'
    }
  }



  // * Fade Out - Win
  // Fade Out - Variable
  const winBtn = document.querySelector('#win-btn')
  const winLoader = document.querySelector('#win1')
    
  // Fade Out - Function
  function winFadeOut() {
    winLoader.style.opacity = '0'
    gameLogic()
    addLink()
    restartPoints()
    restartLevel() 
  }
    

  // * Fade Out - Loose
  // Fade Out - Variable
  const looseBtn = document.querySelector('#loose-btn')
  const looseLoader = document.querySelector('#loose1')
    
  // Fade Out - Function
  function looseFadeOut() {
    looseLoader.style.opacity = '0'
  }
    
  // Fade Out - Listners
  console.log(looseFadeOut)
  winLoader.addEventListener('click', winFadeOut)
  looseLoader.addEventListener('click',looseFadeOut)




}
window.addEventListener('DOMContentLoaded', init)