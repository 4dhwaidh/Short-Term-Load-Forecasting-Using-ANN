document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        el.style.animationDelay = '0.5s';
    });

});
