/*
 * gsap: the access point of everything the engine does
 * - create animation
 * - configure settings
 * - register plugins, eases and effects
 * - global control over all animations
 *
 * 3 main methods: to create Tweens & (optionally) to add them to Timelines
 * - gsap.to(target: string, varsObject: Record<string, any>): Tween
 * - gsap.from()
 * - gsap.fromTo()
 *
 * Tween
 * - change a single property of a single object over time
 * - change multiple properties of a single object over time (ex. { x: number, rotation: number, fill: string ...})
 * - change multiple properties of multiple objects over time
 * - animate multiple objects with staggered start times (ex. { stagger: number })
 *
 * Timeline: a container of multiple tweens(=child tweens)
 */

// Set default behavior of gsap objects
gsap.defaults({ duration: 1 })

// Inline style of DOM elements are updated!
// gsap.to('.smiley', {
//   x: 400,
//   y: 200,
//   scale: 3,
//   rotation: 360,
//   duration: 3, // default 0.5
// })

/*
 * target: CSS string selector, DOM element, (maybe) React Component?
 * varsObject: supports almost CSS properties
 *
 * For best performance: CSS Transforms & Opacity (benefit from hardware acceleration)
 * - x, y
 * - rotation, rotationX, rotationY
 * - scale, scaleX, scaleY
 * - skewX, skewY
 *
 * GSAP can animate any numeric property
 * - width, height
 * - top, left
 * - borderRadius
 * - color, backgroundColor
 * + it supports vm, vh +
 */

// gsap.from(target, varsObject)
gsap.from('.smiley', {
  x: 400,
  y: 200,
  scale: 3,
  rotation: 360,
  duration: 3, // default 0.5
})

// gsap.fromTo(target, fromVarsObject, toVarsObject)
gsap.fromTo(
  '.smiley',
  { x: 700, y: 400, rotation: 0, opacity: 0 },
  {
    x: 400,
    y: 200,
    scale: 2,
    rotation: 360,
    opacity: 1,
    duration: 3, // default 0.5
  }
)
