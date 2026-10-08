
gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".headline-intro",
    start: "top top",
    end: "+=2000",
    scrub: 1,
    pin: true
  }
});

timeline
  .to(".headline-1", {
    opacity: 1,
    duration: 1
  })
  .to(".headline-2", {
    opacity: 1,
    duration: 1
  })
  .to(".headline-3", {
    opacity: 1,
    duration: 1
  });
