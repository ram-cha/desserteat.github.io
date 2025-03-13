document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Form Submission and Popup

    
        const contactForm = document.getElementById("contactForm");
        const thankYouPopup = document.getElementById("thankYouPopup");
        const userName = document.getElementById("userName");
      
        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();
      
          // Get Form Values
          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const phone = document.getElementById("phone").value.trim();
          const message = document.getElementById("message").value.trim();
      
          // Validate Form Fields
          if (name === "" || email === "" || phone === "" || message === "") {
            alert("Please fill out all fields.");
            return;
          }
      
          // Simulate Form Submission (Replace with actual backend logic)
          console.log("Form Submitted:", { name, email, phone, message });
      
          // Show Thank You Popup with Name
          userName.textContent = name;
          thankYouPopup.style.display = "flex";
      
          // Reset Form
          contactForm.reset();
        });
      
        // Close Popup
        window.closePopup = function () {
          thankYouPopup.style.display = "none";
        };
   
  
    // Add to Cart Button Action
    let cartCount = 0;
    const cartCounter = document.getElementById("cartCounter");
  
    document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", function () {
        const itemName = this.getAttribute("data-name");
        const itemPrice = this.getAttribute("data-price");
  
        // Update Cart Counter
        cartCount++;
        cartCounter.textContent = cartCount;
        cartCounter.classList.add("show-counter");
  
        // Show Animation
        const cartIcon = document.querySelector(".cart i");
        cartIcon.classList.add("animate");
        setTimeout(() => {
          cartIcon.classList.remove("animate");
        }, 500);
  
        // Add Item to Cart (You can expand this to store items in a cart array)
        console.log(`Added ${itemName} for $${itemPrice} to cart.`);
      });
    });

    // Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  }
  
  // Close Mobile Menu on Link Click
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      const navLinks = document.querySelector(".nav-links");
      navLinks.classList.remove("active");
    });
  });
  
    // Sticky Navigation on Scroll
    window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    // Add Scroll Event Listener
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const heroSection = document.querySelector(".hero");
    const heroHeight = heroSection.offsetHeight;
  
    if (window.scrollY > heroHeight * 0.1) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  
    // View Cart
    function viewCart() {
      alert(`You have ${cartCount} item(s) in your cart.`);
    }

// Function to toggle the mobile navigation menu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Function to check screen width and enable/disable toggle
function handleMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (window.innerWidth <= 768) {
    // Enable toggle functionality for mobile view
    hamburger.addEventListener('click', toggleMenu);
  } else {
    // Disable toggle functionality for desktop view
    hamburger.removeEventListener('click', toggleMenu);
    navLinks.classList.remove('active'); // Ensure menu is closed on desktop
  }
}

// Initial check on page load
handleMobileMenu();

// Re-check on window resize
window.addEventListener('resize', handleMobileMenu);

  
  });





  
