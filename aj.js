document.querySelectorAll('.nav-item').forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default behavior of link clicks
      
      // Remove the 'active' class from all navigation items
      document.querySelectorAll('.nav-item').forEach(function(item) {
        item.classList.remove('active');
      });
      
      // Add the 'active' class to the clicked navigation item
      this.classList.add('active');
    });
  });
  