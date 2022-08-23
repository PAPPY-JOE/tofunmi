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
sr.reveal('.contact .form-input input', {distance: '60px', interval: 300,});
sr.reveal('.contact .form-input textarea', {distance: '60px', delay: 800,});
sr.reveal('.contact-left-align h2', {distance: '35px', delay: 200,});