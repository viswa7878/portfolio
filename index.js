const values = [
  "Android Development",
  "Mobile Development",
  "Full Stack Development"
];
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Typing speed in ms
const erasingSpeed = 50; // Erasing speed in ms
const delayBetweenWords = 1000; // Delay before starting to type the next word

// Wait for the DOM to load before accessing the element
document.addEventListener("DOMContentLoaded", function() {
  const changingText = document.getElementById("changingText");
  console.log(changingText); // Log to check if it's found

  function type() {
      console.log("Typing..."); // Debugging log
      if (charIndex < values[wordIndex].length) {
          changingText.textContent += values[wordIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, typingSpeed);
      } else {
          // After typing the whole word, wait and then start erasing
          setTimeout(erase, delayBetweenWords);
      }
  }

  function erase() {
      console.log("Erasing..."); // Debugging log
      if (charIndex > 0) {
          changingText.textContent = values[wordIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, erasingSpeed);
      } else {
          // Move to the next word and start typing
          wordIndex = (wordIndex + 1) % values.length;
          setTimeout(type, typingSpeed);
      }
  }

  // Start typing effect
  type();
});