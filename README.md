# Zelda's Quest

Description: JavaScript based 'Frogger' game.</br>
Author: Liam Atkins</br>
Link: https://zeldas-quest.netlify.app/

## Introduction
<p>The Kingdom of Hyrule is under attack from the evil Calamity Gannon, who has taken over the divine beasts and guardians, turning them into evil death machines. Zelda, the princess of Hyrule is trapped in Hyrule Castle and needs saving. Help our hero, Link, free the evil from the divine beasts by travelling across Hyrule and defeating Calamity Gannon once and for all.</p>
<p>Win - Link joins Zelda on her new quest, to restore Hyrule Kingdom and make it even better than it was before. She sets off to start work on maintaining the Divine Beasts and Guardians so that future generations are ready for the cursed threat that will rise again.</p>
<p>Loose - Unfortunately you didn’t survive the fight, and perished at the hands of Ganon’s evil. Daruk, Urbosa, Mipha, and Revali all had their spirits sealed within the ancient technology as a mutated being, powered by Ganon’s malice, took their place.</p>

<img src="/assets/screen-shot.jpg" alt="">

## Controls
<p>Up, Down, Left and Right</p>

## Languages
<p>HTML, CSS and JavaScript (Vanilla)</p>

# JavaScript Technical Walkthrough

## DOM Elements
```
  // * DOM Elements
  const grid = document.querySelector(‘.grid’)
  const start = document.querySelector(‘#loader-btn’)’  
	const cells = []
```

## Grid Values
```
// * Grid Values
  const width = 10
  const cellCount = width * width
  const enemies = [
    {
      name: ‘enemy1’,
      speed: 1000,
      class: ‘gannon’,
      timerId: ‘enemyTimer1’,
      startingPosition: 10,
      currentPosition: 10
    },
    {
      name: ‘enemy2’,
      speed: 2000,
      class: ‘robot’,
      timerId: ‘enemyTimer2’,
      startingPosition: 20,
      currentPosition: 20
    },
    {
      name: ‘enemy3’,
      speed: 1500,
      class: ‘gannon’,
      timerId: ‘enemyTimer3’,
      startingPosition: 30,
      currentPosition: 30
    },
    {
      name: ‘enemy4’,
      speed: 2500,
      class: ‘robot’,
      timerId: ‘enemyTimer4’,
      startingPosition: 40,
      currentPosition: 40
    },
    {
      name: ‘enemy5’,
      speed: 1000,
      class: ‘gannon’,
      timerId: ‘enemyTimer5’,
      startingPosition: 50,
      currentPosition: 50
    },
    {
      name: ‘enemy6’,
      speed: 2000,
      class: ‘robot’,
      timerId: ‘enemyTimer6’,
      startingPosition: 60,
      currentPosition: 60
    },
    {
      name: ‘enemy7’,
      speed: 2000,
      class: ‘gannon’,
      timerId: ‘enemyTimer3’,
      startingPosition: 70,
      currentPosition: 70
    },
    {
      name: ‘enemy8’,
      speed: 3000,
      class: ‘robot’,
      timerId: ‘enemyTimer4’,
      startingPosition: 80,
      currentPosition: 80
    }
  ]
  const levelsDisplay = document.querySelector(‘#level-display')’  const livesDisplay = document.querySelector('‘life-display')
 ’const pointsDisplay = document.querySelector(‘#p‘int-display’)
```

## Game Variables
```
  // * Game Variables
  let linkPosition = 94
  const zeldaPosition = 3
  let bonusPosition = 0
  let randomBonus = getRandomBonusName()
  let levels = 1
  let lives = 5
  let points = 0
```

## Functions for characters, enemies and items logic
```
// * Functions for charchters, enemies and items
  // Function - Link’s Position
  function createGrid(linkPosition) {
    for (let I = 0; I < cellCount; I++) {
      const cell = document.createElement(‘div’)
      cells.push(cell)
      // cell.innerHTML = I
      grid.appendChild(cell)
    }
    cells[linkPosition].classList.add(‘link’)
  }

  // Function - Link’s Movement
  function handleKeyUp(event) {
    cells[linkPosition].classList.remove(‘link’)
    const x = linkPosition % width
    const y = Math.floor(linkPosition / width)
    switch (event.keyCode) { 
      case 39: 
        if (x < width - 1) linkPosition++
        break
      case 37:
        if (x > 0) linkPosition—
        break
      case 38:
        if (y > 0) linkPosition -= width
        break
      case 40:
        if (y < width - 1) linkPosition += width
        break
      default:
        console.log(‘Do nothing’) 
    }
    cells[linkPosition].classList.add(‘link’)
    if (hasEnemy()) {
      console.log(‘you have been hit’)
      removeLink()
      removeLife()
      linkPosition = 94
      addLink()
    }
    if (cells[linkPosition].classList.contains(‘bonus’)) {
      console.log(‘you have been hit the bonus’)
      removeBonus()
      addPoints(1000)
    }
    if (cells[linkPosition].classList.contains(‘zelda’)) {
      console.log(‘you win’)
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
```

## Winning or loosing functions
```
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
```

