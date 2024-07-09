document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.section');
    const homeLink = document.getElementById('home-link');

    function activateSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
                link.classList.add('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            activateSection(targetId);
        });
    });

    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        activateSection('home');
        navLinks.forEach(link => link.classList.remove('active'));
    });

    // Check if we're on a specific section when the page loads
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        activateSection(hash);
    }
});
