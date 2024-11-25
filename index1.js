document.addEventListener('DOMContentLoaded', function() {
  // Load header via AJAX
  function loadHeader() {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'header.html', true); // Adjust the path to your header.html
      xhr.onload = function() {
          const headerContainer = document.getElementById('header-container');
          if (headerContainer && xhr.status >= 200 && xhr.status < 300) {
              headerContainer.innerHTML = xhr.responseText;
              initializeMenuFunctionality(); // Call this after loading the header
          } else if (!headerContainer) {
              console.error("Element with id 'header-container' not found in the DOM.");
          } else {
              console.error('Failed to load header:', xhr.status, xhr.statusText);
          }
      };
      xhr.onerror = function() {
          console.error('Request failed');
      };
      xhr.send();
  }

  // Initialize menu functionality after header is loaded
  function initializeMenuFunctionality() {
      const menuIcon = document.getElementById('menu'); // Ensure this ID exists in header.html
      const navBar = document.querySelector('.nav-bar'); // Ensure this class exists in header.html

      // Event listener for menu icon toggle and nav-bar display
      if (menuIcon && navBar) { // Check if the elements exist
          menuIcon.addEventListener("click", function() {
              this.classList.toggle('fa-times'); // Toggle between fa-bars and fa-times for the icon
              navBar.style.display = navBar.style.display === 'flex' ? 'none' : 'flex';
          });
      } else {
          console.error("Menu icon or nav-bar not found in the header.");
      }
  }

  // Load the header
  loadHeader();
});