## Collision logic
```
// * Functions for Collision Logic
  // Function - Add Link
  function addLink() {
    cells[linkPosition].classList.add(‘link’)
  }

  // Function - Remove Link
  function removeLink() {
    cells[linkPosition].classList.remove(‘link’)
  }

  // Function - Random Bonus
  function randomBonusPosition() {
    bonusPosition = Math.floor(Math.random() * 100)
    randomBonus = getRandomBonusName()
    cells[bonusPosition].classList.add(randomBonus)
  }

  // Function - Remove Bonus
  function removeBonus() {
    cells[bonusPosition].classList.remove(‘bonus’)
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
    lives—
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
    return cells[linkPosition].classList.contains(‘gannon’) || cells[linkPosition].classList.contains(‘robot’)
  }

  // Function - Zelda’s Position
  function zeldasPosition(zeldaPosition) {
    cells[zeldaPosition].classList.add(‘zelda’)
  }

  // Function - Random Bonus
  function getRandomBonusName() {
    const bonusNames = [‘bonus’, ‘speaker’]
    return bonusNames[Math.floor(Math.random() * name.length)]
  }
```

## Functions for enemy movement

```
// * Functions for Enemy Movement
  // Function - Remove Enemies
  function removeEnemies() {
    enemies.forEach(enemy => {3
      const position = enemy.currentPosition === enemy.startingPosition + width ? enemy.startingPosition : enemy.currentPosition
      console.log(‘position remove’, position)
      console.log(‘cells position remove’, cells[position])
      cells[position].classList.remove(enemy.class)
    })
  }

  // Function - Remove ALL Enemies
  function removeAllEnemies() {
    enemies.forEach(enemy => clearInterval(enemy.timerId))
    cells.forEach(cell => cell.classList.remove(‘gannon’, ‘robot’))
  }

  // Function - Create Enemies
  function createEnemies() {
    enemies.forEach(enemy => {
      const position = enemy.currentPosition === enemy.startingPosition + width ? enemy.startingPosition : enemy.currentPosition 
      console.log(‘position add’, position)
      console.log(‘cells position add’, cells[position])
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
        console.log(‘meeting condition’)
        clearInterval(enemy.timerId)
        // totalEnemies = 0
        cells.forEach(cell => cell.classList.remove(‘gannon’, ‘robot’))
        moveEnemies(enemy)
      }
    }, enemy.speed)
  }
```

## Function for game logic
```
 // * Functions for Game Logic
  // Function - Enemy Logics
  function gameLogic() {
    enemies.forEach(enemy => moveEnemies(enemy))
    createEnemies()
    randomBonusPosition()
  }
```

## Listeners
```
  // * Listeners
  createGrid(linkPosition)
  zeldasPosition(zeldaPosition)
  start.addEventListener(‘click’, gameLogic)
  document.addEventListener(‘keyup’, handleKeyUp)
```

## Audio
```
  // * Audio
  const playBtn = document.querySelector(‘#play-btn')’  const audio = document.querySelector('‘audio')
 ’function playSound() {
    audio.src = 'aud‘o/main-theme.mp3'
  ’ audio.play()
  }

  // Audio Listener
  playBtn.addEventListener(‘cli’k’, p’aySound)
```

## Introduction
```
  // * Intro Fade Out
  const loaderBtn = document.querySelector(‘#loader-btn')’  const loader = document.querySelector('‘loader1')
 ’function fadeOut() {
    loader.style.opacity = '0'
‘ ’

  // Fade Out Listner
  loaderBtn.addEventListener(‘cli’k’, f’deOut)
```

## Fade in’s for win or loose
```
// * Fade In - Win
  // Fade In - Variable
  const winFade = document.querySelector(‘#win1')’
  // Fade In - Function
  function winFadeIn() {
    if (gameWin === gameWin) {
      winFade.style.opacity = '1‘
’   }
  }

  // * Fade In - Loose
  // Fade In Variable
  const looseFade = document.querySelector('‘loose1')

’ // Fade In Function
  function looseFadeIn() {
    if (gameLoose === gameLoose) {
      looseFade.style.opacity = '1'
‘ ’   removeLink()
      removeBonus()
    }
  }
```

## Fade out and restart for win or loose
```
  // * Fade Out - Win
  // Fade Out - Variable
  const winBtn = document.querySelector(‘#win-btn')’  const winLoader = document.querySelector('‘win1')
 ’  
  // Fade Out - Function
  function winFadeOut() {
    winLoader.style.opacity = '0'
‘ ’ restartPoints()
    restartLife()
    levelLife()
    gameLogic()
    addLink()
  }
    
  // * Fade Out - Loose
  // Fade Out - Variable
  const looseBtn = document.querySelector('#l‘ose-btn')
 ’const looseLoader = document.querySelector('#l‘ose1')
 ’  
  // Fade Out - Function
  function looseFadeOut() {
    looseLoader.style.opacity = '0'
‘ ’
    
  // Fade Out - Listners
  console.log(looseFadeOut)
  winLoader.addEventListener('cli‘k', w’nFadeOut)
  looseLoader.addEventListener(‘cli’k’,lo’seFadeOut)
```
