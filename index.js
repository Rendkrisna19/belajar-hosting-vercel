// Get elements
const hamburger = document.getElementById('hamburger');
const fullscreenMenu = document.getElementById('fullscreen-menu');
const closeMenu = document.getElementById('close-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Open menu
hamburger.addEventListener('click', () => {
  fullscreenMenu.classList.remove('hidden');
});

// Close menu
closeMenu.addEventListener('click', () => {
  fullscreenMenu.classList.add('hidden');
});

// Close menu and scroll to section
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    const targetId = link.getAttribute('href').substring(1); // Get target ID
    const targetSection = document.getElementById(targetId);

    // Scroll to section
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Close mobile menu
    fullscreenMenu.classList.add('hidden');
  });
});
