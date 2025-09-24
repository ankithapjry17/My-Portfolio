// Smooth Scroll for Nav Links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode')
    ? '☀️ Light Mode'
    : '🌙 Dark Mode';
});

// Filter Projects
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.filter;
    projects.forEach(proj => {
      proj.style.display = (category === 'all' || proj.dataset.category === category)
        ? 'block' : 'none';
    });
  });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (name && email && message) {
    formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;
    formResponse.style.display = 'block';
    formResponse.style.color = 'green';
    contactForm.reset();
  } else {
    formResponse.textContent = 'Please fill in all fields.';
    formResponse.style.display = 'block';
    formResponse.style.color = 'red';
  }
});

// Editable About Section
const editAboutBtn = document.getElementById('editAbout');
const aboutText = document.getElementById('aboutText');
editAboutBtn.addEventListener('click', () => {
  const currentText = aboutText.textContent;
  const newText = prompt('Edit your About Me text:', currentText);
  if (newText && newText.trim() !== '') {
    aboutText.textContent = newText;
  }
});
