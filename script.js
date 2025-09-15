// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Form validation for contact page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Reset errors
            document.querySelectorAll('.error').forEach(error => {
                error.style.display = 'none';
            });
            
            document.getElementById('successMessage').style.display = 'none';
            document.getElementById('errorMessage').style.display = 'none';
            
            // Validate name
            const nameInput = document.getElementById('name');
            if (nameInput.value.trim() === '') {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            }
            
            // Validate email
            const emailInput = document.getElementById('email');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }
            
            // Validate message
            const messageInput = document.getElementById('message');
            if (messageInput.value.trim() === '') {
                document.getElementById('messageError').style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
                // Simulate form submission
                setTimeout(() => {
                    document.getElementById('successMessage').style.display = 'block';
                    contactForm.reset();
                }, 1000);
            }
        });
    }
    
    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-fill');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (barPosition < screenPosition) {
                bar.style.width = bar.style.width; // Trigger the animation
            }
        });
    }
    
    // Initial check and on scroll
    animateProgressBars();
    window.addEventListener('scroll', animateProgressBars);
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
});