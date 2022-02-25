gsap.defaults({ duration: 1.5, ease: 'back' })

// You can pass stagger amount as a number value or...
gsap.to('img', { y: -500, stagger: 0.2 })

// an object
gsap.to('img', {
  y: -500,
  stagger: {
    // each: 0.2, same as above, meaning 0.2 seconds between each animation
    amount: 0.2, // meaning the start time of all the animations will be evenly dispersed over the course of 0.2 seconds
    from: 'edges', // "start" | "end" | "center" | "edges"
  },
})
