// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Feature Tabs
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetTab = tab.getAttribute('data-tab');
    
    // Remove active class from all tabs and contents
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    tab.classList.add('active');
    document.getElementById(targetTab).classList.add('active');
  });
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('.faq-icon');
    
    // Toggle active state
    const isActive = answer.classList.contains('active');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-answer').forEach(a => {
      a.classList.remove('active');
    });
    document.querySelectorAll('.faq-icon').forEach(i => {
      i.classList.remove('active');
    });
    
    // Toggle current FAQ if it wasn't active
    if (!isActive) {
      answer.classList.add('active');
      icon.classList.add('active');
    }
  });
});

// Email Validation
const emailInput = document.querySelector('.cta-input');
const contactForm = document.querySelector('.cta-form');
const errorIcon = document.querySelector('.error-icon');
const errorMessage = document.querySelector('.error-message');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailValue)) {
      emailInput.classList.add('error');
      errorIcon.classList.add('show');
      errorMessage.classList.add('show');
    } else {
      emailInput.classList.remove('error');
      errorIcon.classList.remove('show');
      errorMessage.classList.remove('show');
      
      // Here you would normally send the form data
      alert('Thank you for subscribing!');
      emailInput.value = '';
    }
  });
  
  emailInput.addEventListener('input', () => {
    if (emailInput.classList.contains('error')) {
      emailInput.classList.remove('error');
      errorIcon.classList.remove('show');
      errorMessage.classList.remove('show');
    }
  });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});