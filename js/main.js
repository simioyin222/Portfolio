$(document).ready(function() {
  console.log("jQuery is loaded");

  // Your existing code here...
  // Remove or comment out the old '.open-overlay' click handler to avoid conflicts

  $('.open-overlay').click(function() {
      var overlay_navigation = $('.overlay-navigation'),
          top_bar = $('.bar-top'),
          middle_bar = $('.bar-middle'),
          bottom_bar = $('.bar-bottom');

      overlay_navigation.toggleClass('overlay-active');
      if (overlay_navigation.hasClass('overlay-active')) {
          overlay_navigation.velocity('transition.slideDownIn', {duration: 300});
          
          // Animating each bar of the burger menu
          top_bar.addClass('animate-top-bar');
          middle_bar.addClass('animate-middle-bar');
          bottom_bar.addClass('animate-bottom-bar');

          // Animating list items with Velocity.js
          $('nav ul li').velocity('transition.slideRightIn', {
              stagger: 150,
              complete: function() {
                  $('nav ul li a').velocity({ opacity: [1, 0] }, { duration: 140 });
              }
          });
      } else {
          overlay_navigation.velocity('transition.slideUpOut', {duration: 300});
          
          // Reversing the animation of each bar
          top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
          middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
          bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');

          $('nav ul li').velocity('transition.slideLeftOut', {
              stagger: 150,
              complete: function() {
                  $('nav ul li a').velocity({ opacity: [0, 1] }, { duration: 50 });
              }
          });
      }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.overlay-navigation ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

const projects = [
  {
      name: 'Project One',
      description: 'This is a great project.',
      link: '#',
      imageUrl: 'path/to/image.jpg'
  },
  {
      name: 'Project Two',
      description: 'Another great project.',
      link: '#',
      imageUrl: 'path/to/another-image.jpg'
  }
  // add more projects as needed
];

function loadProjects() {
  const projectsContainer = document.querySelector('.project-container');

  projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.className = 'project';
      projectElement.innerHTML = `
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
          <img src="${project.imageUrl}" alt="${project.name}" />
      `;
      projectsContainer.appendChild(projectElement);
  });
}

document.addEventListener('DOMContentLoaded', loadProjects);

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Here you would typically gather the form data and send it to a server
    alert('Thank you for your message!');
    contactForm.reset();
});