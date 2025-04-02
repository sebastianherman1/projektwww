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
