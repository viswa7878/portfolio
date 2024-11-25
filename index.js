const values = [
    "Android Development",
    "Mobile Development",
    "Full Stack Development"
  ];
  let wordIndex = 0;
  let charIndex = 0;
  const typingSpeed = 150; // Typing speed in ms
  const erasingSpeed = 100; // Erasing speed in ms
  const delayBetweenWords = 2000; // Delay before starting to type the next word
  console.log("Sas");
  // Wait for the DOM to load before accessing the element
  document.addEventListener("DOMContentLoaded", function() {
    const changingText = document.getElementById("changingText");
    const menuIcon = document.getElementById('menu');
    const navBar = document.querySelector('.nav-bar');
  console.log('clicked');
    function type() {
      if (charIndex < values[wordIndex].length) {
        changingText.textContent += values[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        // Wait before erasing
        setTimeout(erase, delayBetweenWords);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        changingText.textContent = values[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
      } else {
        // Move to the next word
        wordIndex = (wordIndex + 1) % values.length;
        // Start typing the next word
        setTimeout(type, typingSpeed);
      }
    }
  
    // Event listener for menu icon toggle and nav-bar display
    menuIcon.addEventListener("click", function() {
      this.classList.toggle('fa-times'); // Toggle between fa-bars and fa-times for the icon
      navBar.style.display = navBar.style.display === 'flex' ? 'none' : 'flex';
    });
  
    // Start typing effect
type();
    
  });
  