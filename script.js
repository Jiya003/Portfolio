// Handle navigation click
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

AOS.init({
    duration: 1000,
    once: true
  });

// Handle Click Navigation and Highlight Active Link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const targetId = link.getAttribute('href').replace('#', '');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate Sections on Scroll with Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.style.animationPlayState = 'paused';
  observer.observe(section);
});

// Parallax Scrolling (Optional)
const parallaxElement = document.querySelector('.parallax');
window.addEventListener('scroll', () => {
  let offset = window.pageYOffset;
  parallaxElement.style.backgroundPositionY = offset * 0.5 + 'px';
});
