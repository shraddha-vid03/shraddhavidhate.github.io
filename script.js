// Scroll animation
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) sec.classList.add('visible');
  });
});

// Contact form success message
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const successMessage = document.getElementById('success-message');
  successMessage.style.display = 'block';

  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 3000);

  this.reset();
});
