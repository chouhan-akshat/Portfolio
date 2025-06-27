// Typing animation
const words = ["Developer", "Designer", "Coder", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 60;
const delayBetweenWords = 1200;

const typingElement = document.getElementById("typing-text");

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 300);
    } else {
      setTimeout(typeEffect, deletingSpeed);
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenWords);
    } else {
      setTimeout(typeEffect, typingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Scroll-triggered animation for experience-box (repeat every time it's visible)
  const experienceBox = document.querySelector('.experience-box');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          experienceBox.classList.add('animate');
        } else {
          experienceBox.classList.remove('animate');
        }
      });
    },
    {
      threshold: 0.5 // Trigger when 50% of the box is visible
    }
  );

  if (experienceBox) {
    observer.observe(experienceBox);
  }
});


// ---------------Resume animation -------------------------


// Resume section scroll animation
const resumeSection = document.getElementById('resume');

const resumeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        resumeSection.classList.add('animate');
      } else {
        resumeSection.classList.remove('animate');
      }
    });
  },
  {
    threshold: 0.3 // adjust as needed
  }
);

if (resumeSection) {
  resumeObserver.observe(resumeSection);
}


















