const tween = gsap.to('.smiley', {
  x: 600,
  duration: 5,
  paused: true,
})

const play = document.getElementById('play')
const pause = document.getElementById('pause')
const reverse = document.getElementById('reverse')
const restart = document.getElementById('restart')

play.addEventListener('click', () => tween.play())
pause.addEventListener('click', () => tween.pause())
reverse.addEventListener('click', () => tween.reverse())
restart.addEventListener('click', () => tween.restart())
