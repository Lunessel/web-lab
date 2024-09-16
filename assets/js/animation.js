gsap.registerPlugin(ScrollTrigger);

gsap.to(".first-screen h2", { x: 0, duration: .5 });
gsap.to(".first-screen .img-container", { opacity: 1, x: 0, duration: .5 });
gsap.to(".feedbacks .slider", 
    {
        opacity: 1,
        y: 0,
        duration: .5,
        scrollTrigger: {
            trigger: ".feedbacks .slider",
            start: "top 90%",  // Start when element hits 90% of viewport height
            end: "top 30%",    // End when element hits 30% of viewport height
            scrub: true,       // Enables smooth scroll-based animation
            toggleActions: "play pause resume reset" // Animation control on scroll
        }

    });

gsap.to(".articles", 
    {
        opacity: 1,
        y: 0,
        duration: .5,
        scrollTrigger: {
            trigger: ".articles",
            start: "top 90%",  // Start when element hits 90% of viewport height
            end: "top 30%",    // End when element hits 30% of viewport height
            scrub: true,       // Enables smooth scroll-based animation
            toggleActions: "play pause resume reset" // Animation control on scroll
        }

    });