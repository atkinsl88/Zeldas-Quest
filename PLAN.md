# Project One: JavaScript
# JavaScript Technical Planning Document
Project Name: Project One</br>
Description: Outline of my JavaScript approach</br>
Author: Liam Atkins</br>
Version: 001</br>

## Part 1 - Making the grid layout and character 

### Creating the grid layout

0. Start by adding this line of code into the JS document.
```
function init() {

}
window.addEventListener(‘DOMContentLoaded’, init)
```

1. Then, create a new variable for my gird, assigned to the relevant class in my CSS file. Go into CSS file and make sure the class is available.
```
const grid = document.querySelector(‘.grid’)
```

2. Then, define the grid with by creating a new variable and specifying a width. Then, create a second variable which specifies the width * width, so in theory we are making a grid with a width of 10 and then multiplying that by itself to make 100 squares.
```
const width = 10
const numberOfCells = width * width
```

3. Create a new function called `function createdGrid()`

4. Then, call that function `createGrid()`

5. Then, create a variable with the squared brackets `const cells = []`, add this underneath the previous function.

6. Then, define a variable called `cell` which creates the element and assign it to the class of `div`. `const cell = document.createElement(‘div’)`

7. Then append the child of cell `grid.appendChild(cell)`

You should have something like this:
```
// Function
function createGrid() {
   const cell = document.createElement('div')
   cells.push(cell)
   grid.appendChild(cell)
 }

createGrid()

```

8. Then, add a for loop with the math sum to create a number of gridded cells, and wrap the items in it. `let I = 0; I < cellCount; I++`  then add the innerHTML tag and make that equal to I from the math `cell.innerHTML = I` which will show the numbers

The JS at this stage should look as follows:
```
function init() {

  // DOM Elements
  const grid = document.querySelector(‘.grid’)
  const cells = []

  // Grid Values
  const width = 10
  const cellCount = width * width

  // Function
  function createGrid() {
    for (let I = 0; I < cellCount; I++) {
      const cell = document.createElement(‘div’)
      cells.push(cell)
      cell.innerHTML = I
      grid.appendChild(cell)
    }
  }
  createGrid()

}
window.addEventListener(‘DOMContentLoaded’, init)
```

[image:0B7E0296-D4D5-4782-AB31-EF4DE146790B-587-000021BD23D439A2/Screenshot 2020-07-18 at 18.38.07.png]

At this stage, I will update my HTML and CSS files accordingly.

[image:19ED54EE-22DC-4870-A6F0-AB51E8484AA4-587-0000253EA9E6D17B/Screenshot 2020-07-18 at 19.42.22.png]

### Adding my main character

9. Create a variable for my character and set the position to 0, you can change the 0 to another number, i.e. 28, and Link should appear their `let linkPosition = 0`

10. Then, between the function and the call, add `cells[linkPosition].classList.add(‘link’)`

You should have something like this:

```
function createGrid() {
  for (let I = 0; I < numberOfCells; I++) {
    const cell = document.createElement(‘div’)
    cells.push(cell)
    cell.innerHTML = I
    grid.appendChild(cell)
  }
  cells[linkPosition].classList.add(‘link’)
}
createGrid()
```

Then, link should appear on the page as follows:

[image:539C1F71-44C1-4AAF-BCE2-8BF9D37A2E35-587-0000260E73168EB0/Screenshot 2020-07-18 at 19.57.13.png]

End of Part 1.

Code should look like this:

```
function init() {

  // DOM Elements
  const grid = document.querySelector('.grid')
  const cells = []

  // Grid Values
  const width = 10
  const cellCount = width * width
  let linkPosition = 0

  // Function
  function createGrid(linkPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cells.push(cell)
      cell.innerHTML = i
      grid.appendChild(cell)
    }
    cells[linkPosition].classList.add('link')
  }

  createGrid(linkPosition)


}
window.addEventListener('DOMContentLoaded', init)
```


## Part 2 - Moving Link

### Creating a function to move Link around via the keyboard

11. Create a new function  underneath the first function, rename the first Function 1 in my notes, and the second Function 2 `function handleKeyUp(){}`

12. Create a keyup event listener to the function, and add it underneath the `createGrid()` call `document.addEventListener(‘keyup’, handleKeyUp)`

