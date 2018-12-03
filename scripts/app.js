// Navbar
window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        $('.navbar').fadeOut();
    }
    else {
        $('.navbar').fadeIn();
    }
},false);


window.sr = new ScrollReveal();

sr.reveal('.navbar', {
    duration: 1800,
    origin: 'bottom'
});
  
sr.reveal('.header-content-left', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});
  
sr.reveal('.header-content-right', {
    duration: 2500,
    origin: 'right',
    distance: '300px'
});

sr.reveal('.header-content-center', {
    duration: 2500,
    origin: 'bottom',
    distance: '300px'
});
  
sr.reveal('.header-btn', {
    duration: 2000,
    delay: 1000, 
    origin: 'bottom'
});

sr.reveal('#testimonial div', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

