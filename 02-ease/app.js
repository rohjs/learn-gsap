gsap.to('.smiley', {
  x: 600,
  duration: 2,
  ease: 'bounce', // bounce.in || bounce.out (default) || bounce.inOut
})

gsap.to('.exhaling', {
  x: 600,
  duration: 2,
  ease: 'linear', //default: ease-out (slows down by default)
})

// type Ease = 'elastic' | 'back' | 'bounce.in' | 'bounce.out' | 'bounce.inOut' | 'linear'...
// USE GreenSock Ease Visualizer
// https://greensock.com/docs/v3/Eases
// - Steep curve: fast rate of change
// - Flat curve: slow rate of change
