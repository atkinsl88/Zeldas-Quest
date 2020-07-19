function init() {

  // * Music

  const playBtn = document.querySelector('#play-btn')
  const audio = document.querySelector('#audio')
  
  function playSound() {
    audio.src = 'http://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3'
    audio.play()
  }
  playBtn.addEventListener('click', playSound)


}
window.addEventListener('DOMContentLoaded', init)