function init() {


  // * DOM Elements
  const grid = document.querySelector('.grid')
  const start = document.querySelector('#loader-btn')
  const cells = []


  // * Grid Values
  const width = 10
  const cellCount = width * width
  const enemies = [
    {
      name: 'enemy1',
      speed: 1000,
      class: 'gannon',
      timerId: 'enemyTimer1',
      startingPosition: 10,
      currentPosition: 10
    },
    {
      name: 'enemy2',
      speed: 2000,
      class: 'robot',
      timerId: 'enemyTimer2',
      startingPosition: 20,
      currentPosition: 20
    },
    {
      name: 'enemy3',
      speed: 1500,
      class: 'gannon',
      timerId: 'enemyTimer3',
      startingPosition: 30,
      currentPosition: 30
    },
    {
      name: 'enemy4',
      speed: 2500,
      class: 'robot',
      timerId: 'enemyTimer4',
      startingPosition: 40,
      currentPosition: 40
    },
    {
      name: 'enemy5',
      speed: 1000,
      class: 'gannon',
      timerId: 'enemyTimer5',
      startingPosition: 50,
      currentPosition: 50
    },
    {
      name: 'enemy6',
      speed: 2000,
      class: 'robot',
      timerId: 'enemyTimer6',
      startingPosition: 60,
      currentPosition: 60
    },
    {
      name: 'enemy7',
      speed: 2000,
      class: 'gannon',
      timerId: 'enemyTimer3',
      startingPosition: 70,
      currentPosition: 70
    },
    {
      name: 'enemy8',
      speed: 3000,
      class: 'robot',
      timerId: 'enemyTimer4',
      startingPosition: 80,
      currentPosition: 80
    }
  ]
  const levelsDisplay = document.querySelector('#level-display')
  const livesDisplay = document.querySelector('#life-display')
  const pointsDisplay = document.querySelector('#point-display')


  // * Game Variables
  let linkPosition = 94
  const zeldaPosition = 3
  let bonusPosition = 0
  let randomBonus = getRandomBonusName()
  let levels = 1
  let lives = 5
  let points = 0


  // * Functions for charchters, enemies and items
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
      removeLink()
      removeBonus()
      removeAllEnemies()
    }
  }
  // Game loose
  function gameLoose() {
    if (lives === 0) {
      looseFadeIn()
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

  // Function - Restart Life
  function restartLife() {
    lives = 5
    livesDisplay.innerHTML = lives
  }

  // Function - Restart Life
  function levelLife() {
    levels = 1
    levelsDisplay.innerHTML = levels
  }
  
  // Function - Has Enemy
  function hasEnemy() {
    return cells[linkPosition].classList.contains('gannon') || cells[linkPosition].classList.contains('robot')
  }

  // Function - Zelda's Position
  function zeldasPosition(zeldaPosition) {
    cells[zeldaPosition].classList.add('zelda')
  }

  // Function - Random Bonus
  function getRandomBonusName() {
    const bonusNames = ['bonus', 'speaker']
    return bonusNames[Math.floor(Math.random() * name.length)]
  }

  // * Functions for Enemy Movement
  // Function - Remove Enemies
  function removeEnemies() {
    enemies.forEach(enemy => {3
      const position = enemy.currentPosition === enemy.startingPosition + width ? enemy.startingPosition : enemy.currentPosition
      console.log('position remove', position)
      console.log('cells position remove', cells[position])
      cells[position].classList.remove(enemy.class)
    })
  }

  // Function - Remove ALL Enemies
  function removeAllEnemies() {
    enemies.forEach(enemy => clearInterval(enemy.timerId))
    cells.forEach(cell => cell.classList.remove('gannon', 'robot'))
  }

  // Function - Create Enemies
  function createEnemies() {
    enemies.forEach(enemy => {
      const position = enemy.currentPosition === enemy.startingPosition + width ? enemy.startingPosition : enemy.currentPosition 
      console.log('position add', position)
      console.log('cells position add', cells[position])
      cells[position].classList.add(enemy.class)
    })
  }

  function moveEnemies(enemy) {
    enemy.currentPosition = enemy.startingPosition
    enemy.timerId = setInterval(() => {
      removeEnemies()
      enemy.currentPosition = enemy.currentPosition + 1
      createEnemies()
      if (enemy.currentPosition === (enemy.startingPosition + width)) {
        console.log('meeting condition')
        clearInterval(enemy.timerId)
        // totalEnemies = 0
        cells.forEach(cell => cell.classList.remove('gannon', 'robot'))
        moveEnemies(enemy)
      }
    }, enemy.speed)
  }

  // * Functions for Game Logic
  // Function - Enemy Logics
  function gameLogic() {
    enemies.forEach(enemy => moveEnemies(enemy))
    createEnemies()
    randomBonusPosition()
  }

  // * Listeners
  createGrid(linkPosition)
  zeldasPosition(zeldaPosition)
  start.addEventListener('click', gameLogic)
  document.addEventListener('keyup', handleKeyUp)



  // * Audio
  const playBtn = document.querySelector('#play-btn')
  const audio = document.querySelector('#audio')
  function playSound() {
    audio.src = 'audio/main-theme.mp3'
    audio.play()
  }

  // Audio Listener
  playBtn.addEventListener('click', playSound)





  // * Intro Fade Out
  const loaderBtn = document.querySelector('#loader-btn')
  const loader = document.querySelector('#loader1')
  function fadeOut() {
    loader.style.opacity = '0'
  }

  // Fade Out Listner
  loaderBtn.addEventListener('click', fadeOut)




// * Fade In - Win
  // Fade In - Variable
  const winFade = document.querySelector('#win1')

  // Fade In - Function
  function winFadeIn() {
    if (gameWin === gameWin) {
      winFade.style.opacity = '1'
    }
  }

  // * Fade In - Loose
  // Fade In Variable
  const looseFade = document.querySelector('#loose1')

  // Fade In Function
  function looseFadeIn() {
    if (gameLoose === gameLoose) {
      looseFade.style.opacity = '1'
      removeLink()
      removeBonus()
    }
  }



  // * Fade Out - Win
  // Fade Out - Variable
  const winBtn = document.querySelector('#win-btn')
  const winLoader = document.querySelector('#win1')
    
  // Fade Out - Function
  function winFadeOut() {
    winLoader.style.opacity = '0'
    restartPoints()
    restartLife()
    levelLife()
    gameLogic()
    addLink()
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