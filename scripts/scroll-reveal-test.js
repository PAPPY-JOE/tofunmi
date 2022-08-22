//   Scroll Reveal
let sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 900,
    easing: 'ease',
    reset: true,
});


// Scroll titles
sr.reveal('.next-header p', {reset: false});

// Scroll boxes
sr.reveal('.left-btn', {distance: '60px', duration: 1200,});
sr.reveal('.about-item', {distance: '60px', interval: 400,});
sr.reveal('.next-item-box', {distance: '60px', interval: 300,});