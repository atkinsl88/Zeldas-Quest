# Project One: JavaScript
[image:10D5D1CB-1A77-42E0-9E16-7D668DF9C1D8-4431-00000D6C3E425633/lQWzoAY_2AwcYXb0WuqNQom7GWfj5z8YfUQED4OsWGuTz7VgCpBKoixmwZAAY_rthZ8ANUmbu72KQKjHvXVS1TruIx-UmXXBZd33vLFzv4XgWlus5UMpjzHjZV_hyLApC_LPqiHZ.png]

# JavaScript Technical Planning Document
Project Name: Project One
Description: Outline of my JavaScript approach
Author: Liam Atkins
Version: 001

## Part 1 - Making the grid layout and charchter 

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

```
6. Outside of the function call an event listener called ‘click’ and include the function name playBtn.addEventListener(‘click’, playSound)
```

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