13. Then, add a switch control, and call call event.keyCode, then add the word event into the function brackets.

14. Then, inside the function above, add the following to remove Link from his previous position `cells[linkPosition].classList.remove(‘link’)`, when you press an arrow he should disapear. 

15. Then we update the switch statements to work out the new position.

So far the code should look like this:

```
function init() {

  // DOM Elements
  const grid = document.querySelector(‘.grid’)
  const cells = []

  // Grid Values
  const width = 10
  const cellCount = width * width
  let linkPosition = 0

  // Function 1
  function createGrid(linkPosition) {
    for (let I = 0; I < cellCount; I++) {
      const cell = document.createElement(‘div’)
      cells.push(cell)
      cell.innerHTML = I
      grid.appendChild(cell)
    }
    cells[linkPosition].classList.add(‘link’)
  }

  // Function 2
  function handleKeyUp(event) {

    cells[linkPosition].classList.remove(‘link’)

    switch (event.keyCode) {
    }

  }

  createGrid(linkPosition)

  document.addEventListener(‘keyup’, handleKeyUp)

}
window.addEventListener(‘DOMContentLoaded’, init)
```

15. (Extended) - This is how the switch statement should look:
case 39 = Up
case 37 = Down
case 38 = Left
case 39 = Right
Once you have written the statements, you need to write an if statement for each one as follows.    

```
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
        console.log(‘invalid key do nothing’) 
    }
```

16. Then add two new variables for this section underneath this part in the function `cells[linkPosition].classList.remove(‘link’)` , the first should be to define the x-axis `const x = linkPosition % width`, and the second to define the y-axis, `const y = Math.floor(linkPosition / width)`

17. Then, add this line of code to add Link back in once you have moved him `cells[linkPosition].classList.add(‘link’) `

18. Remove the numbers by removing this `cell.innerHTML = I`

The code should look like this:

```
function init() {

  // DOM Elements
  const grid = document.querySelector(‘.grid’)
  const cells = []

  // Grid Values
  const width = 10
  const cellCount = width * width
  let linkPosition = 0

  // Function 1
  function createGrid(linkPosition) {
    for (let I = 0; I < cellCount; I++) {
      const cell = document.createElement(‘div’)
      cells.push(cell)
      grid.appendChild(cell)
    }
    cells[linkPosition].classList.add(‘link’)
  }

  // Function 2
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
        console.log(‘invalid key do nothing’) 
    }
    cells[linkPosition].classList.add(‘link’) 
  }

  createGrid(linkPosition)

  document.addEventListener(‘keyup’, handleKeyUp)

}
window.addEventListener(‘DOMContentLoaded’, init)
```

```
.grid-wrapper {
  height: auto;
  display: flex;
  justify-content: center;
}
```

You should be left with this, where Link can move freely.

[image:1A836C8F-48F0-4BF4-AF37-ED55E750FCCA-559-000008CD7B3C6492/Screenshot 2020-07-19 at 11.55.01.png]

## Part 3 - Making a pre-loader

1. Update your HTML and CSS pages as per my design.

2. Create a new function called `fadeOut() {}`

3. Within the new function, define a new const called loader, and quereySelector it to the loader ID.

4. Then add a style attribute to that loader with an opacity of 0, so that when you click on the button, the loader becomes transparent.

5. Finally, add an o’clock function to the CSS class and it should work.

```
      <button type=“button” onclick=“fadeOut()” class=“loader-button”>Start</button>
```

```
  function fadeOut() {
    const loader = document.querySelector(‘#loader1')’    loader.style.opacity = '0‘
’ }
```


## Part 4 - Making the audio button

1. Update your HTML and CSS pages as per my design.

```
<div class="audio-wrapper">
  <audio id=“audio”></audio>
  <button type="button" id=“play-btn”><img src="/assets/speaker.png" alt=""></button>
</div>

```

2. Define a variable for my play button const `playBtn = document.querySelector(‘#play-btn’)’`

3. Define a second variable for my audio `const audio = document.querySelector(‘#audio’)’`

4. Create a new function, i.e playSound(), and inside put the audio source. 
`    audio.src = ‘/audio/main-theme.mp3’`

5. Then, add `audio.play()` underneath.

6. Outside of the function call an event listener called ‘click’ and include the function name `playBtn.addEventListener(‘click’, playSound)`

