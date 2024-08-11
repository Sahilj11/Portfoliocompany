var t = gsap.timeline();
t.from([".heading" ,"ul",".contact"],{
    y:-50,
    duration:0.8,
    stagger:0.1,
    opacity:0,
})
gsap.from([".web-builder","li",".project",],{
    y:-50,
    duration:0.8,
    stagger:0.1,
    opacity:0,
})
// hero section animation
t.to(".circle", { 
    duration: 1, 
    y: -50,
    repeat: -1, 
    yoyo: true, 
    ease: "bounce.out" 
  });

  gsap.from([ ".hero-heading",".para", ".btn"],{
    y:60,
    duration:0.8,
    stagger:0.4,
    opacity:0,
})

// project section animation
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".right", 
  { x: "-100%", opacity: 0 },  
  { 
    x: "0%", 
    opacity: 1, 
    duration: 1.5, 
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".right",
      start: "top 60%", 
      toggleActions: "play none none none", 
   
    }
  }
);

gsap.fromTo(".left", 
  { x: "100%", opacity: 0 }, 
  { 
    x: "0%", 
    opacity: 1, 
    duration: 1.5, 
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".left",
      start: "top 80%", 
      toggleActions: "play none none none", 
      
    }
  }
);


// about section animation
gsap.fromTo(".right-div", 
    { x: "-100%", opacity: 0 },  
    { 
      x: "0%", 
      opacity: 1, 
      duration: 1, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".right-div",
        start: "top 30%", 
        
        toggleActions: "play none none none", 
     
      }
    }
  );

  gsap.fromTo(".left-div", 
    { x: "100%", opacity: 0 }, 
    { 
      x: "0%", 
      opacity: 1, 
      duration: 1.5, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".left-div",
        start: "top 20%", 
    
        toggleActions: "play none none none", 
        
      }
    }
  );

 // process card animation
  
  gsap.utils.toArray(".row1").forEach((box) => {
    gsap.fromTo(box, 
      { y: 50, opacity: 0 },  // Start from 50px down and fully transparent
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: box,
          start: "top 80%", 
          end: "top 60%", // Optional: define an end point
          toggleActions: "play none none none",
          scrub: false // Ensure animation does not scrub with scrolling
        }
      }
    );
  });