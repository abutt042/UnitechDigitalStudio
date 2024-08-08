$(function () {
    var width = $(window).width();
  
    if (width > 991) {
      gsap.registerPlugin(ScrollTrigger);
  
      let sections = gsap.utils.toArray('.panel');
  
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.thecontainer',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          end: () => '+=' + document.querySelector('.thecontainer').offsetWidth,
        },
      });
  
      $(window).on('resize', debounce(function() {
        // Handle resize
        gsap.getById('scrollTriggerId').refresh(); // Refresh ScrollTrigger if needed
      }, 100)); // Adjust debounce time as needed
    }
  });
  