
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

timeline.to(".headline-image", {
    opacity: 1,
    duration: 1,
    stagger: 1
});
