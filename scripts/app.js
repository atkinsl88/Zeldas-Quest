function init() {

  // * Sound

  // const playBtn = document.querySelector('#play-btn')
  // const audio = document.querySelector('#audio')
  
  // function playSound() {
  //   audio.src = 'audio/main-theme.mp3'
  //   audio.play()
  // }
  // playBtn.addEventListener('click', playSound)

  // * Fade Out

  // function fadeOut() {
  //   const loader = document.querySelector('#loader1')
  //   loader.style.opacity = '0'
  // }

  // * Game

  // DOM Elements
  const grid = document.querySelector('.grid')
  const cells = []

  // Grid Values
  const width = 10
  const cellCount = width * width
  let linkPosition = 94

  // Function 1 - Link's Position
  function createGrid(linkPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cells.push(cell)
      grid.appendChild(cell)
    }
    cells[linkPosition].classList.add('link')
  }

  // Function 2 - Link's Movement
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

  createGrid(linkPosition)

  document.addEventListener('keyup', handleKeyUp)

}
window.addEventListener('DOMContentLoaded', init)