This is what the code should look like:

```
  // * Element
  const playBtn = document.querySelector(‘#play-btn')  
	const audio = document.querySelector('‘audio')

 ’// * Execution
  function playSound() {
    audio.src = ‘/audio/main-theme.mp3’
  ’ audio.play()
  }
  // * Event

  playBtn.addEventListener(‘click’, playSound)
```

## Part 5 - Add Enemies and Zelda Positon

1. Define a new variable for Gannon `let gannonPosition = 10`

2. Create new function for Gannon’s position, and call the new variable.

3. With the function, use the `classList` attribute to show Gannon based on his selected div, i.e. 10.

```
function gannonsPosition(gannonPosition) {
	cells[gannonPosition].classList.add('gannon')
}
```

4. Then, call that function under the createGrid(linkPosition) function.

```
gannonsPosition(gannonPosition)
```

5. Do the same for the Robot, Zelda and the extra life.

You should have this under the Grid Value

```
  let linkPosition = 94
  let zeldaPosition = 2
  let gannonPosition = 10
  let robotPosition = 20
	let extraLifePosition = 45
```

```
  // Function 3 - Zelda’s Position
  function zeldasPosition(zeldaPosition) {
    cells[zeldaPosition].classList.add(‘zelda’)
  }

  // Function 4 - Gannon’s Position
  function gannonsPosition(gannonPosition) {
    cells[gannonPosition].classList.add(‘gannon’)
  }

  // Function 5 - Robot’s Positon
  function robotsPosition(robotPosition) {
    cells[robotPosition].classList.add(‘robot’)
  }

  // Function 6 - Extra Life Positon
  function extraLifesPosition(extraLifePosition) {
    cells[extraLifePosition].classList.add('bonus')
  }

  createGrid(linkPosition) // This was written earlier
  zeldasPosition(zeldaPosition)
  gannonsPosition(gannonPosition)
  robotsPosition(robotPosition)
	extraLifesPosition(extraLifePosition)
```

### Generate random enemy at any position 

1. First, I need a const to define the item.
```
let randomEnemy = getRandomEnemyName()
```

2. Second, I need a function to handle the movement.
```
function getRandomEnemyName() {
}
```

3. Third, I need to random pick an enemy from an object, so I can define a variable inside of the new function. And then use a return to randomly show an enemy.
```
function getRandomEnemyName() {
	const names = ['gannon', 'robot']
	return names[Math.floor(Math.random() * name.length)]
}
```

4. Then, I need to create a function for my game to start, and in that function I need to add the currentClass = getRandomEnemyName()
```
function startGame() {
	let currentClass = getRandomEnemyName()
	console.log(currentClass)
}
```

5. Then, I need to add an eventListener, so that when the start button is click on the pre-loader, the game will start.
```
start.addEventListener(‘click’, startGame)
```

6. In similar to the const grid in my DOM Element, I need to define a variable to executer my button.
```
const start = document.querySelector('#loader-btn')
```

7. Then define the enemyPosition on my Game Variables
```
let enemyPosition = 0
```

8. Then add
	1. `randomEnemy = getRandomEnemyName()`, to call the new variable
	2. `cells[enemyPosition].classList.add(randomEnemy)`,  to call the randomEnemy and enemyPosition variable
	3. `enemyPosition = Math.floor(Math.random() * 100)`, to randomly fire a random enemy

You should have this:
```
  // Function = Game Logic
  function startGame() {
    enemyPosition = Math.floor(Math.random() * 100)
    randomEnemy = getRandomEnemyName()
    cells[enemyPosition].classList.add(randomEnemy)
  }

```

### Generate random item at any position 

1. First, I need a const to define the item and bonus position
```
let bonusPosition = 0
let randomBonus = getRandomBonusName()
```

2. Second, I need a function to handle the movement.
```
function getRandomBonusName() {
}
```

3. Third, I need to random pick an item from an object, so I can define a variable inside of the new function. And then use a return to randomly show an enemy.
```
function getRandomBonusName() {
	const bonusNames = ['bonus', 'speaker']
	return bonusNames[Math.floor(Math.random() * name.length)]
}
```

