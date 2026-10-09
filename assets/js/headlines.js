gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".headline-intro",
        start: "top top",
        end: "+=4500",
        scrub: 1,
        pin: true
    }
});

// 1. First eight headlines appear
timeline.to(
    ".headline-image:nth-of-type(-n+8)",
    {
        opacity: 1,
        duration: 1,
        stagger: 0.7
    }
);

// 2. First text box appears
timeline.to(".story-text-1", {
    autoAlpha: 1,
    duration: 1.2
});

// Keep the first text visible
timeline.to({}, { duration: 2 });

// 3. First text box disappears
timeline.to(".story-text-1", {
    autoAlpha: 0,
    duration: 0.8
});

// 4. Remaining six headlines appear
timeline.to(
    ".headline-image:nth-of-type(n+9)",
    {
        opacity: 1,
        duration: 0.6,
        stagger: 0.4
    }
);

// 5. Second text box appears
timeline.to(".story-text-2", {
    autoAlpha: 1,
    duration: 1.2
});

// Keep the second text visible
timeline.to({}, { duration: 2.5 });

// 6. Second text disappears
timeline.to(".story-text-2", {
    autoAlpha: 0,
    duration: 0.8
});

// 7. All headlines fade away
timeline.to(".headline-image", {
    opacity: 0,
    duration: 1.5
});

// 8. Final title appears
timeline.to(".story-title", {
    autoAlpha: 1,
    duration: 1.5
});

// Keep title visible before scrolling onward
timeline.to({}, { duration: 2 });
