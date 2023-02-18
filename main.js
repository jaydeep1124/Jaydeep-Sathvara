
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar-nav');
const links = document.querySelectorAll('.navbar-nav li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle('fade');
  });
});

// Define the URL of your home page
const homeUrl = "https://jaydeep1.netlify.app/#home";

// Check if the page has finished loading
window.addEventListener("load", () => {
  // If the URL of the current page is not the home page, redirect to the home page
  if (window.location.href !== homeUrl) {
    window.location.href = homeUrl;
  }
});

// get the button element
const button = document.querySelector('#my-button');

// add a click event listener to the button
button.addEventListener('click', function() {
  // get the element you want to animate
  const elementToAnimate = document.querySelector('#my-element');

  // add a CSS class to the element to trigger the animation
  elementToAnimate.classList.add('animate');
});

// kikikik
function animateTimelineItems() {
  $(".timeline-item").each(function() {
    if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.9) {
      $(this).addClass("show");
    }
  });
}

$(document).ready(function() {
  animateTimelineItems();
  $(window).on("scroll", animateTimelineItems);
});

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

// contect 
// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  const form = document.querySelector('.form');
  
  // Add an event listener to the form submit event
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally
    
    // Get the form input values
    const name = document.querySelector('#Name').value.trim();
    const subject = document.querySelector('#Subject').value.trim();
    const message = document.querySelector('#Message').value.trim();
    
    // Validate the form input values
    if (!name || !subject || !message) {
      alert('Please fill in all fields.'); // Show an error message if any field is empty
      return;
    }
    
    // Send the form data to the server using fetch
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      if (response.ok) {
        alert('Thank you for your message!'); // Show a success message if the form submission is successful
        form.reset(); // Reset the form
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch(error => {
      console.error('There was a problem with the form submission:', error);
      alert('There was a problem with your message. Please try again later.'); // Show an error message if the form submission fails
    });
  });
});

const projectsSection = document.querySelector('.projects');
const projectItems = document.querySelectorAll('.project');

function checkScroll() {
  let inView = false;

  projectItems.forEach(item => {
    const position = item.getBoundingClientRect();
    if(position.top < window.innerHeight && position.bottom >= 0) {
      inView = true;
      item.classList.add('visible');
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
      item.classList.remove('visible');
    }
  });

  if(inView) {
    projectsSection.classList.add('visible');
    projectsSection.classList.remove('hidden');
  } else {
    projectsSection.classList.add('hidden');
    projectsSection.classList.remove('visible');
  }
}

window.addEventListener('scroll', checkScroll);
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
});

const aboutMeContent = document.querySelector('.about-me-content');

observer.observe(aboutMeContent);