4. Then add, as we did previously but update the variables
	1.  `randomEnemy = getRandomEnemyName()`, to call the new variable
	2. `cells[enemyPosition].classList.add(randomEnemy)`,  to call the randomEnemy and enemyPosition variable
	3. `enemyPosition = Math.floor(Math.random() * 100)`, to randomly fire a random enemy

You should have this:
```
  // Function = Game Logic
  function startGame() {
    enemyPosition = Math.floor(Math.random() * 100)
    randomEnemy = getRandomEnemyName()
    cells[enemyPosition].classList.add(randomEnemy)
    bonusPosition = Math.floor(Math.random() * 100)
    randomBonus = getRandomBonusName()
    cells[bonusPosition].classList.add(randomBonus)
  }


```

### Generate random enemies at on specific grid locations, I.e 10,20,30,40,50,60,70,80.

1. Get a random number between *min* and *max* value using below method:

```
Math.floor(Math.random() * (max - min) + min)
```

2. Then, I want any random number between 0 and 9. So, min value would be 1 and max value would be 9 (because I am using Math.floor).  After that multiply the number I have with 10 and I should get the output. Any random number from 10,20,30,40,50,60,70,80.

```
    enemyPosition = (Math.floor(Math.random() * (9 - 1) + 1)) * 10
    randomEnemy = getRandomEnemyName()
    cells[enemyPosition].classList.add(randomEnemy)
```

Working on my interval (or loop) - Part 1 (Getting multiples to appear)

1. Define a new variable within my `startGame()` function, and add the setInterval parameters.
```
const timer = setInterval(() => {
})
```

2. Declare a new variable called totalEnemies in my Game Variables section
```
let totalEnemies = 0
```

3. Open an ‘if’ statement, and inside include a parenthesis, which has the new variable > 9, because we there are 10 squares across my grid that I want the enemy to move across, and 0 counts.
4. Then, add clearInterval(time) 
```
const timer = setInterval(() => {
	if (totalEnemies > 9) {
	 clearInterval(time) 
	 cells[enemyPosition].classList.remove(randomEnemy)
	 alert(score)
	 return
	}
	totalEnemies++
})
```

5. Then, move the bonusPosition out of the if statement and place underneath like this.
```
  // Function = Game Logic
  function startGame() {
    const timer = setInterval(() => {
      if (totalEnemies > 9) {
        clearInterval(time) 
        cells[enemyPosition].classList.remove(randomEnemy)
        alert(score)
        return
      }
      totalEnemies++
      enemyPosition = (Math.floor(Math.random() * (9 - 1) + 1)) * 10
      randomEnemy = getRandomEnemyName()
      cells[enemyPosition].classList.add(randomEnemy)
    }, 1000)
    bonusPosition = Math.floor(Math.random() * 100)
    randomBonus = getRandomBonusName()
    cells[bonusPosition].classList.add(randomBonus)
  }
```

Enemies should appear randomly on the left hand side, and you should have one bonus item appear.

# Part 6 - Collision Logic
### 1. Create this logic to make the item interact 
 
```
  if (cells[linkPosition].classList.contains(‘gannon’) || 
        cells[linkPosition].classList.contains(‘robot’)) {
      console.log(‘you have been hit’)
      return cells[linkPosition].classList.remove(‘link’) ||
      cells[linkPosition = lives -= 1].classList.contains(‘gannon’, ‘robot’) ||
      cells[linkPosition = 94].classList.add(‘link’)
    }

    if (cells[linkPosition].classList.contains(‘bonus’)) {
      console.log(‘you have been hit the bonus’)
      return cells[bonusPosition].classList.remove(‘bonus’) ||
      cells[bonusPosition = points += 1000].classList.contains(‘bonus’)
    }

    if (cells[linkPosition].classList.contains(‘zelda’)) {
      console.log(‘you win’)
      return cells[zeldaPosition].classList.add(‘zeldaLink’) ||
      cells[zeldaPosition = points += 5000].classList.contains(‘zelda’) 
      // cells[zeldaPosition = levels += 1].classList.contains(‘zelda’)
```

# Part 7 - Win/Loose
### 1. Create this logic to make the item interact 

```
  // * Winning or loosing function
  // Game win
  function gameWin() {
    if (levels === 6) {
      winFadeIn()
      removeAllEnemies()
      removeLink()
      removeBonus()
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
```