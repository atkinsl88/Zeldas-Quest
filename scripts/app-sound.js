function init() {

  // * Sound

  const playBtn = document.querySelector('#play-btn')
  const audio = document.querySelector('#audio')
  
  function playSound() {
    audio.src = 'audio/main-theme.mp3'
    audio.play()
  }
  playBtn.addEventListener('click', playSound)

}
window.addEventListener('DOMContentLoaded', init)