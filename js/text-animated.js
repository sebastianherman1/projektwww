const textArray = ["Fitness", "Gym", "Workout", "Training", "Crossfit"];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const speed = 150;
const delay = 1000;

function typeText() {
  const element = document.getElementById("typewriter-text");

  const text = textArray[currentTextIndex].substring(0, currentCharIndex);
  element.textContent = text;

  if (isDeleting) {
    currentCharIndex--;
    if (currentCharIndex === 0) {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % textArray.length;
    }
  } else {
    currentCharIndex++;
    if (currentCharIndex === textArray[currentTextIndex].length) {
      setTimeout(() => { isDeleting = true; }, delay);
    }
  }

  setTimeout(typeText, speed);
}

window.addEventListener('load', typeText);

/* Karuzela opinii */
function showSlide(index) {
  const width = carousel.clientWidth;
  carousel.scrollTo({ left: width * index, behavior: 'smooth' });
}

  const testimonials = document.querySelectorAll('.testimonial');
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });
  }

  function prev() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function next() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  showTestimonial(currentIndex);