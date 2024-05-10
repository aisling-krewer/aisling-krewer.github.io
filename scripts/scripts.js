// scripts.js
$(document).ready(function() {
// scripts.js
    AOS.init({
        offset: 200,           // Trigger points in pixels
        duration: 600,         // Duration of animation in milliseconds
        easing: 'ease-in-sine', // Animation easing function
        delay: 100,            // Delay in milliseconds
        once: false            // Whether animation needs to fire more than once
    });

    $('#contact-form').submit(function(event) {
        event.preventDefault(); 
        var formData = $(this).serialize();
        console.log('Form Data Submitted:', formData);
        alert('Thank you for your message!');
        // Implement AJAX call here if needed
    });
});